---
author: phwl
comments: true
date: 2020-10-09 19:54:42 AEDT
title: Amberjack Ubuntu GPU Machine Install
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
1. Erase disk and install everything to /dev/nvme0n1. Select LVM.

## Step 3 Move /opt /var /home to hard disk
```
sudo -i
mkdir /srv; mkdir /src/fs
mount /dev/sda1 /srv/fs
rsync -aXP /opt /var /home /srv/fs
cd /
mv opt opt.old
mv var var.old
mv home home.old
```
Add the mounts to ```/etc/fstab``` 
```
# mount the local HD to /home, /var and /opt
/dev/disk/by-uuid/HARD_DISK /srv/fs auto nodev,nofail,x-gvfs-show 0 0
/srv/fs/home	/home	none	bind	0	0
/srv/fs/var	/var	none	bind	0	0
/srv/fs/opt	/opt	none	bind	0	0
```
and reboot. After it reboots successfully you can 
```
sudo rm -rf /opt.old /home.old /var.old
```

## Step 4 Install cuda
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

## Step 5 Install anaconda/pytorch
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

## Step 6 Install docker
```
sudo apt update

sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker cruxml
```
You need to log out and log in again for the group change to work.

## Step 7 Install other stuff
```
sudo apt install hddtemp lm-sensors nvme-cli
sudo sensors-detect --auto # unfortunately didn't find anything!
sudo add-apt-repository universe
sudo apt update
sudo apt install exfat-fuse exfat-utils
```

## Step 8 Vivado
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

## Step 9 Install Balena Etcher
Follow instructions at <https://www.balena.io/etcher/>


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

## Update
 * 9/4/2021 Bluetooth stopped working and I couldn't turn it on any more. Fixed with:
```
$ sudo rmmod btusb
$ sudo modprobe btusb
```

