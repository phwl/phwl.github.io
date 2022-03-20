---
author: phwl
comments: true
date: 2020-09-26 14:02:24 AEST
title: Xilinx Vivado 2020.1 on Ubuntu using Docker
classes: wide
categories:
- academia
tags:
- FPGA
- software
- ubuntu
header:
  teaser: /assets/images/2022/02/docker_logo.png
---

Using Docker, installation of the Xilinx Vivado tools can be automated and
isolated.

## Step 1 Install Docker
You can either install Docker on Windows or MacOS using the instructions [here]({% post_url 2020-08-10-installing-docker %}). On Ubuntu, Docker can be installed 
either via the [instructions on the Docker site](https://docs.docker.com/engine/install/ubuntu/) or using the Ubuntu package via the instructions here.



```bash
sudo apt-get update
sudo apt-get remove docker docker-engine docker.io

sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
```

## Step 2 Download Dockerfile
Clone my Dockerfiles at <https://github.com/phwl/docker-vivado-2020.1>.

## Step 3 Download Xilinx Vivado Design Suite 2020.1
Download the [Vivado HLx 2020.1: All OS installer Single-File Download](https://www.xilinx.com/member/forms/download/xef.html?filename=Xilinx_Unified_2020.1_0602_1208.tar.gz) to the docker-ubuntu-vivado directory (you will need an account).
The filename should be ```Xilinx_Unified_2020.1_0602_1208.tar.gz``` and it 
should be 36~GB (the Docker image is 109~GB so make sure you have enough
space in ```/var/lib/docker```.

## Step 4 Build and test the Docker image
Follow the instructions in docker-ubuntu-vivado/README.md, i.e. type
```bash
docker image build -t vivado-2020.1 .
```

You can run using
```
docker run -e DISPLAY=`hostname`:0.0 -it --rm -v $PWD:/home/user/work -w /home/user vivado-2020.1
```
## Step 5 Customise 
In particular, you will probably want to edit Dockerfile and/or entrypoint.sh to include your licence files.

## Step 6 File System (7/10/20) 
By default, Docker puts its images in ```/var/lib/docker```. On most of my 
machines I have a relatively small SSD for ```/``` and use a larger hard disk
for ```/home```. Since the [Xilinx tools](https://github.com/phwl/docker-ubuntu-vivado) take up 120 GB alone, I moved ```/var```, ```/home``` and ```/opt``` to the magnetic disk. Thus my /etc/fstab looks like
```
# mount the local HD to /home, /var and /opt
/dev/disk/by-uuid/HARD_DISK /srv/fs auto nodev,nofail,x-gvfs-show 0 0
/srv/fs/home	/home	none	bind	0	0
/srv/fs/var	/var	none	bind	0	0
/srv/fs/opt	/opt	none	bind	0	0
```

