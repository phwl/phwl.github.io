---
author: phwl
comments: true
date: 2022-07-10 09:30:00 AEST
title: Reseat dripping tap
use_math: true
toc: true
classes: wide
categories:
- diy
tags:
- repair
header:
  teaser: /assets/images/2022/03/win11.png
---

I had not used the Windows Subsystem for Linux before as it didn't support 
encrypted drives. It has come a long way and here are some notes.

# LUKS encrypted drives
I normally use LUKS encryption under Ubuntu (see <http://phwl.org/2020/luks-encryption/>).
One can list the drives in Administrator Powershell and mount as follows:
```bash
C:> GET-CimInstance -query "SELECT * from Win32_DiskDrive"
C:> wsl --mount \\.\PHYSICALDRIVE1 --bare
```

{% include figure image_path="/assets/images/2022/03/IMG_9328.jpeg" caption="" %}

{% include figure image_path="/assets/images/2022/03/IMG_9979.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9998.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9989.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9999.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9990.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9991.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9992.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9993.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9994.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9995.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9996.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_9997.jpeg" caption="" %}
{% include figure image_path="/assets/images/2022/03/IMG_0001.jpeg" caption="" %}
