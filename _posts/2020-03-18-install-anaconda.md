---
author: phwl
comments: true
date: 2020-03-18 Wed 18 Mar 2020 10:53:07 AEDT
title: Installing Anaconda and Pytorch
classes: wide
categories:
- software
tags:
- ubuntu
- linux
header:
  teaser: /assets/images/2020/03/Anaconda_Logo.png
---

Here is how I configured Anaconda and Pytorch 0.4.1 on the Ubuntu 18.04 system
mentioned here <http://phwl.org/2019/ubuntu-nvdia-19/>. This was for running
[DTWnet](https://github.com/TideDancer/DTWNet.git).

 * Install Anaconda from <https://www.anaconda.com/distribution>, then
```
conda update -n base -c defaults conda
conda create --name dtw
conda activate dtw
conda install pytorch=0.4.1 cuda92 -c pytorch
pip install 'torch==0.4.1'
pip install Cython
pip install 'torchvision==0.2.1'
pip install visdom
conda install gcc_linux-64
conda install -c anaconda cudatoolkit
cd ~/src
git clone https://github.com/TideDancer/DTWNet.git
cd DTWnet`
```

