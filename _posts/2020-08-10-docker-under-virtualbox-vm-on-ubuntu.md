---
author: phwl
comments: true
toc: true
date: 2020-08-10 15:40:00 AEDT
title: Docker under Virtualbox VM on Ubuntu

classes: wide
categories:
- software
- academia
tags:
- ubuntu
- linux
header:
  teaser: https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png
---

Here is how I installed
Docker in Windows 10 Education using an Ubuntu machine running Virtualbox
for my [ELEC3608 Computer Architecture course](https://cusp.sydney.edu.au/students/view-unit-page/alpha/ELEC3608).


<!-- more -->
## 1. Install Windows 10 Education under Virtualbox (not necessary if you are running Windows)
 * Follow instructions at <https://www.virtualbox.org/wiki/Linux_Downloads> to install VirtualBox
 * Download and install/upgrade to Windows 10 Education, from [Azure portal](https://portal.azure.com/?Microsoft_Azure_Education_correlationId=0c971698-d014-4594-929c-2671f00288c3#blade/Microsoft_Azure_Education/EducationMenuBlade/software). The Product Key is available from the same site.
 * Run Windows Update via Start->Settings->Windows Update (this takes a long time and requires several reboots). I updated to version 1909.

## 3. Install Docker
 * Use instructions at <https://docs.docker.com/docker-for-windows/install/>
   to install Docker Desktop for Windows (follow them carefully)
 * Run Docker Desktop 
 * Open a Windows Powershell and type ``` docker run hello-world '''
