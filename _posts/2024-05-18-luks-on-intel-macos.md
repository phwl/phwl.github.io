---
author: phwl
comments: true
date: 2024-05-18 09:30:00 AEST
title: LUKS on Intel or ARM Mac (using an ARM64 ArchLinux image under UTM)
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
MacOS machines ([here](https://phwl.org/2022/wsl2-tips/) is how to do it in Windows). This post describes a way to do it using UTM virtual machine.

# VM
1. ArchLinux Config
    * Download ArchLinux ARM from <https://mac.getutm.app/gallery/archlinux-arm>.
    * Unzip archlinux-arm64-utm4.zip which will create ArchLinux.utm
    * In UTM create a new VM and Open the UTM file. Then resize the disk to 16G and mem to 8G.
    * Run ArchLinux from the GUI and it should boot the emulated Linux.
1. LUKS
    * Identify the drive using ```lsblk``` (mine was /dev/sda1)
    * ```cryptsetup luksOpen /dev/sda1 onetouch```
1. Samba
    * From the ArchLinux menu, pass through your USB drive.
    * Install samba: ```pacman -Syu samba``` (choose 1) dbus-broker-units.
    * ```curl 'https://git.samba.org/samba.git/?p=samba.git;a=blob_plain;f=examples/smb.conf.default;hb=HEAD' > /etc/samba/smb.conf```
    * Configure samba according to https://linuxways.net/arch/install-configure-samba-arch-linux/ (summarised below)
    * Edit /etc/samba./smb.conf  and put the following at the end of the file
        ```
        [archshare]
            path = /samba
            writeable = yes
            browsable = yes
            read only = no
            guest ok = no
        ```
    * ```useradd phwl; mkdir /home/phwl; chown phwl:phwl /home/phwl; passwd phwl;```
    * ```passwd root```
    * ```groupadd -r smbusers; usermod -aG smbusers phwl```
    * ```smbpasswd -a phwl```
    * ```mkdir /samba; chown -R :smbusers /samba; mount /dev/mapper/onetouch /samba```
    * ```systemctl enable --now smb nmb```
    * ```ifconfig```

# Host
1. You should be able to run the Finder, Go, Connect to server: smb://192.168.64.2
1. You can also start it up automatically from MacOS using the following script:
```bash
$ utmctl start 2F2C4095-EC5B-49CD-A654-FE17D7EC7CAA
$ utmctl usb connect "ArchLinux" "0BC2:AB84"
```
