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


## Step 1 Using GPIO
Note that the Linux GPIO interface was updated in 2020. Here is a link
to a website explaining the changes 
<https://microhobby.com.br/blog/2020/02/02/new-linux-kernel-5-5-new-interfaces-in-gpiolib/>. That means that many tutorials on the web are either obsolete or 
won't work with current kernels.
