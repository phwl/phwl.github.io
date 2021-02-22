---
author: phwl
comments: true
date: 2021-02-22 14:02:12 AEST
title: BeagleBone Green Getting Started and GPIO
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---

This post details how to get started with a BeagleBone Green (BBG) microSD card and
program it via GPIO.

## 1. Getting Started
Instructions for getting started with the BBG are available at at 
at <https://beagleboard.org/getting-started>. This involves downloading
the Debian Linux image and writing it to a microSD card (make sure you
use the Debian image for the BBG). My version was:
```
Buster IoT (without graphical desktop) for BeagleBone and PocketBeagle via microSD card
AM3358 Debian 10.3 2020-04-06 4GB SD IoT image for PocketBeagle, BeagleBone, BeagleBone Black, BeagleBone Black Wireless, BeagleBone Black Industrial, BeagleBone Blue, SeeedStudio BeagleBone Green, SeeedStudio BeagleBone Green Wireless, SanCloud BeagleBone Enhanced, Arrow BeagleBone Black Industrial and Mentorel BeagleBone uSomIQ - more info - sha256sum: 22448ba28d0d58e25e875aac3b4e91eaef82e2d11c9d2c43d948ed60708f7434
```

The driver for networking via USB didn't work with the latest version
of MacOS (Big Sur 11.2.1) but the BBG was able to use DNS over Ethernet
to connect to my network.  One can then ```ssh debian@beaglebone.local```
to access.

## 2. GPIO
As mentioned in my [earlier post](/2021/QEMU-ARM-Linux-gpio/), libgpiod
is the standard way to use GPIO under Linux. To use it on the BBG, one must
first download the library and include files.
```sh
sudo apt update
sudo apt install libgpiod-dev
```

