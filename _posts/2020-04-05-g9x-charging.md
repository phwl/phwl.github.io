---
author: phwl
comments: true
date: 2020-04-05 11:15:30 AEDT
title: Canon G9x charging via USB
classes: wide
categories:
- electronics
tags:
- repair
header:
  teaser: /assets/images/2020/04/g9x1.jpeg
---

I was having problems charging my [Canon G9x](/2019/death-of-a-canon-s120/) 
via USB.

<!-- more -->

A Google search shows that I'm not the only one, e.g.
<https://www.dpreview.com/forums/thread/3947126>.

The symptoms were that when I plugged in the camera, it would 
come up in Play mode and the charging light never comes on.
Checking the current, it was 0.06A and clearly not charging.
{% include figure image_path="/assets/images/2020/04/g9x2.jpeg" caption="" %}
Switching the camera off didn't help.
{% include figure image_path="/assets/images/2020/04/g9x3.jpeg" caption="" %}
I then used the same cable to successfully charge an Android phone.
{% include figure image_path="/assets/images/2020/04/g9x6.jpeg" caption="" %}

I switched to a different cable, which worked. The camera started charging 
with 0.39A and the orange charging light came on as expected.
{% include figure image_path="/assets/images/2020/04/g9x1.jpeg" caption="" %}
A third USB-A to micro USB cable also worked.
{% include figure image_path="/assets/images/2020/04/g9x5.jpeg" caption="" %}

I then tried an Apple 5W power adaptor which outputs a maximum of 1A (the 
one previously could output 4.8A. That worked as well.
{% include figure image_path="/assets/images/2020/04/g9x4.jpeg" caption="" %}

In summary:
* My G9x not charging via USB was because of the cable, not the
charger or anything else.
* I could not find a USB power adaptor that didn't work and a 5W one
is sufficient.
