---
author: phwl
comments: true
date: 2022-10-05 09:30:00 AEST
title: Domain woes
use_math: true
toc: true
classes: wide
categories:
- academia
tags:
- linux
header:
  teaser: /assets/images/2022/10/grumpy.jpg
---

While overseas, <http://phwl.org> suddenly stopped working. 

The registrar was Bluehost and it turns out the reason was that I
transferred <https://cruxml.com.au> to a different registrar and let the hosting
service expire. Bluehost then made phwl.org Inactive and so it stopped
working. They wouldn't restore the settings to what I had before 
and suggested I do it manually.
Of course, this took about an hour to determine from an online chat.

I thus restored the DNS settings manually and waited 24 hours, but it 
didn't work. They must have disabled it on their nameserver even though
it allows me to edit. Thus I had to do another chat. This time they told 
me I need to renew my hosting (even though I don't need it) so it would 
work. I decided to just transfer to a different registrar, HostGator.
This took about an hour to determine from an online chat.

I paid for hosting with HostGator and transferred the domain. Two days
later and it wasn't working. So I checked with HostGator's support
and their say the EPP code supplied by BlueHost didn't work.
This took about an hour to determine from an online chat.

I then realised I could create a free account on CloudFlare,
use CloudFlare's nameserver and then set up my A record. 
One of the steps is to check that DNSSEC is enabled. You
can't work it on from their website but this can be checked via
<https://my.bluehost.com/cgi/dm/dnssec/phwl.org>.
That took about 5 minutes and <http://phwl.org> was working again!

Then I went back to HostGator and asked for a refund because I couldn't
transfer the domain. They very kindly agreed.
This took about hald an hour to determine from an online chat.
