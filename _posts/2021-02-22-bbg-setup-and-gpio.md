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
to connect to my network.  One can then ```ssh debian@beaglebone.local```
to access.

## 2. GPIO
As mentioned in my [earlier post](/2021/QEMU-ARM-Linux-gpio/), libgpiod
is the standard way to use GPIO under Linux. To use it on the BBG, one must
first download the library and include files.
```sh
sudo apt update
sudo apt install libgpiod-dev
```

You can check everything is working by turning on the D5 LED for 10 seconds 
using
```
debian@beaglebone:~$ gpioset -m time -s 10 gpiochip1 24=1
```
and turning it off for 10 seconds
```
debian@beaglebone:~$ gpioset -m time -s 10 gpiochip1 24=0
```
Note that after ```gpioset``` exits, the data of the output is undefined.

## 3. Exercise
Download, compile and execute the ```blink``` program which
flashes the D5 LED as follows:
```bash
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

debian@beaglebone:~$ git clone https://github.com/phwl/elec3607-materials
Cloning into 'elec3607-materials'...
remote: Enumerating objects: 22, done.
remote: Counting objects: 100% (22/22), done.
remote: Compressing objects: 100% (17/17), done.
remote: Total 22 (delta 5), reused 17 (delta 3), pack-reused 0
Unpacking objects: 100% (22/22), done.
debian@beaglebone:~$ cd elec3607-materials/labs/lab1-gpio/
debian@beaglebone:~/elec3607-materials/labs/lab1-gpio$ gcc -o blink blink.c -lgpiod
debian@beaglebone:~/elec3607-materials/labs/lab1-gpio$ ./blink
```

Modify the program so that, in addition to blinking the LED, it will
print the status of the S2 button on each iteration of the loop.
