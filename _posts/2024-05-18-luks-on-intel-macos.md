---
author: phwl
comments: true
date: 2024-05-18 09:30:00 AEST
title: LUKS on Intel MacOS (using an ARM64 ArchLinux image under UTM)
use_math: true
toc: true
classes: wide
categories:
- academia
tags:
- linux
header:
  teaser: https://guardianproject.info/wp-content/uploads/2011/02/luks-logo-cropped.png
---

For quite a while I've wanted to mount LUKS-encrypted partitions to my
MacOS machines ([here](https://phwl.org/2022/wsl2-tips/) is how to do it in Windows). Here is a way to do it using the UTM virtual machine.

# VM
1. Download ArchLinux ARM from <https://mac.getutm.app/gallery/archlinux-arm>.
1. Unzip archlinux-arm64-utm4.zip which will create ArchLinux.utm
1. In UTM create a new VM and Open the UTM file; run from the GUI and it should boot an emulated Linux.
1. Resize the disk to 20G and mem to 8G.
1. From the ArchLinux menu, pass through your USB drive.
1. ```pacman -Syu```
1. Install samba: ```pacman -Sy; pacman -S samba```
1. ```curl 'https://git.samba.org/samba.git/?p=samba.git;a=blob_plain;f=examples/smb.conf.default;hb=HEAD' > /etc/samba/smb.conf```
1. Configure samba according to https://linuxways.net/arch/install-configure-samba-arch-linux/
1. ```useradd phwl; mkdir /home/phwl; chown phwl:phwl /home/phwl; passwd phwl;```
1.  ```groupadd -r smbusers; usermod -aG smbusers phwl```
1. ```smbpasswd -a phwl```
1. ```cryptsetup luksOpen /dev/sda1 onetouch```
1. ```mkdir /samba; chown -R :smbusers /samba; mount /dev/mapper/onetouch /samba```
1. ```systemctl enable --now smb```
1. ```systemctl enable --now nmb```
1. ```ifconfig```

# Host
1. You should be able to run the Finder, Go, Connect to server: smb://192.168.64.2
1. You can also start it up automatically from MacOS using the following script:
```bash
$ utmctl start 2F2C4095-EC5B-49CD-A654-FE17D7EC7CAA
$ utmctl usb connect "ArchLinux" "0BC2:AB84"
```
