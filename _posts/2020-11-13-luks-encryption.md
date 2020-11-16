---
author: phwl
comments: true
date: 2020-11-13 09:51:57 AEST
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

# Copy a LUKS volume
This is how to copy a LUKS partition from back1 to back2. 
We assume the original device is already opened using:
```
cryptsetup luksOpen /dev/disk/by-uuid/dc861b6d-0113-4da8-9c74-23fb1e759195 back1
```

First create a LUKS partition (back2 on /dev/sdc1)
 1. Repartition drive with ```sudo fdisk /dev/sdc``` as a linux partition
 1. ```sudo cryptsetup luksFormat /dev/sdc1```

Open the new LUKS device and copy data
```
sudo cryptsetup luksOpen /dev/sdc1 back2
sudo mkfs.ext4 /dev/mapper/back2
```

Close everything so we can start from scratch for the copying:
```
cryptsetup luksClose /dev/mapper/back1
cryptsetup luksClose /dev/mapper/back2
```

# Copying
Find UUIDS using ```blkid```, then
```
cryptsetup luksOpen /dev/disk/by-uuid/dc861b6d-0113-4da8-9c74-23fb1e759195 back1
cryptsetup luksOpen /dev/disk/by-uuid/b6e6191b-673a-49c2-87b0-7a1a2d880bb1 back2
mount /dev/mapper/back1 /srv/back1
mount /dev/mapper/back2 /srv/back2
nohup rsync -Phav /srv/back1/ /srv/back2&
```

# Mounting
## Ubuntu 
```
cryptsetup luksOpen /dev/disk/by-uuid/b6e6191b-673a-49c2-87b0-7a1a2d880bb1 back2
mount /dev/mapper/back2 /srv/back2
```

## Windows using Ubuntu in Hyper-V. 
   * The trick here is you need to right click -> Disk Management -> (take drive offline). 
   * Then in Hyper-V, you go to Setting -> SCSI-Controller -> (add the drive as a physical drive)
   * Use an External Virtual Switch to put the machine on the same subnet as your host and samba to share the drive

## MacOS using Ubuntu in VMWare 
   * It took me a long time to figure out that you can only pass through the disk as a USB 3.0 disk and have to install Guest Additions from Preferences on VMWare. 
   * Use an Bridged Adapter to put the machine on the same subnet as your host and samba to share the drive

# Mounting
You can mount the shared drive from a Ubuntu machine as follows
```
mount -t cifs //phwlnuc/back2 /srv/back2 -v -o username=phwl,uid=$(id -u),gid=$(id -g),iocharset=utf8,vers=3.0
```
# Closing
```
umount /srv/back1
umount /srv/back2
cryptsetup luksClose /dev/mapper/back1
cryptsetup luksClose /dev/mapper/back2
```
