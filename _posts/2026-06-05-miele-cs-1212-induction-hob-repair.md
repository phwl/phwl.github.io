---
author: phwl
comments: true
date: 2026-06-05 09:30:00 AEST
title: Miele CS 1212 Induction Hob repair
use_math: true
toc: true
classes: wide
categories:
- electronics
tags:
- repair
header:
  teaser: /assets/images/2026/06/IMG_4964.jpeg
---

Our Miele CS 1212 Induction Hob was purchased in 2009 and already failing with an F32 (cooling fan fails to start) and F3 (temperature sensor) error code.

{% include figure image_path="/assets/images/2026/06/IMG_4946.jpeg" caption="" %}

So out it comes. The steel case is held in with Torx T20 screws.
{% include figure image_path="/assets/images/2026/06/IMG_4951.jpeg" caption="" %}

On the workbench.
{% include figure image_path="/assets/images/2026/06/IMG_4953.jpeg" caption="" %}

Under the steel case there are two boards. On the left is the main heating board.
{% include figure image_path="/assets/images/2026/06/IMG_4954.jpeg" caption="" %}

The white board is some sort of control board.
{% include figure image_path="/assets/images/2026/06/IMG_4955.jpeg" caption="" %}

Out it comes.
{% include figure image_path="/assets/images/2026/06/IMG_4964.jpeg" caption="" %}

Look, capacitors C311 and C312 appear to be bulging.
{% include figure image_path="/assets/images/2026/06/IMG_4963.jpeg" caption="" %}

Once out, the 470uF, 25V capacitors measured about 100uF so definitely
needed replacing.  The failed components were made by Yageo, a top
quality Taiwanese brand. In fact they are the second largest passive
component maker behind Murata.
{% include figure image_path="/assets/images/2026/06/IMG_4974.jpeg" caption="" %}

It was a simple job to replace them.
{% include figure image_path="/assets/images/2026/06/IMG_4967.jpeg" caption="" %}

Unfortunately, this was only a partial repair. The hob in the front
now gives an F0 error when it gets really hot, maybe that one was
masked by the others? However, the front is fine if the setting is
lower than 9 oclock and the one in the back is working perfectly
with the fan coming on at the right time. In the meantime we'll be using it!
{% include figure image_path="/assets/images/2026/06/IMG_4971.jpeg" caption="" %}

