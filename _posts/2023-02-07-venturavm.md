---
author: phwl
comments: true
date: 2022-07-24 09:30:00 AEST
title: Outboard Links
use_math: true
toc: true
classes: wide
categories:
- academia
tags:
- linux
header:
  teaser: /assets/images/2022/03/win11.png
---

I had not used the Windows Subsystem for Linux before as it didn't support 
encrypted drives. It has come a long way and here are some notes.

# Create Ventura ISO
Following the instructions at <https://techspite.com/how-to-create-macos-ventura-iso-image/>:

```
% sudo hdiutil create -o /tmp/Ventura -size 16000m -volname Ventura -layout SPUD -fs HFS+J
created: /tmp/Ventura.dmg
% sudo hdiutil attach /tmp/Ventura.dmg -noverify -mountpoint /Volumes/Ventura 
/dev/disk6          	Apple_partition_scheme         	
/dev/disk6s1        	Apple_partition_map            	
/dev/disk6s2        	Apple_HFS                      	/Volumes/Ventura
% sudo /Applications/Install\ macOS\ Ventura.app/Contents/Resources/createinstallmedia  --volume /Volumes/Ventura --nointeraction
Erasing disk: 0%... 10%... 20%... 30%... 100%
Making disk bootable...
Copying to disk: 0%... 10%... 20%... 30%... 40%... 100%
Install media now available at "/Volumes/Install macOS Ventura"
% hdiutil eject -force /Volumes/Install\ macOS\ Ventura
"disk6" ejected.
% hdiutil convert /tmp/Ventura.dmg -format UDTO -o ~/Desktop/Ventura
Reading Driver Descriptor Map (DDM : 0)…
Reading Apple (Apple_partition_map : 1)…
Reading  (Apple_Free : 2)…
Reading disk image (Apple_HFS : 3)…
..............................................................................
Elapsed Time: 24.637s
Speed: 649.4MB/s
Savings: 0.0%
created: /Users/phwl/Desktop/Ventura.cdr
% mv -v ~/Desktop/Ventura.cdr ~/Desktop/Ventura.iso
/Users/phwl/Desktop/Ventura.cdr -> /Users/phwl/Desktop/Ventura.iso
% sudo rm /tmp/Ventura.dmg 

# Install python and win32api
Install python from <https://www.python.org/downloads> (Windows Installer oython 3.11.1). When installing, 
* Remove MAX_PATH limitation 
* In Customise Installation, Advanced Options, select Add Python to environment variables
* Following installation ```pip install pywin32```

# Virtualbox 

* Install Virtualbox and the Extension Pack from <https://www.virtualbox.org/wiki/Downloads> (Version 7.0.6).
* Follow instructions <https://techschumz.com/install-macos-ventura-on-virtualbox-on-windows/>. The VBoxManage instructions are:
```
Code for Virtualbox 6.x:
cd "C:\Program Files\Oracle\VirtualBox\"
VBoxManage.exe modifyvm "macOS Ventura" --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
VBoxManage setextradata "macOS Ventura" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac19,1"
VBoxManage setextradata "macOS Ventura" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
VBoxManage setextradata "macOS Ventura" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Mac-AA95B1DDAB278B95"
VBoxManage setextradata "macOS Ventura" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
VBoxManage setextradata "macOS Ventura" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
```
* To address the "Failed to query SMC value from the host" error, In a CMD as admin you need to ```VBoxManage.exe setextradata "macOS Ventura" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 0```
* Start the VM and using Disk Utility format the Virtual Box disk created before installing Ventura.
* To avoid infinite loop on boot ```VBoxManage setextradata "macos" "VBoxInternal/TM/TSCMode" "RealTSCOffset"```