You can check everything is working by detecting the GPIO chips. 
```
debian@beaglebone:~$ gpiodetect
gpiochip0 [gpio] (32 lines)
gpiochip1 [gpio] (32 lines)
gpiochip2 [gpio] (32 lines)
gpiochip3 [gpio] (32 lines)
debian@beaglebone:~$ gpioinfo
gpiochip0 - 32 lines:
	line   0:  "MDIO_DATA"       unused   input  active-high 
	line   1:   "MDIO_CLK"       unused   input  active-high 
	line   2:  "SPI0_SCLK"       unused   input  active-high 
	line   3:    "SPI0_D0"       unused   input  active-high 
	line   4:    "SPI0_D1"       unused   input  active-high 
	line   5:   "SPI0_CS0"       unused   input  active-high 
	line   6:   "SPI0_CS1"         "cd"   input   active-low [used]
	line   7: "ECAP0_IN_PWM0_OUT" unused input active-high 
	line   8: "LCD_DATA12"       unused   input  active-high 
	line   9: "LCD_DATA13"       unused   input  active-high 
	line  10: "LCD_DATA14"       unused   input  active-high 
	line  11: "LCD_DATA15"       unused   input  active-high 
	line  12: "UART1_CTSN"      "P9_20"   input  active-high [used]
	line  13: "UART1_RTSN"      "P9_19"   input  active-high [used]
	line  14:  "UART1_RXD"       unused   input  active-high 
	line  15:  "UART1_TXD"       unused   input  active-high 
	line  16: "GMII1_TXD3"       unused   input  active-high 
	line  17: "GMII1_TXD2"       unused   input  active-high 
	line  18: "USB0_DRVVBUS" unused input active-high 
	line  19: "XDMA_EVENT_INTR0" unused input active-high 
	line  20: "XDMA_EVENT_INTR1" unused input active-high 
	line  21: "GMII1_TXD1"       unused   input  active-high 
	line  22:   "GPMC_AD8"       unused   input  active-high 
	line  23:   "GPMC_AD9"       unused   input  active-high 
	line  24:         "NC"       unused   input  active-high 
	line  25:         "NC"       unused   input  active-high 
	line  26:  "GPMC_AD10"       unused   input  active-high 
	line  27:  "GPMC_AD11"       unused   input  active-high 
	line  28: "GMII1_TXD0"       unused   input  active-high 
	line  29: "RMII1_REFCLK" unused input active-high 
	line  30: "GPMC_WAIT0"       unused   input  active-high 
	line  31:   "GPMC_WPN"       unused   input  active-high 
gpiochip1 - 32 lines:
	line   0:   "GPMC_AD0"       unused   input  active-high 
	line   1:   "GPMC_AD1"       unused   input  active-high 
	line   2:   "GPMC_AD2"       unused   input  active-high 
	line   3:   "GPMC_AD3"       unused   input  active-high 
	line   4:   "GPMC_AD4"       unused   input  active-high 
	line   5:   "GPMC_AD5"       unused   input  active-high 
	line   6:   "GPMC_AD6"       unused   input  active-high 
	line   7:   "GPMC_AD7"       unused   input  active-high 
	line   8: "UART0_CTSN"       unused   input  active-high 
	line   9: "UART0_RTSN"       unused   input  active-high 
	line  10:  "UART0_RXD"       unused   input  active-high 
	line  11:  "UART0_TXD"       unused   input  active-high 
	line  12:  "GPMC_AD12"       unused   input  active-high 
	line  13:  "GPMC_AD13"       unused   input  active-high 
	line  14:  "GPMC_AD14"       unused   input  active-high 
	line  15:  "GPMC_AD15"       unused   input  active-high 
	line  16:    "GPMC_A0"       unused   input  active-high 
	line  17:    "GPMC_A1"       unused   input  active-high 
	line  18:    "GPMC_A2"       unused   input  active-high 
	line  19:    "GPMC_A3"       unused   input  active-high 
	line  20:    "GPMC_A4"       unused   input  active-high 
	line  21:    "GPMC_A5" "beaglebone:green:usr0" output active-high [used]
	line  22:    "GPMC_A6" "beaglebone:green:usr1" output active-high [used]
	line  23:    "GPMC_A7" "beaglebone:green:usr2" output active-high [used]
	line  24:    "GPMC_A8"       unused  output  active-high 
	line  25:    "GPMC_A9"       unused   input  active-high 
	line  26:   "GPMC_A10"       unused   input  active-high 
	line  27:   "GPMC_A11"       unused   input  active-high 
	line  28:  "GPMC_BE1N"       unused   input  active-high 
	line  29:  "GPMC_CSN0"       unused   input  active-high 
	line  30:  "GPMC_CSN1"       unused   input  active-high 
	line  31:  "GPMC_CSN2"       unused   input  active-high 
gpiochip2 - 32 lines:
	line   0:  "GPMC_CSN3"       unused   input  active-high 
	line   1:   "GPMC_CLK"       unused   input  active-high 
	line   2: "GPMC_ADVN_ALE" unused input active-high 
	line   3: "GPMC_OEN_REN" unused input active-high 
	line   4:   "GPMC_WEN"       unused   input  active-high 
	line   5: "GPMC_BE0N_CLE" unused input active-high 
	line   6:  "LCD_DATA0"       unused   input  active-high 
	line   7:  "LCD_DATA1"       unused   input  active-high 
	line   8:  "LCD_DATA2"       unused   input  active-high 
	line   9:  "LCD_DATA3"       unused   input  active-high 
	line  10:  "LCD_DATA4"       unused   input  active-high 
	line  11:  "LCD_DATA5"       unused   input  active-high 
	line  12:  "LCD_DATA6"       unused   input  active-high 
	line  13:  "LCD_DATA7"       unused   input  active-high 
	line  14:  "LCD_DATA8"       unused   input  active-high 
	line  15:  "LCD_DATA9"       unused   input  active-high 
	line  16: "LCD_DATA10"       unused   input  active-high 
	line  17: "LCD_DATA11"       unused   input  active-high 
	line  18: "GMII1_RXD3"       unused   input  active-high 
	line  19: "GMII1_RXD2"       unused   input  active-high 
	line  20: "GMII1_RXD1"       unused   input  active-high 
	line  21: "GMII1_RXD0"       unused   input  active-high 
	line  22:  "LCD_VSYNC"       unused   input  active-high 
	line  23:  "LCD_HSYNC"       unused   input  active-high 
	line  24:   "LCD_PCLK"       unused   input  active-high 
	line  25: "LCD_AC_BIAS_EN" unused input active-high 
	line  26:  "MMC0_DAT3"       unused   input  active-high 
	line  27:  "MMC0_DAT2"       unused   input  active-high 
	line  28:  "MMC0_DAT1"       unused   input  active-high 
	line  29:  "MMC0_DAT0"       unused   input  active-high 
	line  30:   "MMC0_CLK"       unused   input  active-high 
	line  31:   "MMC0_CMD"       unused   input  active-high 
gpiochip3 - 32 lines:
	line   0:  "GMII1_COL"       unused   input  active-high 
	line   1:  "GMII1_CRS"       unused   input  active-high 
	line   2: "GMII1_RXER"       unused   input  active-high 
	line   3: "GMII1_TXEN"       unused   input  active-high 
	line   4: "GMII1_RXDV"       unused   input  active-high 
	line   5:   "I2C0_SDA"       unused   input  active-high 
	line   6:   "I2C0_SCL"       unused   input  active-high 
	line   7:       "EMU0"       unused   input  active-high 
	line   8:       "EMU1"       unused   input  active-high 
	line   9: "GMII1_TXCLK" unused input active-high 
	line  10: "GMII1_RXCLK" unused input active-high 
	line  11:         "NC"       unused   input  active-high 
	line  12:         "NC"       unused   input  active-high 
	line  13: "USB1_DRVVBUS" unused input active-high 
	line  14: "MCASP0_ACLKX" unused input active-high 
	line  15: "MCASP0_FSX"       unused   input  active-high 
	line  16: "MCASP0_AXR0" unused input active-high 
	line  17: "MCASP0_AHCLKR" unused input active-high 
	line  18: "MCASP0_ACLKR" unused input active-high 
	line  19: "MCASP0_FSR"       unused   input  active-high 
	line  20: "MCASP0_AXR1" unused input active-high 
	line  21: "MCASP0_AHCLKX" unused input active-high 
	line  22:         "NC"       unused   input  active-high 
	line  23:         "NC"       unused   input  active-high 
	line  24:         "NC"       unused   input  active-high 
	line  25:         "NC"       unused   input  active-high 
	line  26:         "NC"       unused   input  active-high 
	line  27:         "NC"       unused   input  active-high 
	line  28:         "NC"       unused   input  active-high 
	line  29:         "NC"       unused   input  active-high 
	line  30:         "NC"       unused   input  active-high 
	line  31:         "NC"       unused   input  active-high 
```

