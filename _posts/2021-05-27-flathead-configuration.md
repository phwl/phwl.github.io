---
author: phwl
comments: true
date: 2021-05-27 15:54:42 AEDT
title: Flathead Ubuntu GPU Machine Install
classes: wide
categories:
- academia
tags:
- software
- ubuntu
header:
  teaser: /assets/images/2021/05/IMG_7892.jpeg
---

This is how a new machine, flathead, was configured.
{% include figure image_path="/assets/images/2021/05/IMG_7892.jpeg" caption="" %}

## Machine
The machine was purchased from [Mwave](http://mwave.com.au). 
```
Supermicro 7049GP-TRT 
Dual Intel Xeon Silver 4208
256GB ECC RDIMM 3200 Mhz
1TB  M.2 nvme SSD
1 x 4TB 7.2K HDD 
4 x Nvidia GeForce RTX3090 24GB OEM Graphics Cards
```

## Step 1 BIOS Boot Mode
In the BIOS settings set boot mode to Legacy (the Ubuntu 20.04 USB doesn't
boot in UEFI mode).

## Step 2 Install Ubuntu
```
sudo apt purge nvidia-*
sudo apt autoremove
sudo ubuntu-drivers autoinstall
```
Then follow the [Nvidia instructions](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html)
using the Package Manager method and deb(network) installer type. 
After adding the package, I installed the 11.1.1-1 version to be compatible
with pytorch.
```
sudo apt-get -y install cuda=11.1.1-1
sudo shutdown -r now
```

## Step 2 Install Anaconda
```
wget https://repo.anaconda.com/archive/Anaconda3-2021.05-Linux-x86_64.sh
sh Anaconda3-2021.05-Linux-x86_64.sh
conda install pytorch cudatoolkit=11.1 -c pytorch -c nvidia
```

Seems to work
```
(base) phwl@flathead:~$ cat /proc/driver/nvidia/version 
NVRM version: NVIDIA UNIX x86_64 Kernel Module  460.73.01  Thu Apr  1 21:40:36 UTC 2021
GCC version:  
(base) phwl@flathead:~$ python
Python 3.8.8 (default, Apr 13 2021, 19:58:26) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import torch
>>> list(map(torch.cuda.get_device_name, range(4)))
['GeForce RTX 3090', 'GeForce RTX 3090', 'GeForce RTX 3090', 'GeForce RTX 3090']
>>> 
```
