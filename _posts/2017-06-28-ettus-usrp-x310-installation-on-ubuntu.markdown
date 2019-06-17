---
author: phwl
comments: true
date: 2017-06-28 23:51:01+00:00
link: http://phwl.org/ettus-usrp-x310-installation-on-ubuntu/
slug: ettus-usrp-x310-installation-on-ubuntu
title: Ettus USRP x310 installation on Ubuntu
wordpress_id: 3064
categories:
- FPGA
---

## Vivado 2017.4 Version (Aug 2018)





 	
  * Install Xilinx Vivado 2017.4 from https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/vivado-design-tools/2017-4.html

 	
  * sudo apt install python-pip

 	
  * Configure licence by putting the below in ~/.bashrc


`export XILINXD_LICENSE_FILE=2100@tuna.staff.sydney.edu.au:/opt/Xilinx/13.4/license/Xilinx.lic`

`source ~/.bashrc`



 	
  * Install UHD and GNU Radio by following instructions at https://kb.ettus.com/Building_and_Installing_the_USRP_Open-Source_Toolchain_(UHD_and_GNU_Radio)_on_Linux.

 	
  * Install RFNoC files https://kb.ettus.com/Getting_Started_with_RFNoC_Development




## Vivado 2015.4 Version (Jun 2017)


Host computer requirements for installing the Ettus USRP x310 along with keras are:



 	
  * The host machine must be 64-bit compatible (you can check under linux by typing `grep /proc/cpuinfo` which should have the "lm" flag present).

 	
  * You also need about 50GB of free disk space for the Xilinx tools.


The steps are:
<!-- more -->

 	
  1. (USRP hardware) Insert RF daughtercard and run cables from daughtercard to front panel

 	
  2. (Python) Install some basic development packages ([https://files.ettus.com/manual/page_build_guide.html#build_dependencies](https://files.ettus.com/manual/page_build_guide.html#build_dependencies))

    
    <code>sudo apt-get install libboost-all-dev libusb-1.0-0-dev python-mako doxygen python-docutils cmake build-essential
    sudo apt-get install python-pip
    pip install --upgrade pip
    </code>




 	
  3. (Tensorflow and Keras)Install according to [http://www.pyimagesearch.com/2016/11/14/installing-keras-with-tensorflow-backend/](http://www.pyimagesearch.com/2016/11/14/installing-keras-with-tensorflow-backend/)

    
    <code>sudo pip install virtualenv
    sudo pip install virtualenvwrapper
    export WORKON_HOME=~/Envs # needed later for virtualenvwrapper
    mkdir -p $WORKON_HOME
    source /usr/local/bin/virtualenvwrapper.sh
    mkvirtualenv keras_tf
    workon keras_tf
    pip install tensorflow
    pip install keras
    pip install requests
    </code>




 	
  4. (Xilinx) Download Xilinx software (**must be version 2015.4**) and install using sudo. While you are there also get the free licence for

    
    <code>ten_gig_eth_pcs_pma</code>


. Put the following line in /etc/udev/rules.d/70-persistent-net.rules and reboot (this is needed to change the ethernet device from en0 to eth0 which is needed for the Xilinx license system

    
    <code>SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="02:01:02:03:04:05", ATTR{dev_id}=="0x0", ATTR{type}=="1", NAME="eth0"</code>


then add the following line to ~/.bashrc

    
    <code>export XILINXD_LICENSE_FILE=2100@tuna.staff.sydney.edu.au:/opt/Xilinx/13.4/license/Xilinx.lic
    source ~/rfnoc/setup_env.sh
    </code>


and reboot. This should change it in

    
    <code>ifconfig</code>


.

    
    <code>source ~/.bashrc
    # source /opt/Xilinx/Vivado/2015.4/settings64.sh
    # export WORKON_HOME=~/Envs # needed later for virtualenvwrapper
    # source /usr/local/bin/virtualenvwrapper.sh
    </code>




 	
  5. (Network connection to x310) Install ethernet SFP and make sure you use a 1G ethernet crossover cable (supplied with the system) to connect to a PC. **The Apple USB ethernet adaptor doesn't appear to work with the USRP x310!** Configure your machine with an ethernet port which has a static ip address of 192.168.10.1. Turn on the Ettus x310.

    
    <code>ping 192.168.10.2
    </code>


should work.

 	
  6. (PyBombs) Install pybombs and gnuradio ([https://github.com/gnuradio/pybombs](https://github.com/gnuradio/pybombs))

    
    <code>sudo apt-get install git
    sudo apt-get install python-setuptools python-dev python-pip build-essential
    sudo pip install git+https://github.com/gnuradio/pybombs.git
    pybombs recipes add gr-recipes git+https://github.com/gnuradio/gr-recipes.git
    pybombs recipes add ettus git+https://github.com/EttusResearch/ettus-pybombs.git
    pybombs prefix init ~/rfnoc -R rfnoc -a rfnoc
    source ~/rfnoc/setup_env.sh
    </code>




 	
  7. (RFNoC tutorial) You should now be able to run the tutorial at [https://kb.ettus.com/Getting_Started_with_RFNoC_Development](https://kb.ettus.com/Getting_Started_with_RFNoC_Development).

 	
    * 

 	
      * I changed rfnoc/src/uhd-fpga/usrp3/top/x300/setupenv.sh to reflect the version of Vivado being used.






    
    <code>
    cd ~/rfnoc
    source setup_env.sh
    cd ~/rfnoc/src/uhd-fpga/usrp3/top/x300
    source setupenv.sh
    make cleanall
    make X310_HG # progress and output files in ~/rfnoc/src/uhd-fpga/usrp3/top/x300/build-X310_HG
    </code>




 	
  8. Install and excecute [https://github.com/Xilinx/RFNoC-HLS-NeuralNet](https://github.com/Xilinx/RFNoC-HLS-NeuralNet)

 	
    * To generate a bitstream:

    
    <code>
    source ~/rfnoc/setup_env.sh
    cd ~/rfnoc/src/uhd-fpga/usrp3/tools/script
    ./uhd_image_builder.py window fft exmodrec -d x310 -t X310_RFNOC_HLS_HG -m 5 -I /home/vivado/rfnoc/src/rfnoc-hls-neuralnet/ --fill-with-fifos -c
    </code>




 	
    * Note that device is xc7k410tffg900-2