Now turn on the D5 LED for 10 seconds using
```bash
debian@beaglebone:~$ gpioset -m time -s 10 gpiochip1 24=1
```
and turn it off for 10 seconds
```
debian@beaglebone:~$ gpioset -m time -s 10 gpiochip1 24=0
```
Note that after ```gpioset``` exits, the data of the output is undefined.

## 3. Exercise
Download, compile and execute the ```blink``` program which
flashes the D5 LED as follows:
```bash
phwl@PHWL-MBP ~ % ssh debian@beaglebone.local
Debian GNU/Linux 10

BeagleBoard.org Debian Buster IoT TIDL Image 2020-04-06

Support: http://elinux.org/Beagleboard:BeagleBoneBlack_Debian

default username:password is [debian:temppwd]

debian@beaglebone.local password: 

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Mon Feb 22 08:49:57 2021 from fe80::8b4:5a85:cfb2:5eb%eth0

debian@beaglebone:~$ git clone https://github.com/phwl/elec3607-materials
Cloning into 'elec3607-materials'...
remote: Enumerating objects: 22, done.
remote: Counting objects: 100% (22/22), done.
remote: Compressing objects: 100% (17/17), done.
remote: Total 22 (delta 5), reused 17 (delta 3), pack-reused 0
Unpacking objects: 100% (22/22), done.
debian@beaglebone:~$ cd elec3607-materials/labs/lab1-gpio/
debian@beaglebone:~/elec3607-materials/labs/lab1-gpio$ gcc -o blink blink.c -lgpiod
debian@beaglebone:~/elec3607-materials/labs/lab1-gpio$ ./blink
```

Modify the program so that, in addition to blinking the LED, it will
print the status of the S2 button once a second as
below.
```bash
debian@beaglebone:~$ ./blink 
S2=1
...
S2=0
```
