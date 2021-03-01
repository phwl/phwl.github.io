---
author: phwl
comments: true
toc: true
date: 2021-03-01 19:14:19 AEST
title: Connecting to Beaglebone on MacOS
classes: wide
categories:
- academia
tags:
- embedded
- beaglebone
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---
This post describes how to connect a Beaglebone Green (BBG) to the Internet.
The same instructions  should work for other Beaglebone Boards like the Pocket Beagle or BeagleBone Black.

Although instructions for getting started with the BBG are available at 
<https://beagleboard.org/getting-started>. Unfortunately, the drivers
cannot be installed on
the latest version of MacOS (I'm using Big Sur 11.2.1).

In the examples that follow, the host Mac machine has the prompt "phwl@PHWL-MBP ~ %" and the BBG prompt is "debian@beaglebone:~$".

## 1a. Connecting via Ethernet

### Step 1. MacOS to BBG Connection using ```screen```
Connect your Mac to the BBG using the microUSB. Connect your BBG Ethernet port to a network port using an Ethernet cable. 

## 1b. Connecting via Mac's Wifi
 
### Step 1. MacOS to BBG Connection 
Connect your Mac to the BBG using the microUSB. Connect your BBG Ethernet port to the Mac's Ethernet using an Ethernet cable (you will need an Ethernet adaptor for your Mac). 

### Step 2 BBG to Internet

In "Control Panel" on your Mac, enable Internet sharing. On my machine the device is called
"Apple USB Ethernet Adaptor" so you have to turn off the "Internet Sharing" service on the left, turn on the "Apple USB Ethernet Adaptor" and then turn on "Internet Sharing" to the the window below:

{% include figure image_path="/assets/images/2021/03/internetsharing.png" max-width="100px" caption="" %}

## 2. To Check BeagleBone to Internet Connection
Use ```screen``` to login to the BBG from your Mac and then check if you
can ping sydney.edu.au:

``` sh
phwl@PHWL-MBP ~ % screen /dev/cu.usbmodemBBG2200804786
Debian GNU/Linux 10 beaglebone ttyGS0

BeagleBoard.org Debian Buster IoT TIDL Image 2020-04-06

Support: http://elinux.org/Beagleboard:BeagleBoneBlack_Debian

default username:password is [debian:temppwd]

beaglebone login: debian
Password: 
Last login: Fri Feb 26 05:04:59 UTC 2021 on ttyGS0

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.

debian@beaglebone:~$ ping -c 3 sydney.edu.au
PING sydney.edu.au (129.78.5.8) 56(84) bytes of data.
64 bytes from svdns.sydney.edu.au (129.78.5.8): icmp_seq=1 ttl=242 time=12.1 ms
64 bytes from svdns.sydney.edu.au (129.78.5.8): icmp_seq=2 ttl=242 time=12.4 ms
64 bytes from svdns.sydney.edu.au (129.78.5.8): icmp_seq=3 ttl=242 time=19.8 ms

--- sydney.edu.au ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 6ms
rtt min/avg/max/mdev = 12.144/14.812/19.849/3.566 ms
```

You can exit the ```screen``` program with control-A and then k (if you just disconnect the USB, the /dev/cu.usbmodemBBG2200804786 device will disappear and you will need to reboot the Mac if it is needed again). 

## 3. To Login to the BBG via Ethernet
On the BeagleBone type:
```
debian@beaglebone:~$ ifconfig
eth0: flags=-28605<UP,BROADCAST,RUNNING,MULTICAST,DYNAMIC>  mtu 1500
        inet 169.254.120.60  netmask 255.255.0.0  broadcast 169.254.255.255
        inet6 fe80::1642:fcff:fe0c:b433  prefixlen 64  scopeid 0x20<link>
        ether 14:42:fc:0c:b4:33  txqueuelen 1000  (Ethernet)
        RX packets 719  bytes 229866 (224.4 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 331  bytes 91879 (89.7 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 45

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 3968  bytes 266448 (260.2 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 3968  bytes 266448 (260.2 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

usb0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.7.2  netmask 255.255.255.0  broadcast 192.168.7.255
        inet6 fe80::1642:fcff:fe0c:b435  prefixlen 64  scopeid 0x20<link>
        ether 14:42:fc:0c:b4:35  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

usb1: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 192.168.6.2  netmask 255.255.255.0  broadcast 192.168.6.255
        ether 14:42:fc:0c:b4:39  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

The ```ifconfig``` command shows that the ```eth0``` device has the IP address ```169.254.120.60```.

From another terminal window on your Mac (or any other machine on the same network), you should be able to log into the BBG:
``` sh
phwl@PHWL-MBP ~ % ssh debian@169.254.120.60
The authenticity of host '169.254.120.60 (169.254.120.60)' can't be established.
ECDSA key fingerprint is SHA256:6iPvBW868tpt8HVZLemzVVPKAI5n5C669GwfLKiws34.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '169.254.120.60' (ECDSA) to the list of known hosts.
Debian GNU/Linux 10

BeagleBoard.org Debian Buster IoT TIDL Image 2020-04-06

Support: http://elinux.org/Beagleboard:BeagleBoneBlack_Debian

default username:password is [debian:temppwd]

debian@169.254.120.60's password: 

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Fri Feb 26 05:05:45 2021
```

