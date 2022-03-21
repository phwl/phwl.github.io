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
How to install Debian Linux under an ARM 64 bit (aarch64) emulation using ```qemu```.

This is a follow on post from <https://phwl.org/2021/qemu-armhf-debian/>.
I used Ubuntu 18.04.6 but any Debian/Ubuntu distribution should work with minor changes. It also works under ```qemu``` on MacOS.

# 1. Create QEMU Image

## 1.1. Install Debian
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
    -hda debian-3607-aarch64.qcow2 -append "console=ttyAMA0" \
    -drive file=mini.iso,id=cdrom,if=none,media=cdrom \
    -device virtio-scsi-device -device scsi-cd,drive=cdrom -nographic
```
After booting you should see the Debian installer. Choose the appropriate 
options and install the Linux distribution. Following that, you need to extract
the Linux kernel and initrd from the qcow2 image.


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
```

## 1.2. Run Debian
To execute Debian, you need the following files:
```
initrd.img-5.10.0-11-arm64
vmlinuz-5.10.0-11-arm64
debian-3607-aarch64.qcow2
```

You can then boot the emulation with the following command line:

```bash
$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G -initrd initrd.img-5.10.0-11-arm64 \
    -kernel vmlinuz-5.10.0-11-arm64 -append "root=/dev/vda2 console=ttyAMA0" \
    -drive if=virtio,file=debian-3607-aarch64.qcow2,format=qcow2,id=hd \
    -net user,hostfwd=tcp::10022-:22 -net nic \
    -device intel-hda -device hda-duplex -nographic
```

You should now be able to log into the machine via ssh using the port specified in the qemu command line:
```bash
$ ssh -Y elec3607@localhost -p 10022
```

and also transfer files to it using ```scp```.

## 1.3. Update kernel (21/3/2022)

Since the way we execute ```qemu``` requires the vmlinuz and initrd files to run, when the kernel is updated, we need to extract them from the qcow2 image. The kernel was recently updated from 5.10.0-11 to 5.10.0-12.

In step 1.1, we extracted them using ```virt-copy-out```, but once we have bootstrapped debian, it is easier to use ```scp```. After updating the kernel using ```sudo apt upgrade```, you can copy the required files and execute as follows:
```bash
$ scp -P 10022 elec3607@localhost:/boot/vmlinuz-5.10.0-12-arm64 elec3607@localhost:/boot/initrd.img-5.10.0-12-arm64 .
$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G -initrd initrd.img-5.10.0-12-arm64 -kernel vmlinuz-5.10.0-12-arm64 -append "root=/dev/vda2 console=ttyAMA0" -drive if=virtio,file=debian-3607-aarch64-lab1.qcow2,format=qcow2,id=hd -net user,hostfwd=tcp::10022-:22 -net nic -device intel-hda -device hda-duplex -nographic
```
