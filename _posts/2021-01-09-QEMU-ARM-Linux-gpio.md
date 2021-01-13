---
author: phwl
comments: true
date: 2021-01-09 20:26:12 AEST
title: GPIO on QEMU ARM Linux 
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/01/armlogo.jpeg
---

This post details how to use the GPIO peripheral on the ARM linux image 
built in [Creating an emulated ARM Linux system using Buildroot and QEMU]({% link _posts/2021-01-07-emulated-ARM-Linux-with-Buildroot-and-QEMU.md %}) 


## 1. Linux libgpiod Library Command Line Tools
Since Linux v4.8, the standard way of using Linux GPIO has been via 
[libgpiod](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/).
Prior to the introduction of libgpiod, the
sysfs interface was used, but sysfs is depreciated and was removed from the mainline Linux kernel
in 2020. 
The best source of information on libgpiod
[comes with the library](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/about/).

Here is a summary of the command line tools that it comes with:
 * gpiodetect - list all gpiochips present on the system, their names, labels
               and number of GPIO lines

 * gpioinfo   - list all lines of specified gpiochips, their names, consumers,
               direction, active state and additional flags

 * gpioget    - read values of specified GPIO lines

 * gpioset    - set values of specified GPIO lines, potentially keep the lines
               exported and wait until timeout, user input or signal

 * gpiofind   - find the gpiochip name and line offset given the line name

 * gpiomon    - wait for events on GPIO lines, specify which events to watch,
               how many events to process before exiting or if the events
               should be reported to the console.

Examples (also from the documentation) of how they are used:
``` sh
    # Read the value of a single GPIO line.
    $ gpioget gpiochip1 23
    0

    # Read two values at the same time. Set the active state of the lines
    # to low.
    $ gpioget --active-low gpiochip1 23 24
    1 1

    # Set values of two lines, then daemonize and wait for a signal (SIGINT or
    # SIGTERM) before releasing them.
    $ gpioset --mode=signal --background gpiochip1 23=1 24=0

    # Set the value of a single line, then exit immediately. This is useful
    # for floating pins.
    $ gpioset gpiochip1 23=1

    # Find a GPIO line by name.
    $ gpiofind "USR-LED-2"
    gpiochip1 23

    # Toggle a GPIO by name, then wait for the user to press ENTER.
    $ gpioset --mode=wait `gpiofind "USR-LED-2"`=1

    # Wait for three rising edge events on a single GPIO line, then exit.
    $ gpiomon --num-events=3 --rising-edge gpiochip2 3
    event:  RISING EDGE offset: 3 timestamp: [    1151.814356387]
    event:  RISING EDGE offset: 3 timestamp: [    1151.815449803]
    event:  RISING EDGE offset: 3 timestamp: [    1152.091556803]

    # Wait for a single falling edge event. Specify a custom output format.
    $ gpiomon --format="%e %o %s %n" --falling-edge gpiochip1 4
    0 4 1156 615459801

    # Pause execution until a single event of any type occurs. Don't print
    # anything. Find the line by name.
    $ gpiomon --num-events=1 --silent `gpiofind "USR-IN"`

    # Monitor multiple lines, exit after the first event.
    $ gpiomon --silent --num-events=1 gpiochip0 2 3 5
```
`

Here we use the ```libgpiod``` tools to determine there is one gpiochip (gpiochip0) and that they are initially all set as inputs. We can also see that while
gpio lines can have names, all of the ones on this machine are unnamed.
```
phwl@bream:~/elec3607/buildroot/output/images$ H=~/elec3607
phwl@bream:~/elec3607/buildroot/output/images$ cd $H/buildroot/output/images
phwl@bream:~/elec3607/buildroot/output/images$ ./start-qemu.sh 
Booting Linux on physical CPU 0x0000000000 [0x410fd034]
... sh
Welcome to Buildroot
buildroot login: root
# gpiodetect 
gpiochip0 [9030000.pl061] (8 lines)
# gpioinfo
gpiochip0 - 8 lines:
	line   0:      unnamed       unused   input  active-high 
	line   1:      unnamed       unused   input  active-high 
	line   2:      unnamed       unused   input  active-high 
	line   3:      unnamed       unused   input  active-high 
	line   4:      unnamed       unused   input  active-high 
	line   5:      unnamed       unused   input  active-high 
	line   6:      unnamed       unused   input  active-high 
	line   7:      unnamed       unused   input  active-high 
