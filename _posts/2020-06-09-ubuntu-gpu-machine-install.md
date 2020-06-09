---
author: phwl
comments: true
date: 2020-06-09 11:56:56 AEST
title: Ubuntu GPU Machine Install
classes: wide
categories:
- software
tags:
- ubuntu
- linux
header:
  teaser: /assets/images/2019/08/Nvidia_logo.svg
---

Another new machine in the lab, here is the configuration.

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

 * Create users

 * Install anaconda (locally, download from <https://www.anaconda.com/products/individual>)

 * Install pytorch 

```
conda install pytorch torchvision cudatoolkit=10.2 -c pytorch
```

 * Reboot and you should be able to ssh to the machine (and the display manager should work)

 * Here are the machine details

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
