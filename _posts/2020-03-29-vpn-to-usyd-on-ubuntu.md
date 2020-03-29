---
author: phwl
comments: true
date: 2020-03-29 16:20:35 AEDT
title: VPN to the University of Sydney on Ubuntu
classes: wide
categories:
- software
tags:
- ubuntu
- linux
header:
  teaser: https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png
---

Openconnect makes it easy to use the University of Sydney VPN on Ubuntu.

<!-- more -->

## Install Openconnect
```
sudo apt-get update
sudo apt-get install openconnect
```

## Connect

```
sudo openconnect -u <unikey> --passwd-on-stdin vpn.sydney.edu.au
<type your password here there is no prompt>
```

You should see something like this

```
POST https://vpn.sydney.edu.au/
Connected to 129.78.42.50:443
SSL negotiation with vpn.sydney.edu.au
Connected to HTTPS on vpn.sydney.edu.au
XML POST enabled
Please enter your username and password.
POST https://vpn.sydney.edu.au/
Got CONNECT response: HTTP/1.1 200 OK
CSTP connected. DPD 30, Keepalive 20
Connected as 10.48.18.235, using SSL
Established DTLS connection (using GnuTLS). Ciphersuite (DTLS0.9)-(DHE-RSA-4294967237)-(AES-256-CBC)-(SHA1).
```

That's all!

