---
author: phwl
comments: true
date: 2021-02-22 14:02:12 AEST
title: BeagleBone Green Getting Started and GPIO
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---

This post details how to get started with a BeagleBone Green (BBG) microSD card and
program it via GPIO.

## 1. Getting Started
Instructions for getting started with the BBG are available at at 
at <https://beagleboard.org/getting-started>. This involves downloading
the Debian Linux image and writing it to a microSD card (make sure you
use the Debian image for the BBG). My version was:
```
Buster IoT (without graphical desktop) for BeagleBone and PocketBeagle via microSD card
AM3358 Debian 10.3 2020-04-06 4GB SD IoT image for PocketBeagle, BeagleBone, BeagleBone Black, BeagleBone Black Wireless, BeagleBone Black Industrial, BeagleBone Blue, SeeedStudio BeagleBone Green, SeeedStudio BeagleBone Green Wireless, SanCloud BeagleBone Enhanced, Arrow BeagleBone Black Industrial and Mentorel BeagleBone uSomIQ - more info - sha256sum: 22448ba28d0d58e25e875aac3b4e91eaef82e2d11c9d2c43d948ed60708f7434
```

The driver for networking via USB didn't work with the latest version
of MacOS (Big Sur 11.2.1) but the BBG was able to use DNS over Ethernet
to connect to my network (this won't work in the lab if there is more
than one BBG plugged into the network).  One can then run ```ssh``` to access (use "temppwd" as the
password for user "debian")
``` bash
debian@beaglebone:~$ ssh -Y debian@beaglebone.local
Debian GNU/Linux 10

BeagleBoard.org Debian Buster IoT TIDL Image 2020-04-06

Support: http://elinux.org/Beagleboard:BeagleBoneBlack_Debian

default username:password is [debian:temppwd]

debian@beaglebone.local's password: 

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Mon Feb 22 22:27:56 2021 from 192.168.0.32
debian@beaglebone:~$
```

## 2. GPIO
As described in <http://phwl.org/2021/QEMU-ARM-Linux-gpio/>, libgpiod
is the standard way to use GPIO under Linux. To use it on the BBG, one must
first download the library and include files.
```sh
sudo apt update
sudo apt install libgpiod-dev
```

You can check everything is working by detecting the GPIO chips
and printing their labels and state. 
```
debian@beaglebone:~$ gpiodetect
gpiochip0 [gpio] (32 lines)
gpiochip1 [gpio] (32 lines)
gpiochip2 [gpio] (32 lines)
gpiochip3 [gpio] (32 lines)
debian@beaglebone:~$ gpioinfo
gpiochip0 - 32 lines:
	line   0:  "MDIO_DATA"       unused   input  active-high 
	line   1:   "MDIO_CLK"       unused   input  active-high 
...
```

Now turn on the D5 LED for 10 seconds using
``` bash
debian@beaglebone:~$ gpioset -m time -s 10 gpiochip1 24=1
```
and turn it off for 10 seconds
```
debian@beaglebone:~$ gpioset -m time -s 10 gpiochip1 24=0
```
Note that after ```gpioset``` exits, the data of the output is undefined.

## 3. Laboratory Experiment
### Part 1 - S2 Button Input (40%)
Download, compile and execute the ```blink``` program which flashes the D5 LED as follows

``` bash
phwl@PHWL-MBP ~ % ssh debian@beaglebone.local
Debian GNU/Linux 10

BeagleBoard.org Debian Buster IoT TIDL Image 2020-04-06

Support: http://elinux.org/Beagleboard:BeagleBoneBlack_Debian

default username:password is [debian:temppwd]

debian@beaglebone.local password: 

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Mon Feb 22 08:49:57 2021 from fe80::8b4:5a85:cfb2:5eb%eth0

debian@beaglebone:~$ git clone https://github.com/phwl/elec3607-labquestions
Cloning into 'elec3607-labquestions'...
remote: Enumerating objects: 22, done.
remote: Counting objects: 100% (22/22), done.
remote: Compressing objects: 100% (17/17), done.
remote: Total 22 (delta 5), reused 17 (delta 3), pack-reused 0
Unpacking objects: 100% (22/22), done.
debian@beaglebone:~$ cd elec3607-labquestions/labs/lab1-gpio/
debian@beaglebone:~/elec3607-labquestions/labs/lab1-gpio$ gcc -o blink blink.c -lgpiod
debian@beaglebone:~/elec3607-labquestions/labs/lab1-gpio$ ./blink
```

Here is a listing of ```blink.c```
{% highlight C linenos %}
/*
 * **    blink.c -    blink with 1s delay 
 * */

#include <stdio.h>
#include <unistd.h>
#include <gpiod.h>

#define GPIOCHIP        1
#define GPIOLINE        24

int 
main(int argc, char *argv[])
{
        struct gpiod_chip *output_chip;
        struct gpiod_line *output_line;
        int line_value;

        /* open chip and get line */
        output_chip = gpiod_chip_open_by_number(GPIOCHIP);
        output_line = gpiod_chip_get_line(output_chip, GPIOLINE);

        /* config as output and set a description */
        gpiod_line_request_output(output_line, "blink", GPIOD_LINE_ACTIVE_STATE_HIGH);

        for (;;)
        {
                line_value = !line_value;
                gpiod_line_set_value(output_line, line_value);
                sleep(1);
        }

        return 0;
}
{% endhighlight %}


Modify the program so that, in addition to blinking the LED, it will
print the status of the S2 button once a second as below.
You will need to refer to the [reference manual for libgpiod](http://phwl.org/assets/images/2021/02/libgpiod-ref.pdf).
``` bash
debian@beaglebone:~$ ./blink 
S2=1
...
S2=0
```

### Part 2 - Seven Segment Display (60%)
The data sheet for a seven segment display (SSD) is available [here](http://www.farnell.com/datasheets/2863910.pdf). 
 1. Each segment should be driven by a BBG output which supports 6mA drive. Select 6 such pins on the P8 connector that meet this requirement.
 1. Calculate the resistor value so that the current to drive the LED (voltage is 3.3V-Vf where Vf=the diode forward voltage drop) doesn't exceed 4mA.
 1. Connect up the SSD to the BBG via a breadboard.
 1. Program the SSD so the value changes in value 0 to 9 every second then goes back to 0. When S2 is pressed it should count backwards.
