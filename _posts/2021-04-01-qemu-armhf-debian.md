---
author: phwl
comments: true
toc: true
date: 2021-04-01 11:32:43 AEST
title: Debian on ARM via QEMU
use_math: true
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---
This post describes how to emulate an ARM 64 bit (aarch64) or ARM hard float 32 bit (armhf) processor using using ```qemu``` and install Debian Linux on the emulator. Actually I did the 32 bit one first so the process is a little more streamlined for 64 bit.

I used Ubuntu 18.04.5 but any Debian/Ubuntu distribution can be used with minor changes. Note that this didn't work under VirtualBox but a USB-bootable Ubuntu distribution should be fine.

# 1. Create QEMU Image

## 1.1. For (64-bit) aarch64
I used the lastest version of [qemu](https://github.com/qemu/qemu) from github
and created a 32G qcow2 image (there isn't any disk space advantage to specifying 16G but it is a pain if it runs out).

```bash
$ qemu-system-aarch64 --version
QEMU emulator version 5.2.92 (v6.0.0-rc2)
Copyright (c) 2003-2021 Fabrice Bellard and the QEMU Project developers
$ qemu-img create -f qcow2 debian-3607-aarch64.qcow2 32G 
$ wget http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/arm64/iso-cd/debian-10.9.0-arm64-xfce-CD-1.iso
$ wget http://ftp.au.debian.org/debian/dists/buster/main/installer-arm64/20190702/images/cdrom/initrd.gz
$ wget http://ftp.au.debian.org/debian/dists/buster/main/installer-arm64/20190702/images/cdrom/vmlinuz
$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G     -initrd initrd.img-4.19.0-16-arm64     -kernel vmlinuz-4.19.0-16-arm64    -append "root=/dev/sda2 console=ttyAMA0"     -global virtio-blk-device.scsi=off     -device virtio-scsi-device,id=scsi     -drive file=debian-3607-aarch64.qcow2,id=rootimg,cache=unsafe,if=none     -device scsi-hd,drive=rootimg  -net user,hostfwd=tcp::10022-:22 -net nic    -nographic -device intel-hda -device hda-duplex
```
 *  No common CD-ROM drive was detected: Manually select to use /dev/vdb

```bash
$ virt-copy-out -a debian-3607-aarch64.qcow2 /boot/vmlinuz-4.19.0-16-arm64 /boot/initrd.img-4.19.0-16-arm64 .

$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G -initrd initrd.img-4.19.0-16-arm64 \
    -kernel vmlinuz-4.19.0-16-arm64 -append "root=/dev/vda2 console=ttyAMA0" \
    -drive if=virtio,file=debian-3607-aarch64.qcow2,format=qcow2,id=hd \
    -net user,hostfwd=tcp::10022-:22 -net nic -nographic -device intel-hda -device hda-duplex
```

Then you can login as root and
```bash
# apt update
# apt 
```


## 1.2. For (32-bit) armhf

Install qemu.
```bash
$ sudo apt update
$ sudo apt upgrade
$ mkdir qemu; cd qemu
$ sudo apt install qemu-system-arm
```

Download [initrd.gz](http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/netboot/initrd.gz), [vmlinuz](http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/netboot/vmlinuz) and
[debian-10.9.0-armhf-netinst.iso](http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-netinst.iso)
(alternatively
[debian-10.9.0-armhf-xfce-CD-1.iso](http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-xfce-CD-1.iso)).
```bash
$ wget http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/netboot/initrd.gz
$ wget http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/netboot/vmlinuz
$ wget http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-netinst.iso
```

```bash
$ qemu-img create -f qcow2 debian-3607.qcow2 16G # 8G will also work but not leave enough disk space for other things
$ qemu-system-arm -M virt -kernel ./vmlinuz -initrd ./initrd.gz -hda debian-3607.qcow2 -nographic -m 1024M -append "console=ttyAMA0" -drive file=debian-10.9.0-armhf-netinst.iso,id=cdrom,if=none,media=cdrom -device virtio-scsi-device -device scsi-cd,drive=cdrom
```

Use all of the defaults for the Debian installer.
 * I used "elec3607" for all user names and passwords.
 * For partitioning select "Guided - use entire disk". Note that this chooses /dev/vda2 for / (we will use this later).
 * If you get a "Failed to install the base system" message, try a second time from the menu.
 * Select linux-image-armmp-lpae for the kernel.
 * Select targeted for initrd **(This was a mistake, choose generic)**
 * For software to install, just choose "SSH server" and "standard system utilities" (the default).
 * You will receive the message that GRUB installation failed. We will fix this later.
 * Exit ```qemu``` with "control-A x".

Extract the kernel and initrd from the disk image.
```bash
$ sudo apt-get install libguestfs-tools
$ virt-ls -a debian-3607.qcow2 /boot/
$ virt-copy-out -a debian-3607.qcow2 /boot/vmlinuz-4.19.0-16-armmp-lpae /boot/initrd.img-4.19.0-16-armmp-lpae .
```

Now you can run your Debian-Arm Linux from either Linux:
```bash
$ qemu-system-arm -M virt -kernel vmlinuz-4.19.0-16-armmp-lpae -initrd initrd.img-4.19.0-16-armmp-lpae \
-append 'root=/dev/vda2' -drive if=virtio,file=debian-3607-lab4sol.qcow2,format=qcow2,id=hd \
-nographic -net user,hostfwd=tcp::10022-:22 -net nic
```

# 2. Install sudo and put ELEC3607 in the sudo group
Login as ```elec3607``` (password is ```elec3607```) and execute the following commands.
Note that the basic distribution of Debian does not include sudo.
```bash
$ su -
Password: 
# apt install sudo 
Reading package lists... Done
...
usermod -a -G sudo elec3607
shutdown now
```

You can also ssh to the machine and use X windows.
```bash
$ ssh -Y elec3607@localhost -p 10022
```

The complete list of Debian packages is available [here](https://www.debian.org/distrib/packages).
