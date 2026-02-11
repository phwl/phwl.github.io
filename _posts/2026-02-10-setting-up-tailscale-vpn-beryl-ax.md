---
author: phwl
comments: true
date: 2026-02-10 09:30:00 AEST
title: Setting up a Tailscale VPN and GL.iNet Beryl AX (GL-M3000) Travel Router
use_math: true
toc: true
classes: wide
categories:
- computers
tags:
- linux
header:
  teaser: /assets/images/2026/02/beryl.jpg
---

Here is a way to make your home server accessible from anywhere.


[Tailscale](https://tailscale.com/) is a very easy to configure VPN
that allows arbitrary machines on the internet to form a secure
network using [Wireguard](https://www.wireguard.com/). It literally takes a minute
to install on each node by following the instructions. Linux, Windows, MacOS and iOS are all supported.

I have a [GL.inet Beryl AX (GL-MT3000)](https://www.gl-inet.com/products/gl-mt3000/) router that I use as a repeater and ethernet to wifi converter when
I travel. I wanted to have it configured so 
from anywhere in the world, I can connect to a single server at home via the gl-mt3000.
Unfortunately, the [GL.iNet Tailscale instructions](https://docs.gl-inet.com/router/en/4/interface_guide/tailscale/) don't describe my use-case of creating
a VPN between
* A single home server machine, trout, and
* The gl-mt3000 router to which I can connect any other machines and access trout.

This can be done as follows:
1. On trout
  * Install and bind Tailscale.
1. On gl-mt3000
  * Install and bind Tailscale.
  * Using the web interface (192.168.8.1), change Applications -> Tailscale to the below
     {% include figure image_path="/assets/images/2026/02/glinet-tailscale.png" caption="" %}
  * Select System -> Advanced Settings and enter Luci. Select Network -> Firewall and set to the below (check Tailscale -> lan Masquerading). This means that multiple devices connected to the gl-mt3000 can access the tailscale network via its shared IP address.

{% include figure image_path="/assets/images/2026/02/glinet-firewall.png" caption="" %}

Check that the machines are connected on the [Tailscale Admin Machines](https://login.tailscale.com/admin/machines) panel. This shows that the gl-mt3000 (top), my iPhone and trout (bottom) are connected to the Tailscale VPN. 

{% include figure image_path="/assets/images/2026/02/machines.png" caption="" %}

The blanked out IP addresses are those of the different machines so you should be able to ssh to trout from any machine connected to the Beryl travel router. 