# 
```

Here is a link to a tutorial explaining the
changes
<https://microhobby.com.br/blog/2020/02/02/new-linux-kernel-5-5-new-interfaces-in-gpiolib/>.

## 2. Blink

### 2.1 Using gpiod
Using the gpiod library, 
the following program will change the state of pin 3 on gpiochip0 ten times.

{% highlight C linenos %}
/*
**    blink.c -    blink gpiochip0 line 3 with delay given by either
**                 the command line or the default (NSPERIOD)
*/

#include <stdio.h>
#include <unistd.h>
#include <gpiod.h>

#define NSPERIOD    200000000ULL    /* output period in ns */

int 
main(int argc, char *argv[])
{
    struct gpiod_chip *output_chip;
    struct gpiod_line *output_line;
    struct timespec delay = {0, NSPERIOD};
    struct timespec rem;
    int line_value;

    if (argc == 2)
        delay.tv_nsec = atoll(argv[1]);

    /* open /dev/gpiochip0 */
    output_chip = gpiod_chip_open_by_number(0);
    
    /* work on pin 3 */
    output_line = gpiod_chip_get_line(output_chip, 3);

    /* config as output and set a description */
    gpiod_line_request_output(output_line, "blink",
                  GPIOD_LINE_ACTIVE_STATE_HIGH);

    for (int i = 0; i < 10; i++)
    {
        line_value = !line_value;
        gpiod_line_set_value(output_line, line_value);
            nanosleep(&delay, &rem);
    }
    
    return 0;
}
{% endhighlight %}

If the C program is written to ~/src/teaching/labs/lab2/blink.c, it can be 
compiled using:
``` sh
phwl@bream:~/elec3607/labs/lab2$ H=~/src/teaching/
phwl@bream:~/elec3607/labs/lab2$ $H/buildroot/output/host/bin/aarch64-buildroot-linux-uclibc-gcc -o blink blink.c -lgpiod 
```

In QEMU you can copy the file from the host to the guest and execute:
``` sh
# scp phwl@10.0.2.2:src/teaching/labs/lab2/gpio .
phwl@10.0.2.2's password: 
# ./gpio
#
```

### 2.2 Displaying GPIO_DATA
Nothing appears to happen as there is no output in QEMU. Normally in
an embedded system (as the name of the program suggests), we would 
have the GPIO line connected to an LED, which would blink according
to the program.

The GPIO peripheral used in the
qemu_aarch64_virt machine is described in the 
 [ARM PrimeCell General Purpose Input/Output (PL061) Technical Reference Manual](https://developer.arm.com/documentation/ddi0190/b) (which we will call the datasheet).  During boot up, the message
```
pl061_gpio 9030000.pl061: PL061 GPIO chip registered
```
or using
```info mtree``` in the QEMU monitor, you get
```
0000000009030000-0000000009030fff (prio 0, i/o): pl061
```
shows that the start address (GPIOBASE in the datasheet) is 0x9030000.
The address of GPIODATA is 0x9030000-0x9030ff and GPIODIR is 0x9030400.

We can use the following program to interrogate the state of the GPIODATA
register in the PL061 and print its value when it changes.

{% highlight C linenos %}
/*
**    pl061-change.c     - display changes to the GPIO_GPIODATA state
*/

#include <stdio.h>
#include <sys/mman.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <time.h>

#define GPIO0_START_ADDR 0x09030000
#define GPIO0_END_ADDR   0x09030fff
#define GPIO0_SIZE (GPIO0_END_ADDR - GPIO0_START_ADDR)

#define GPIO_GPIODATA    0

/* high resolution time stamp */
double
gethrtime()
{
    int    r;
    int64_t    ts;
    struct timespec t;

    /* read the time stamp */
    r = clock_gettime(CLOCK_MONOTONIC, &t);
    ts = (int64_t)(t.tv_sec) * (int64_t)1000000000 + (int64_t)(t.tv_nsec);
    return ts / 1.0e9;
}

int
main()
{
    volatile void *gpio_addr;
    volatile unsigned char *gpio_gpiodata_addr;
    unsigned char        c, oldc;

    int fd = open("/dev/mem", O_RDWR);
    gpio_addr = mmap(0, GPIO0_SIZE, PROT_READ | PROT_WRITE, 
            MAP_SHARED, fd, GPIO0_START_ADDR);

    gpio_gpiodata_addr   = gpio_addr + GPIO_GPIODATA + 0xff;

    
    oldc = c = *gpio_gpiodata_addr;

    for (;;)
    {
        c = *gpio_gpiodata_addr;
        if (c != oldc)
        {
            oldc = c;
            printf("GPIODATA=%x (t=%fs)\n", c, gethrtime());
        }
    }
}
{% endhighlight %}

After copying it to the guest, it can be used to verify blink as follows:
``` sh
# ./pl061-change &
# ./blink 
GPIODATA=8 (t=46.833710s)
GPIODATA=0 (t=47.033845s)
GPIODATA=8 (t=47.233977s)
GPIODATA=0 (t=47.434119s)
GPIODATA=8 (t=47.634252s)
GPIODATA=0 (t=47.834385s)
GPIODATA=8 (t=48.034518s)
GPIODATA=0 (t=48.234652s)
GPIODATA=8 (t=48.434785s)
GPIODATA=0 (t=48.634919s)
```

The time on the output shows that the period of the GPIO output change
is roughly 0.2s which is close to the value of NSPERIOD (the desired delay
in nanoseconds) specified in blink.c.

## 3. libgpiod Application Programmers' Interface Programming
Is it possible to display the state of the GPIO while simultaneously
writing to it? The first shell command sets gpiochip0 line 1,
and stays in the background (the -b option) for 10 seconds (-mtime -s10)
before ending. You can't read the line with gpioget until the gpioset
program ends.

```sh
# gpioset -b -mtime -s10 gpiochip0 1=1
# gpioget gpiochip0 1
gpioget: error reading GPIO values: Device or resource busy
# 
```

Normally, we use the GPIO pins to control something and don't need
to read what we wrote. But is it possible to do so in QEMU?  The
solution turned out more complicated than I would have liked.

The first thing is that we want to do the read and write in parallel,
not as two separate processes. There are many ways to do this but
multithreading (using [POSIX threads](https://computing.llnl.gov/tutorials/pthreads/)) is one solution. The second problem is that the writer must release the
line so that the reader can access it or you get the same "Device or
resource busy" error.

The code below implements these ideas.  The gpio_reader() function
checks when a pin changes and prints the new state. This
gpiod_line_event_wait() function will return with a value > 0 if
an event has occurred and we print the pin state and time. Otherwise,
it either encountered an error or timed out.  The gpio_writer()
function toggles the output after a fixed delay, specified in the
delay structure. A mutual exclusion (via the mutexline variable)
is used to ensure that only the reader or writer has access to the
line at any time. This restricts the line to either be an output
(via gpiod_line_request_output()) or an event (via
gpiod_line_request_both_edges_events()) at any time, not both.

These two threads run in parallel and when they get the line, will
perform their task, after which they sleep (via nanosleep()). The gpio_reader()
function executes about 100x faster than the writer.

{% highlight C linenos %}
/*
**    Blinky under QEMU and libgpiod
*/

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <assert.h>
#include <gpiod.h>
#include <time.h>
 
#define CONSUMER "gpiod-lab"        /* this identifies the consumer */
#define NUM_THREADS 2               /* we have one writer and one reader */
#define NSPERIOD    200000000ULL    /* output period in ns */

pthread_mutex_t mutexline;          /* only reader or writer can access line */
 
/* create thread argument struct for thr_func() */
typedef struct _thread_data_t 
{
    int tid;
    struct gpiod_line *gpioline;
} thread_data_t;
 
/* high resolution time stamp */
double
gethrtime()
{
    int    r;
    int64_t    ts;
    struct timespec t;

    /* read the time stamp */
    r = clock_gettime(CLOCK_MONOTONIC, &t);
    ts = (int64_t)(t.tv_sec) * (int64_t)1000000000 + (int64_t)(t.tv_nsec);
    return ts / 1.0e9;
}

/*
**    Display edges 
*/
void
gpio_reader(struct gpiod_line *line)
{
    struct timespec timeout = { 0, NSPERIOD / 100ULL };
    struct timespec shortdelay = { 0, NSPERIOD / 100ULL };
    struct timespec rem;
    int    r, v;
    int    event = 0;

    for (;;)
    {
        /* get exclusive access to the line */
        pthread_mutex_lock (&mutexline);

        /* get line */
        if (r = gpiod_line_request_both_edges_events(line, CONSUMER))
            goto release;

        /* wait for an event */
        r = gpiod_line_event_wait(line, &timeout);
        if (r > 0)    /* success */
        {
            /* read the gpio pin value */
            v = gpiod_line_get_value(line);
            printf("Event %d: Pin=%d at t=%fs\n", ++event, v, gethrtime());
        }

        /* release the line */
    release:
        gpiod_line_release(line);
        pthread_mutex_unlock (&mutexline);
        nanosleep(&shortdelay, &rem);
    }
}

/*
**    Blink a number of times
*/
void
gpio_writer(struct gpiod_line *line)
{
    struct timespec delay = { 0, NSPERIOD / 2 };
    struct timespec rem;
    int    v = 0;
    int    r;

    for (int i = 0; i < 10; i++)
    {
        /* get exclusive access to the line */
        pthread_mutex_lock (&mutexline);
        /* config as output and set a description */
        if (r = gpiod_line_request_output(line, CONSUMER, v))
            goto release;

        /* toggle output */
        v = !v;
        gpiod_line_set_value(line, v);

        /* release line */
    release:
        gpiod_line_release(line);
        pthread_mutex_unlock (&mutexline);
        nanosleep(&delay, &rem);
    }
}

/* 
**    Create pthreads - the thread created will either be a reader or writer 
*/
void *thr_func(void *arg) {
    thread_data_t *data = (thread_data_t *)arg;
 
    switch(data->tid) 
    {
        case 0: /* writer */
            gpio_writer(data->gpioline);
            break;
        default: /* reader */
            gpio_reader(data->gpioline);
            break;
    }
 
    pthread_exit(NULL);
}
 
int 
main(int argc, char **argv) 
{
    pthread_t thr[NUM_THREADS];
    pthread_attr_t attr;
    int i, r;
    /* create a thread_data_t argument array */
    thread_data_t thr_data[NUM_THREADS];

    /* gpio structures */
    struct gpiod_chip *output_chip;
    struct gpiod_line *output_line;

    /* open /dev/gpiochip0 */
    output_chip = gpiod_chip_open_by_number(0);
    
    /* work on pin 3 */
    output_line = gpiod_chip_get_line(output_chip, 3);

    /* create threads */
    pthread_mutex_init(&mutexline, NULL);
    for (i = 0; i < NUM_THREADS; ++i) 
    {
        thr_data[i].tid = i;
        thr_data[i].gpioline = output_line;
        assert(pthread_create(&thr[i], NULL, thr_func, &thr_data[i]) == 0);
    }
    /* block until thread 0 completes */
    pthread_join(thr[0], NULL);
    fflush(stdout);
 
    return EXIT_SUCCESS;
}
{% endhighlight %}

If the C program is written to ~/src/teaching/labs/lab2/gpio.c, it can be 
compiled using:
``` sh
phwl@bream:~/elec3607/labs/lab2$ H=~/src/teaching/
phwl@bream:~/elec3607/labs/lab2$ $H/buildroot/output/host/bin/aarch64-buildroot-linux-uclibc-gcc -o gpio gpio.c -lgpiod -lpthread
```

When executed under QEMU (it needs to first be transferred to the guest via ssh), you will see:
``` sh
# scp phwl@10.0.2.2:src/teaching/labs/lab2/gpio .
phwl@10.0.2.2's password: 
# ./gpio
Event 1: Pin=1 at t=19925.878483s
Event 2: Pin=0 at t=19925.978926s
Event 3: Pin=1 at t=19926.077777s
Event 4: Pin=0 at t=19926.179461s
Event 5: Pin=1 at t=19926.277994s
Event 6: Pin=0 at t=19926.381006s
Event 7: Pin=1 at t=19926.479734s
Event 8: Pin=0 at t=19926.582780s
Event 9: Pin=1 at t=19926.681464s
Event 10: Pin=0 at t=19926.784994s
```

