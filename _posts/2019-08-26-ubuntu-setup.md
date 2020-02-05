---
author: phwl
comments: true
date: 2019-08-26 09:51:57 AEST
slug: ubuntu-nvdia-19
title: Setting up some new Ubuntu/NVIDIA machines
classes: wide
categories:
- software
tags:
- ubuntu
- linux
header:
  teaser: /assets/images/2019/08/Nvidia_logo.svg
---

Some new machines arrived in the lab including a Dell XPS 8930 Desktop with
Dell UltraSharp U2518D monitor.

Here is how I configured the machine:
 * /etc/network/interfaces should be

```
# interfaces(5) file used by ifup(8) and ifdown(8)
auto lo
iface lo inet loopback

# The primary network interface
auto enp4s0
iface enp4s0 inet dhcp
```

 * /etc/hosts should be

```
127.0.1.1       trout.staff.sydney.edu.au trout
```

 * The NFS entry in /etc/fstab

```
10.65.xx.yy:/volume1/homes /nfs/homes   nfs   vers=4.1,defaults    0       0
```

did not mount upon booting. I think this is because the order was wrong. This can be fixed by adding a file containing
```
#!/bin/sh
mount -a
```

to /etc/network/if-up.d/fstab.

 * Monitor would never wake up after machine screen saver activated. This was because of the default open source Ubuntu Nouveau drivers. To fix, installing the NVIDIA drivers: https://medium.com/@zhanwenchen/install-cuda-10-1-and-cudnn-7-5-0-for-pytorch-on-ubuntu-18-04-lts-9b6124c44cc.

 * 5/2/2020 - after an update the external monitor stopped working. I followed <https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu-18-04> and installed nvidia-driver-440 to fix.

For reference, the configuration of the machine is:
 * XPS 8930 Base
 * 9th Gen Intel(R) Core(TM) i7 9700 (8-Core, 12MB Cache, up to 4.7GHz with Intel(R) Turbo Boost
Technology)
 * XPS 8930, Mainstream Chassis (460W)
 * 16GB, 2x8GB, DDR4, 2666MHz
 * M.2 512GB PCIe x4 SSD + 2TB 7200 rpm Hard Drive
 * Tray load DVD Drive (Reads and Writes to DVD/CD)
 * NVIDIA(R) GeForce RTX(TM) 2060 6GB GDDR6
 * Killer 1535 802.11ac 2x2 WiFi and Bluetooth 4.1
 * Dell USB Mouse
 * Dell Wired Keyboard KB216 Black (English)
