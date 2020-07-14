---
author: phwl
comments: true
date: 2020-06-09 11:56:56 AEST
title: DUST2 Ubuntu GPU Machine Install
classes: wide
toc: true
categories:
- software
tags:
- ubuntu
- linux
header:
  teaser: /assets/images/2019/08/Nvidia_logo.svg
---

(last update 14/7/2020)  

Another new machine in the lab, here are my setup notes.

## Machine Details

```
Power Supply : Gigabyte AORUS AP750GM
Motherboard : MSI MPG X570 GAMING PRO CARBON WIFI AM4 ATX Motherboard          
AB58526 Fractal Design Define R5 Mid-Tower ATX Case - Black 
AC15551 Cooler Master MasterFan MF120R ARGB 120mm Fan - 3 Pack + LED Controller 
AC16770 Cooler Master MasterLiquid ML360R ARGB AIO Liquid CPU Cooler 
AC18159 ASUS GeForce RTX 2080 Ti ROG Strix Advanced 11GB Video Card 
AC19488 Crucial P1 1TB NVMe M.2 PCIe 3D NAND SSD CT1000P1SSD8 
AC20161 Seagate ST2000DM008 2TB BarraCuda 3.5" 7200RPM SATA3 Desktop Hard Drive 
AMD Ryzen 9 3900X 12 Core Socket AM4 3.8GHz CPU Processor + Wraith Prism Cooler
AC29335 G.Skill Ripjaws V 64GB (2x 32GB) DDR4 3200MHz CL16 Memory - Black 
```

## Ubuntu Installation

* Configure BIOS to boot on power failure
* Install Ubuntu 18.04
* Note can't log in using the display manager so ctrl-alt-F3 to get a tty and install NVidia drivers.  First check default install is ok 

```
ubuntu-drivers devices
```

and then

```
sudo ubuntu-drivers autoinstall
```

* Edit /etc/hosts to be 

```
127.0.0.1	localhost
127.0.1.1	machinename.staff.sydney.edu.au machinename

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```

* Edit /etc/hostname to be

```
machinename
```

 * Install packages

```
sudo apt install net-tools openssh-server nfs-kernel-server nfs-common
sudo sysemctl start ssh
```

 * Create partition and figure out blkid

```
sudo fdisk /dev/sda
sudo mkfs -t ext4 /dev/sda1
sudo blkid
```

 * Edit /etc/fstab to mount disks

```
UUID=43920ded-edf5-4c1e-821a-1a0abff665cc /media/seagate2g ext4 defaults 0 1
fileservername.staff.sydney.edu.au:/volume1/xxx /home/xxx nfs   vers=4.1,defaults    0       0
```

 * Move /home to the other partition

```
sudo mount -a
cd /home
sudo rsync -av . /media/seagate2g/home
cd /
mv home home.old
ln -s /media/seagate2g/home home
# check everything is ok before
sudo rm -rf home.old
```

 * Reboot and you should be able to ssh to the machine (and the display manager should work)

 * Create users

## CUDA 
 * Install cuda following instructions at <https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html>. I used the package manager method and installed both version 11.0 and 10.2-89.1 (because pytorch only supports 10.2 at present). 

 * Reboot

```
sudo shutdown -r now
```

## Anaconda Pytorch
 * Install anaconda (locally, download from <https://www.anaconda.com/products/individual>)

Put the below in ~/.bashrc and ```source ~/.bashrc```.

```
export PATH=/usr/local/cuda-10.2/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-10.2/lib64\
                         ${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

 * Install pytorch 

```
conda install pytorch torchvision cudatoolkit=10.2 -c pytorch
```

 * Check driver

```
(base) phwl@dust2:~$ cat /proc/driver/nvidia/version
NVRM version: NVIDIA UNIX x86_64 Kernel Module  450.51.05  Sun Jun 28 10:33:40 UTC 2020
GCC version:  gcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04) 
```

 * Check pytorch

```
(base) phwl@dust2:~$ python
Python 3.7.6 (default, Jan  8 2020, 19:59:22) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import torch
>>> torch.cuda.current_device()
0
>>> torch.cuda.device(0)
<torch.cuda.device object at 0x7f345859e790>
>>> torch.cuda.get_device_name(0)
'GeForce RTX 2080 Ti'
>>> 

```

