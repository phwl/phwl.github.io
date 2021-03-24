---
author: phwl
comments: true
toc: true
date: 2021-03-23 19:04:19 AEST
title: Building the Beaglebone kernel
use_math: true
classes: wide
categories:
- academia
tags:
- embedded
- beaglebone
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---
This post describes how to cross compile the Beaglebone Black (BBB) or Beaglebone Green (BBG) Linux kernel on an Ubuntu 18.04 Linux machine.


## 1. Introduction
**Before you proceed, back up your BBB files as we are going to overwrite them!**

Although it is possible to develop directly on a Linux embedded
platform, often the machine speed, disk and memory capacity are insufficient for
doing kernel work. Moreover, not all embedded systems have luxuries
such as Ethernet. For these reasons, the normal practice is to
compile on a more powerful host machine. In the descriptions that following, the ```$``` prompt is from the host machine and the ```debian@beaglebone:~$``` prompt is on the BBB.

The system that I am using is [Ubuntu
18.04.5](https://releases.ubuntu.com/18.04/).  Start by installing this on your real or virtual machine.

Also, you should update the Debian distribution on your BBB. Download and flash the [latest image](https://beagleboard.org/latest-images). Boot from an SD card with the latest image by pressing the "User Boot" button while applying power. 

Then extend the partition to the same size as the SDcard (the initial partition is 4 GB) by executing.
``` sh
$ sudo /opt/scripts/tools/grow_partition.sh
```
and rebooting.

## 2. Reflash the eMMC
If you want to [reflash the eMMC](https://elinux.org/Beagleboard:BeagleBoneBlack_Debian#Flashing_eMMC) as well, uncomment the following line in ```/boot/uEnv.txt```: 
```
cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
```
Then reboot again from the SDcard. After a few tens of seconds, you should see a pattern of the blue LEDs turning on in sequence. After tens of minutes, they will all turn off and your eMMC will have the same image as the SDcard.

## 2. Cross Compilation
On the BBB, work out what kernel version is being used:
``` sh
debian@beaglebone:~$ uname -r
4.19.94-ti-r42
```

Now install the cross compiler.
``` sh
$ sudo apt-get install gcc-arm-linux-gnueabi bison flex libssl-dev lzop u-boot-tools
```

Clone the BBB Linux repository and checkout the kernel version you are using. Even if you are planning to upgrade
the kernel, it is a good idea to make sure you can rebuild the original one first.
``` sh
$ git clone git://github.com/beagleboard/linux.git
$ git checkout 4.19.94-ti-r42
```

This installs installs the initial ```.config``` file for the BB kernel and tells the ```make``` system to use the cross compiler that we installed..
``` sh
$ make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- bb.org_defconfig
```

You can configure the kernel with custom options using the command.
``` sh
$ make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- menuconfig
```

While your there, select the SiLabs 5351A/B/C driver under "Kernel Configuration > Device Drivers > Common Clock Framework" as illustrated below.
```
.config - Linux/arm 4.19.94 Kernel Configuration
 > Device Drivers > Common Clock Framework                                     
  ┌─sssssssssssssssssssssss Common Clock Framework ─                        ┐
  │  Arrow keys navigate the menu.  <Enter> selects submenus ---> (or empty │  
  │  submenus ----).  Highlighted letters are hotkeys.  Pressing <Y>        │  
  │  includes, <N> excludes, <M> modularizes features.  Press <Esc><Esc> to │  
  │  exit, <?> for Help, </> for Search.  Legend: [*] built-in  [ ]         │  
  │ ┌─                                                                    ┐ │  
  │ │    [ ] PLL Driver for HSDK platform                                 │ │  
  │ │    < > Maxim 9485 Programmable Clock Generator                      │ │  
  │ │    <*> Clock driver for SiLabs 5351A/B/C                            │ │  
  │ │    < > Clock driver for SiLabs 514 devices                          │ │  
  │ │    < > Clock driver for SiLabs 544 devices                          │ │  
  │ │    < > Clock driver for SiLabs 570 and compatible devices           │ │  
  │ │    < > Clock driver for TI CDCE706 clock synthesizer                │ │  
  │ │    < > Clock driver for TI CDCE913/925/937/949 devices              │ │  
  │ │    < > Clock driver for CS2000 Fractional-N Clock Synthesizer & Cloc│ │  
  │ │    [ ] Clock driver for Freescale QorIQ platforms                   │ │  
  │ └─   ┴(+)                                                             ┘ │  
  ├─                                                                        ┤  
  │        <Select>    < Exit >    < Help >    < Save >    < Load >         │  
  └─                                                                        ┘  
```

After you finish, exit and save your configuation (it is fine not to make changes at this point). You can
see that what it did was to select the ```CONFIG_COMMON_CLK_SI5351``` option.
``` sh
$ grep 5351 .config
CONFIG_COMMON_CLK_SI5351=y
```

Now cross compile the kernel, specifying the loading address (0x80000000) and that we want to make an image suitable for Uboot (uImage) and to buid all the device tree binaries (dtbs),

``` sh
$ make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- LOADADDR=0x80000000 uImage dtbs
```

Now build the kernel modules.
```
$ make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- modules
```

Then strip and install them all to some temporary directory.
```
$ make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- INSTALL_MOD_STRIP=1 INSTALL_MOD_PATH=/tmp/bbbfs modules_install
```

## 3. Testing the new Kernel
First copy the kernel and modules to the BBB. You will need SDcard storage to include all the modules that are in Linux.
```
$ scp arch/arm/boot/uImage beaglebone.local:
$ scp -r /tmp/bbbfs beaglebone.local:
```

Then move the files into the correct location as root.
```
debian@beaglebone:~$ mv ~/bbbfs/lib/modules/4.19.94 /lib/modules
debian@beaglebone:~$ mv ~/zImage /boot/vmlinuz-4.19.94
```

Change the kernel that will be used to this one in ```/boot/uEnv.txt``` by modifying the ```uname_r``` 
environment variable.
```
# uname_r=4.19.94-ti-r42
uname_r=4.19.94
```
and reboot. We can check the new kernel is being used by the build time.
```
debian@beaglebone:~$ cat /proc/version
Linux version 4.19.94 (phwl@bream) (gcc version 7.5.0 (Ubuntu/Linaro 7.5.0-3ubuntu1~18.04)) #1 SMP PREEMPT Wed Mar 24 10:25:30 AEDT 2021
```

## 4. Docker version
[Install docker](https://docs.docker.com/engine/install/ubuntu/)e (if needed).

```
sudo apt install docker.io
wget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.6.15.tar.xz
tar -xf linux-5.6.15.tar.xz
cd linux-5.6.15
docker run --rm dockcross/linux-x64 > ./dockcross
chmod +x dockcross
./dockcross make defconfig
./dockcross make -j 4

