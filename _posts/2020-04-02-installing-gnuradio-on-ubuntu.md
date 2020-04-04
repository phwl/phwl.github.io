---
author: phwl
comments: true
date: 2020-04-02 13:20:35 AEDT
title: Installing USRP Toolchain (UHD and GNU Radio) on Ubuntu 18.04
classes: wide
categories:
- radio
tags:
- ubuntu
- linux
header:
  teaser: https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png
---

# Installation of software for Ettus B210.

## Part 1 2 April, 2020

<!-- more -->

1. Follow instructions at <https://kb.ettus.com/Building_and_Installing_the_USRP_Open-Source_Toolchain_(UHD_and_GNU_Radio)_on_Linux>. 
   * For UHD
     * git checkout v3.15.0.0-rc3
   * For GNU radio
     * <span style="color:red"> Don't do the below as it is more complicated and you don't get the Instrumentation blocks in gnuradio-companion</span>
        * git checkout v3.8.1.0-rc1
        * Since Ubuntu puts liblog4cpp in ```/usr/lib/x86_64-linux-gnu```, I had to modify ```gnuradio/cmake/Modules/FindLOG4CPP.cmake:``` (before running ```cmake ../```):

          ~~~
          PATHS /usr/lib /usr/lib64 /usr/local/lib  /usr/local/lib64 /opt/local/lib /opt/local/lib64 /usr/lib/x86_64-linux-gnu
          ~~~
        * ```export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib:/usr/lib/x86_64-linux-gnu```
        * ```export PYTHONPATH=$PYTHONPATH:/usr/local/lib/python3/dist-packages```
     * Do this <https://launchpad.net/~gnuradio/+archive/ubuntu/gnuradio-releases>

1. Install Pothosware using instructions from <https://github.com/pothosware/PothosCore/wiki/Ubuntu>
     * ```export UHD_IMAGES_DIR=/usr/local/share/uhd/images```
     
1. Then I got the error ```RuntimeError: Expected FPGA compatibility number 14, but got 16```
     * So I installed UHD v3.12.0.0 instead as it is the latest version with compatibility number 14, cycled the Ettus radio and rebooted the Ubuntu machine
     * That finally worked and I could include a UHD source block in gnuradio-companion

## Part 2 3 April, 2020
All was well but I couldn't make gr-specest work so let's try using PyBombs.

1. Remove UHD and GNU radio
   ~~~
   cd ~/src/ettus/uhd/host/build/
   sudo make uninstall
   sudo apt-get uninstall gnuradio
   ~~~

2. Install PyBombs
   ~~~
   pip3 install --upgrade git+https://github.com/gnuradio/pybombs.git
   pybombs auto-config
   pybombs recipes add-defaults
   pybombs prefix init ~/gnuradio
   source ~/gnuradio/setup_env.sh
   # Edit ~/.pybombs/recipes/gr-recipes/gnuradio.lwr and add "-DENABLE_CTRLPORT_THRIFT=OFF" in "config_opt"
   pybombs install uhd
   sudo apt install git cmake g++ libboost-all-dev libgmp-dev \
      swig python3-numpy python3-mako python3-sphinx python3-lxml \
      doxygen libfftw3-dev libcomedi-dev libsdl1.2-dev libgsl-dev \
      libqwt-qt5-dev libqt5opengl5-dev python3-pyqt5 liblog4cpp5-dev \
      libzmq3-dev python3-yaml python3-click python3-click-plugins
   pybombs install gnuradio
   ~~~
