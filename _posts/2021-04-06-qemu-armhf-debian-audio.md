---
author: phwl
comments: true
date: 2021-04-06 09:00:00 AEST
title: Debian on armhf emulation via QEMU audio support
use_math: true
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---
This post describes how to use audio on Arm hard float (armhf) under
```qemu``` Debian Linux. 

I used Virtualbox with Ubuntu 20.04.2 but any Debian/Ubuntu distribution can be used with minor changes. 

Ubuntu host
```
```

First create a debian distribution with the generic initrd.
```
qemu-system-arm -M virt -kernel vmlinuz-4.19.0-16-armmp-lpae -initrd initrd.img-4.19.0-16-armmp-lpae -append 'root=/dev/vda2' -drive if=virtio,file=debian-3607-fullinitrd.qcow2,format=qcow2,id=hd  -nographic -soundhw all

sudo apt install alsa-tools pulseaudio pavucontrol libasound2 alsa-utils
modprobe snd-hda-intel
modprobe snd-hda-core
modprobe ac97_bus 
modprobe snd-ac97-codec
alsactl init
```

qemu-system-arm -M virt -kernel vmlinuz-4.19.0-16-armmp-lpae -initrd initrd.img-4.19.0-16-armmp-lpae -append 'root=/dev/vda2' -drive if=virtio,file=debian-3607-lab4sol.qcow2,format=qcow2,id=hd -nographic -net user,hostfwd=tcp::10022-:22 -net nic  -device ich9-intel-hda,addr=1f.1 -audiodev pa,id=snd0 -device hda-output,audiodev=snd0
https://www.debian.org/doc/manuals/debian-kernel-handbook/ch-common-tasks.html
apt install libssl-dev 
