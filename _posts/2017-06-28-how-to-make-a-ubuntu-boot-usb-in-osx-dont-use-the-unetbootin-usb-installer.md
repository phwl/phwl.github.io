---
author: phwl
comments: true
date: 2017-06-28 23:36:53+00:00
slug: how-to-make-a-ubuntu-boot-usb-in-osx-dont-use-the-unetbootin-usb-installer
title: How to make a Ubuntu boot usb in OSX (don't use the UNetbootin USB installer)
classes: wide
header:
  teaser: https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png
categories:
- software
---

I had a lot of trouble making an Ubuntu boot USB drive from OSX. The instructions on [https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos#0](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos#0) don't work in general. I think there are two reasons:




  * The program doesn't reformat the USB drive


  * If there are existing files on the USB from say a 32-bit Ubuntu and you create a 64-bit usb, UNetbootin doesn't overwrite all the necessary files. In this case the installation goes smoothly but when you reboot the installed system, you get a "No working init" error.



The best way to do it is:
<!-- more -->



  1. Insert your usb and determine device using

``` sh
    diskutil list
```

In my case it was /dev/disk2


  2. Unmount using

``` sh
    diskutil unmountDisk /dev/disk2
```


  3.  (BE CAREFUL YOU GET THE DISK NUMBER RIGHT IN THIS STEP) Assuming the ubuntu iso file is XX.iso, write to usb using


``` sh
    sudo dd if=XX.iso of=/dev/rdisk2 bs=4m
```



