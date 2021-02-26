---
author: phwl
comments: true
date: 2021-02-26 10:53:29 AEST
title: BeagleBone Green Device Tree
classes: wide
categories:
- academia
tags:
- embedded
- beaglebone
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---

This post describes configuration of the BeagleBone Green GPIO pinmux
settings via the Linux Device Tree.


## 1. Setting pinmux values via the Device Tree
The pins of the BBG P9 header have different operations depending on
the pinmum mode chosen. Looking at the [P9 header](http://exploringbeaglebone.com/wp-content/uploads/resources/BBBP9Header.pdf), Mode 7 connects the GPIO line to the pin of the AM335X chip. To configure this, we need to set the mode via the Linux Device Tree (DT). How the DT works will be covered as a later topic, but this (admittedly complicated) configuration below will set 

First make the following dts file:
``` bash
$ cat PHWL-GPIO.dts 
/*  
* Copyright (C) 2012 Texas Instruments Incorporated - http://www.ti.com/
*
* This program is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Purpose License Version 2 as
* published by the Free Software Foundation
*
* Original from: github.com/jadonk/validation-scripts/blob/master/test-capemgr/ 
*
* Modified by Derek Molloy for the example on www.derekmolloy.ie
* that maps GPIO pins for the example
*
* Modified by Philip Leong for SSD exercise
*
*/

/dts-v1/;
/plugin/;

/{
       compatible = "ti,beaglebone", "ti,beaglebone-black";
       part-number = "PHWL-GPIO";
       version = "00A0";

       fragment@0 {
             target = <&am33xx_pinmux>;
            
             __overlay__ {
                  pinctrl_test: PHWL_GPIO_Pins {
			pinctrl-single,pins = <

				0x150 0x07  /* P9_22 60 OUTPUT MODE7 - The LED Output */
				0x154 0x07  /* P9_21 60 OUTPUT MODE7 - The LED Output */
				0x178 0x07  /* P9_20 60 OUTPUT MODE7 - The LED Output */
				0x17c 0x07  /* P9_19 60 OUTPUT MODE7 - The LED Output */
				0x158 0x07  /* P9_18 60 OUTPUT MODE7 - The LED Output */
				0x15c 0x07  /* P9_17 60 OUTPUT MODE7 - The LED Output */
				0x074 0x07  /* P9_13 60 OUTPUT MODE7 - The LED Output */
                       
                               /* OUTPUT  GPIO(mode7) 0x07 pulldown, 0x17 pullup , 0x?f no pullup/down */
			       /* INPUT   GPIO(mode7) 0x27 pulldown, 0x37 pullup, 0x?f no pullup/down */

			>;
		  };
             };
       };

       fragment@1 {
		target = <&ocp>;
		__overlay__ {
			test_helper: helper {
				compatible = "bone-pinmux-helper";
				pinctrl-names = "default";
				pinctrl-0 = <&pinctrl_test>;
				status = "okay";
			};
		};
	};
};
```

to build
``` bash
$ dtc -O dtb -o PHWL-GPIO-00A0.dtbo -b 0 -@ PHWL-GPIO.dts
$ sudo cp PHWL-GPIO-00A0.dtbo /lib/firmware/
```
Modify ```/boot/uEnv.txt``` to be:
``` bash
$ cat /boot/uEnv.txt 
#Docs: http://elinux.org/Beagleboard:U-boot_partitioning_layout_2.0

uname_r=4.14.108-ti-r131
#uuid=
#dtb=
cmdline=coherent_pool=1M net.ifnames=0 rng_core.default_quality=100 quiet
enable_uboot_overlays=1
uboot_overlay_addr0=/lib/firmware/PHWL-GPIO-00A0.dtbo

#In the event of edid real failures, uncomment this next line:
#cmdline=coherent_pool=1M net.ifnames=0 rng_core.default_quality=100 quiet video=HDMI-A-1:1024x768@60e

##enable x15: eMMC Flasher:
##make sure, these tools are installed: dosfstools rsync
#cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3-no-eeprom.sh
```
reboot (```shutdown -r now```) and the modes should have changed to 007
```
$ grep 007 /sys/kernel/debug/pinctrl/44e10800.pinmux/pins
pin 21 (PIN21) 44e10854 00000007 pinctrl-single 
pin 23 (PIN23) 44e1085c 00000007 pinctrl-single 
pin 29 (PIN29) 44e10874 00000007 pinctrl-single 
pin 84 (PIN84) 44e10950 00000007 pinctrl-single 
pin 85 (PIN85) 44e10954 00000007 pinctrl-single 
pin 86 (PIN86) 44e10958 00000007 pinctrl-single 
pin 87 (PIN87) 44e1095c 00000007 pinctrl-single 
pin 94 (PIN94) 44e10978 00000007 pinctrl-single 
pin 95 (PIN95) 44e1097c 00000007 pinctrl-single 
```

