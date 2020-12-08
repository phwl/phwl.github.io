---
author: phwl
comments: true
date: 2020-11-23 14:45:42 AEDT
title: Albacore Ubuntu GPU Machine Install
classes: wide
categories:
- academia
tags:
- software
- ubuntu
header:
  teaser: https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png
---

This is how a new machine, albacore, was configured.

## Machine
The machine was purchased from [Mwave](http://mwave.com.au). I've purchased a few machines from them and always impressed with their service. Here is the configuration
```
AB47402 Mwave Custom PC Assembly and Testing Service 2 $169.00 $338.00
AB59620 SilverStone Sugo Series SG13 Mini ITX Case - Mesh Front Panel 2 $69.00 $138.00
AB69770 Corsair Vengeance LPX 32GB (2x 16GB) DDR4 3200MHz Memory 2 $209.00 $418.00
AC12989 Seagate ST8000DM004 8TB BarraCuda 3.5" SATA3 Desktop Hard Drive 2 $249.00 $498.00
AC13202 Samsung 970 EVO 1TB NVMe 1.3 M.2 (2280) 3D V-NAND SSD - MZ-V7E1T0BW 2 $189.00 $378.00
AC17689 Noctua NF-A12x25 FLX 120mm 3-Pin Fan 2 $65.00 $130.00
AC24743 AMD Ryzen 5 3600 6 Core Socket AM4 3.6GHz CPU Processor + Wraith Stealth Cooler 2 $319.00 $638.00
AC27759 SilverStone SX700-PT 700W 80+ Platinum Modular SFX Power Supply 2 $249.00 $498.00
AC35557 Gigabyte B550I AORUS PRO AX AM4 Mini-ITX Motherboard 2 $319.00 $638.00
AC25330 Gigabyte GeForce RTX 2060 SUPER WINDFORCE OC 8GB Video Card 2 $629.00 $1258.00

Order Status: Completed Sub-Total $4932.00
Date & Time Shipped: 19/11/2020 Shipping Cost $30.00
```
Here is the [motherboard manual](https://www.gigabyte.com/Motherboard/B550I-AORUS-PRO-AX-rev-10/support#support-manual).

## Step 1 Wifi and Fix Ethernet 
To connect to the University of Sydney wifi
```
Security: WPA & WPA2 Enterprise
Authentication: Protected EAP (PEAP)
Anonymous identity:<blank>
CA certificate: (None) - Check "No CA certificate is required"
PEAP version: Automatic
Inner authentication: MSCHAPv2
Username: <unikey> 
Password: <password>
```

```
sudo apt update
sudo apt upgrade
sudo apt install openssh-server net-tools rclone libelf-dev build-essential
```

Ethernet didn't work out of the box so I used a USB ethernet device and 
installed the realtek driver for the B550 chipset available
from [Realtek](https://www.realtek.com/en/component/zoo/category/network-interface-controllers-10-100-1000m-gigabit-ethernet-pci-express-software).

## Step 2 Install cuda
Then follow the [Nvidia instructions](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html)
using the Package Manager method and deb(network) installer type. This doesn't quite work as you need to do a
```
sudo apt purge nvidia-*
sudo apt autoremove
sudo ubuntu-drivers autoinstall
```
before installing cuda
```
sudo apt install cuda=10.2.89-1
```
In ```~/.profile``` add
```
export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-10.2/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

## Step 3 Install anaconda/pytorch
Install [anaconda](https://www.anaconda.com/products/individual)
```
wget https://repo.anaconda.com/archive/Anaconda3-2020.07-Linux-x86_64.sh
sh Anaconda3-2020.07-Linux-x86_64.sh
conda install pytorch torchvision cudatoolkit=10.2 -c pytorch
```

Seems to work
```
(base) cruxml@amberjack:~$ cat /proc/driver/nvidia/version
NVRM version: NVIDIA UNIX x86_64 Kernel Module  450.51.06  Sun Jul 19 20:02:54 UTC 2020
GCC version:  gcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04) 
(base) cruxml@amberjack:~$ python
Python 3.8.3 (default, Jul  2 2020, 16:21:59) 
[GCC 7.3.0] :: Anaconda, Inc. on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import torch
>>> torch.cuda.current_device()
0
>>> torch.cuda.device(0)
<torch.cuda.device object at 0x7fa9a5fab310>
>>> torch.cuda.get_device_name(0)
'GeForce RTX 2060 SUPER'
>>> 
```

## Step 4 Install docker
```
sudo apt update

sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker cruxml
```
You need to log out and log in again for the group change to work.

## Step 5 Install other stuff
```
sudo apt install hddtemp lm-sensors nvme-cli
sudo sensors-detect --auto # unfortunately didn't find anything!
sudo add-apt-repository universe
sudo apt update
sudo apt install exfat-fuse exfat-utils
```

## Step 6 Vivado
Installed Vitis 
```
sudo sh Xilinx_Unified_2019.2_1106_2127_Lin64.bin
# installed to /opt instead of /tools
```

The following *did not* work:
```
sudo apt install ./xrt_201920.2.3.1301_18.04-xrt.deb
```

So I installed XRT from the instructions <https://xilinx.github.io/XRT/master/html/build.html>.

Following <https://www.hackster.io/AlbertaBeef/vitis-ai-1-1-flow-for-avnet-vitis-platforms-part-1-007b0e>:
```
HOME=$HOME
export VITIS_AI_HOME=$HOME/src/xilinx/Vitis-AI
export SDX_PLATFORM=$HOME/src/xilinx/ULTRA96V2/ULTRA96V2.xpfm
export TRD_HOME=$VITIS_AI_HOME/DPU-TRD-ULTRA96V2
cd /opt/Xilinx/Vitis/2019.2
source settings64.sh
cd /opt/xilinx/xrt
source setup.sh
cd $TRD_HOME/prj/Vitis
# make KERNEL=DPU DEVICE=ULTRA96V2
```

## Step 7 Install Balena Etcher
Follow instructions at <https://www.balena.io/etcher/>


