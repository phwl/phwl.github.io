---
author: phwl
comments: true
date: 2021-02-22 13:02:12 AEST
title: BeagleBone Green Getting Started 
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---

This post details how to get started with a BeagleBone Green (BBG) microSD card.

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

