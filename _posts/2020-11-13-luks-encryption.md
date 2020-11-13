---
author: phwl
comments: true
date: 2019-08-26 09:51:57 AEST
slug: luks-encryption
title: Luks Encryption under Ubuntu
classes: wide
categories:
- software
tags:
- ubuntu
- linux
header:
  teaser: https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png
---

This is how to copy a LUKS partition from back1 to back2. 
We assume the original device is already mounted using:
```
cryptsetup luksOpen /dev/disk/by-uuid/dc861b6d-0113-4da8-9c74-23fb1e759195 back1
mount /dev/mapper/back1 /srv/back1
```

First create a LUKS partition (back2 on /dev/sdc1)
 1. Repartition drive with ```sudo fdisk /dev/sdc``` as a linux partition
 1. ```sudo cryptsetup luksFormat /dev/sdc1```

Mount the new LUKS device and copy data
```
sudo cryptsetup luksOpen /dev/sdc1 back2
sudo dd if=/dev/mapper/back1 of=/dev/mapper/back2 bs=64k
```

Unmount everything:

```
umount /srv/back1
cryptsetup luksClose /dev/mapper/back1
cryptsetup luksClose /dev/mapper/back2
```
