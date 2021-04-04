---
author: phwl
comments: true
date: 2021-04-01 11:32:43 AEST
title: Debian on armhf emulation via QEMU
use_math: true
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---
This post describes how to emulate an Arm hard float (armhf) using
using ```qemu``` and install Debian Linux on the emulator. 

I used Ubuntu 18.04.5 but any Debian/Ubuntu distribution can be used with minor changes. Note that this didn't work under VirtualBox but a USB-bootable Ubuntu distribution should be fine.


## Install Debian on qemu-system-arm
Install qemu.
```
sudo apt update
sudo apt upgrade
mkdir qemu; cd qemu
sudo apt install qemu-system-arm
```

Download [initrd.gz](http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/cdrom/initrd.gz), [vmlinuz](http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/cdrom/vmlinuz) and
[debian-10.9.0-armhf-netinst.iso](http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-netinst.iso)
(alternatively
[debian-10.9.0-armhf-xfce-CD-1.iso](http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-xfce-CD-1.iso)).
```
wget http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/cdrom/initrd.gz
wget http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/cdrom/vmlinuz
wget http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-netinst.iso
```

```
qemu-img create -f qcow2 debian-3607.qcow2 16G # 8G will also work but not leave enough disk space for other things
qemu-system-arm -M virt -kernel ./vmlinuz -initrd ./initrd.gz -hda debian-3607.qcow2 -nographic -m 1024M -append "console=ttyAMA0" -drive file=debian-10.9.0-armhf-netinst.iso,id=cdrom,if=none,media=cdrom -device virtio-scsi-device -device scsi-cd,drive=cdrom
```

Use all of the defaults for the Debian installer.
 * I used "elec3607" for all user names and passwords.
 * For partitioning select "Guided - use entire disk". Note that this chooses /dev/vda2 for / (we will use this later).
 * If you get a "Failed to install the base system" message, try a second time from the menu.
 * Select linux-image-armmp-lpae for the kernel.
 * Select targeted for initrd.
 * For software to install, just choose "SSH server" and "standard system utilities" (the default).
 * You will receive the message that GRUB installation failed. We will fix this later.
 * Exit ```qemu``` with "control-A x".

Extract the kernel and initrd from the disk image.
```
sudo apt-get install libguestfs-tools
virt-ls -a debian-3607.qcow2 /boot/
virt-copy-out -a debian-3607.qcow2 /boot/vmlinuz-4.19.0-16-armmp-lpae /boot/initrd.img-4.19.0-16-armmp-lpae .
```

Now you can run your Debian-Arm Linux from either Linux:
```
qemu-system-arm -M virt -kernel vmlinuz-4.19.0-16-armmp-lpae \
-initrd initrd.img-4.19.0-16-armmp-lpae -append 'root=/dev/vda2' \
-drive if=virtio,file=debian-3607.qcow2,format=qcow2,id=hd \
-device intel-hda -device hda-duplex \
-nographic
```

## Install sudo and put ELEC3607 in the sudo group
Login as ```elec3607``` (password is ```elec3607```) and execute the following commands.
Note that the basic distribution of Debian does not include sudo.
```
elec3607@debian:~$ su -
Password: 
root@debian:~# apt install sudo 
Reading package lists... Done
...
usermod -G sudo elec3607
shutdown now
```

## Install everything else
The complete list of Debian packages is available [here](https://www.debian.org/distrib/packages).
For example to install the alsa and pulseaudio packages.

```
sudo apt install libasound2 libasound2-plugins libasound2-doc alsa-utils pulseaudio
```
