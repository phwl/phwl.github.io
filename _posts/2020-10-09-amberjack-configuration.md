---
author: phwl
comments: true
date: 2020-10-09 19:54:42 AEDT
title: Amberjack configuration
classes: wide
categories:
- academia
tags:
- software
- ubuntu
header:
  teaser: https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png
---

This is how a new machine, amberjack, was configured.

## Machine
The machine was purchased from [Mwave](http://mwave.com.au). I've purchased a few machines from them and always impressed with their service. Here is the configuration
```
AC16427	MSI B450I GAMING PLUS AC AM4 Mini-ITX Motherboard				1	1	$225.00	$225.00
AB83276	SilverStone Strider Essential ST60F-ES230 600W 80 Plus Power Supply		1	1	$75.00	$75.00
AC19487	Crucial P1 500GB NVMe M.2 PCIe 3D NAND SSD CT500P1SSD8				1	1	$89.00	$89.00
AC23360	Respawn Ninja x MWAVE Gaming Mouse Pad Small - Black				1	1	$1.00	$1.00
AB47402	Mwave Custom PC Assembly and Testing Service					1	1	$199.00	$199.00
AB52361	Advanced Transportation Packing Solution					1	1	$19.99	$19.99
AC26501	Kingston HyperX FURY RGB 32GB (2x 16GB) DDR4 3200MHz Memory			1	1	$209.00	$209.00
AC29726	ASUS GeForce RTX 2060 SUPER Turbo EVO 8GB Video Card				1	1	$649.00	$649.00
AC12989	Seagate ST8000DM004 8TB BarraCuda 3.5" SATA3 Desktop Hard Drive			1	1	$299.00	$299.00
AB64976	Windows 10 Professional 64-bit OEM DVD						1	1	$219.00	$219.00
AB59620	SilverStone Sugo Series SG13 Mini ITX Case - Mesh Front Panel			1	1	$69.00	$69.00
AC24744	AMD Ryzen 5 3600X 6 Core Socket AM4 3.8GHz CPU Processor + Wraith Spire Cooler	1	1	$369.00	$369.00

Total of Invoice Inc GST $2,490.33
Total GST $226.39
```
Here is the [motherboard manual](https://download.msi.com/archive/mnu_exe/mb/E7A40v2.2.pdf).

## Step 1 Update BIOS to enable virtualisation
In the BIOS settings set
```
Overclocking -> OC Explore Mode -> Expert
Overclocking -> CPU Features -> SVM Mode -> Enable
```
then boot machine (into Windows 10).

## Step 2 Install Ubuntu
1. Erase disk and install everything to /dev/nvme0n1

## Step 3 Install cuda
```
sudo apt update
sudo apt upgrade
sudo apt install openssh-server net-tools rclone
```
Then follow the [Nvidia instructions](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html)
using the Package Manager method and deb(network) installer type. This doesn't quite work as you need to do a
```
sudo apt purge nvidia-*
sudo apt autoremove
sudo apt install 
sudo apt install 
```
before installing cuda
```
sudo apt install cuda=10.2.89-1
```
In ```~/.profile``` add
```
export PATH=/usr/local/cuda-11.1/bin${PATH:+:${PATH}}
```

## Step 4 Install docker
```
sudo apt update

sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
```

## Step XX (Decided against running ubuntu under windows 10) 

How to set up Ubuntu 18.04 under Hyper-V
1. Right click on the Windows button and select ‘Apps and Features’.
1. Select Programs and Features on the right under related settings.
1. Select Turn Windows Features on or off.
1. Select Hyper-V and click OK.

I then mounted my home samba shared disk:
1. In File explorer, right click on the PC -> Add a Network Location -> \\machinename\back1

Then install Ubuntu.
1. In Hyper-V manager (Quick create). 
1. I wanted the virtual hard disk to be on the ```E:``` drive. Edit the settings of the VM and edit the
Virtual Hard Disk" to convert the image from 
```C:\Users\Public\Public Documents\Hyper-V\Virtual Hard Disks``` to
```E:\srv\amberjack\hyperv\ubuntu-hd1```.

Don't upgrade to 20.04!

