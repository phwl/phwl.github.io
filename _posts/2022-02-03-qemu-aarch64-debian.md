---
author: phwl
comments: true
date: 2022-02-03 11:30:00 AEST
title: Debian on QEMU-emulated ARM-64 aarch64
use_math: true
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: https://www.debian.org/Pics/openlogo-50.png
---
This post describes how to emulate an ARM 64 bit (aarch64) processor using using ```qemu``` and install Debian Linux on the emulator. It's a follow on post from <https://phwl.org/2021/qemu-armhf-debian/>.

I used Ubuntu 18.04.6 but any Debian/Ubuntu distribution can be used with minor changes and it should work under VirtualBox. 

# 1. Create QEMU Image

## 1.1. For (64-bit) aarch64
I used the lastest version of [qemu](https://github.com/qemu/qemu) from github
and created a 32G qcow2 image (there isn't any disk space advantage to specifying 16G but it is a pain if it runs out).

```bash
$ qemu-system-aarch64 --version
QEMU emulator version 5.2.92 (v6.0.0-rc2)
Copyright (c) 2003-2021 Fabrice Bellard and the QEMU Project developers
$ qemu-img create -f qcow2 debian-3607-aarch64.qcow2 32G 
$ wget http://ftp.au.debian.org/debian/dists/bullseye/main/installer-arm64/current/images/netboot/debian-installer/arm64/initrd.gz
$ wget http://ftp.au.debian.org/debian/dists/bullseye/main/installer-arm64/current/images/netboot/debian-installer/arm64/linux
$ wget http://ftp.au.debian.org/debian/dists/bullseye/main/installer-arm64/current/images/netboot/mini.iso
$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G -kernel ./linux -initrd ./initrd.gz \
-hda debian-3607-aarch64.qcow2 -nographic  -append "console=ttyAMA0" \
-drive file=mini.iso,id=cdrom,if=none,media=cdrom -device virtio-scsi-device -device scsi-cd,drive=cdrom \
-net user,hostfwd=tcp::10022-:22 -net nic -nographic \
-device intel-hda -device hda-duplex
```
```bash
$ sudo apt install libguestfs-tools
$ sudo chmod 644 /boot/vmlinuz-5.4.0-9* # or else virt-ls won't work
$ virt-ls -a debian-3607-aarch64.qcow2 /boot/
System.map-5.10.0-10-arm64
System.map-5.10.0-11-arm64
config-5.10.0-10-arm64
config-5.10.0-11-arm64
initrd.img
initrd.img-5.10.0-10-arm64
initrd.img-5.10.0-11-arm64
initrd.img.old
lost+found
vmlinuz
vmlinuz-5.10.0-10-arm64
vmlinuz-5.10.0-11-arm64
vmlinuz.old
$ virt-copy-out -a debian-3607-aarch64.qcow2 /boot/vmlinuz-5.10.0-11-arm64 /boot/initrd.img-5.10.0-11-arm64 .

$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G -initrd initrd.img-5.10.0-11-arm64 \
    -kernel vmlinuz-5.10.0-11-arm64 -append "root=/dev/vda2 console=ttyAMA0" \
    -drive if=virtio,file=debian-3607-aarch64.qcow2,format=qcow2,id=hd \
    -net user,hostfwd=tcp::10022-:22 -net nic -nographic -device intel-hda -device hda-duplex
```
