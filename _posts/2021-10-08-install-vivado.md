---
author: phwl
comments: true
date: 2021-10-08 13:43:51 AEDT
title: Install Vitis/Vivado
classes: wide
categories:
- diy
tags:
- hobbies
header:
  teaser: https://www.xilinx.com/content/dam/xilinx/homepage/promos/xilinx-sony-promo-banner-500x250.jpg
---
Instructions on how to install Vivado 2020.1 under Ubuntu Linux 20.04.

1. Install dependencies (because <https://support.xilinx.com/s/article/76616?language=en_US>)
```
sudo apt-get install libtinfo5
```

2. Install software (in batch mode because of <https://bbs.archlinux.org/viewtopic.php?id=256564>)
Download  Xilinx Unified Installer 2021.1: Linux Self Extracting Web Installer from <https://www.xilinx.com/support/download.html>. Then
```
./Xilinx_Unified_2020.1_0602_1208_Lin64.bin --noexec --target .
./xsetup -b AuthTokenGen
./xsetup -b ConfigGen
# edit ~/.Xilinx.install_config.txt changing unwanted options to :0
./xsetup --batch Install --agree XilinxEULA,3rdPartyEULA,WebTalkTerms --location /opt/Xilinx --config ~/.Xilinx/install_config.txt
```

3. Install licence server
From <https://www.xilinx.com/support/download.html> download
 Floating Server Tools Linux (Flex v11.17.2.0) and unzip into /opt/Xilinx/license. Generate and put Xilinx.lic in same directory. Then
```
sudo apt-get install lsb
sudo adduser xilinx	# create xilinx user
chmod -R xilinx.xilinx /opt/Xilinx
mkdir -p /usr/tmp/.flexlm	# needed for license server
chmod -R xilinx.xilinx /usr/tmp/.flexlm
sudo su - xilinx
/opt/Xilinx/license/lin_flexlm_v11.17.2.0/lnx64.o/lmgrd -c /opt/Xilinx/license/Xilinx.lic -l /opt/Xilinx/license/Xilinx.log
tail Xilinx.log
```
You should get:
```
15:01:59 (xilinxd) Starting diagnostics port listener thread (DPLT)
15:01:59 (xilinxd) Starting diagnostics output thread (DRQT)
15:01:59 (xilinxd) DPLT: running
15:01:59 (xilinxd) DRQT: running
15:01:59 (xilinxd) DPLT: waiting for logger to connect
```

5. Crontab
```
sudo su - xilinx	# if not already xilinx
crontab -e
```
add ```@reboot /opt/Xilinx/license/lin_flexlm_v11.17.2.0/lnx64.o/lmgrd -c /opt/Xilinx/license/Xilinx.lic -l /opt/Xilinx/license/Xilinx.log```


5. On Linux machines using the floating license server:
```
export XILINXD_LICENSE_FILE=2100@tuna.staff.sydney.edu.au
```
Under Windows you can use the Xilinx License Configuration Manager (XLCM) to set the XILINXD_LICENSE_FILE variable.

