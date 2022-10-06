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

The registrar was Bluehost and the reason was that I
transferred [http://cruxml.com](https://cruxml.com.au) to a different
registrar and let the hosting service expire. Bluehost then made
phwl.org Inactive even though it had nothing to do with cruxml.com.  
They wouldn't restore the settings 
and suggested I do it manually.  Of course, it took
about an hour to determine this from an online chat.

I thus restored the DNS settings and waited 24 hours, but it 
didn't work. They must have disabled it on their nameserver even
though it allows me to edit. This time they told me I need to renew
my hosting (even though I only use their DNS and don't require
hosting).  I decided to just transfer to a different registrar,
HostGator.  This took about an hour to determine from an online
chat.

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

For future reference:
```bash
(base) phwl@AHJ7LDH57JP ~ % dig phwl.org

; <<>> DiG 9.10.6 <<>> phwl.org
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 3726
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 2, ADDITIONAL: 7

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;phwl.org.			IN	A

;; ANSWER SECTION:
phwl.org.		300	IN	A	172.67.152.142
phwl.org.		300	IN	A	104.21.1.230

;; AUTHORITY SECTION:
phwl.org.		3600	IN	NS	adelaide.ns.cloudflare.com.
phwl.org.		3600	IN	NS	kyree.ns.cloudflare.com.

;; ADDITIONAL SECTION:
kyree.ns.cloudflare.com. 80057	IN	A	162.159.44.207
kyree.ns.cloudflare.com. 80057	IN	A	172.64.35.207
kyree.ns.cloudflare.com. 80057	IN	A	108.162.195.207
adelaide.ns.cloudflare.com. 80057 IN	A	108.162.194.1
adelaide.ns.cloudflare.com. 80057 IN	A	162.159.38.1
adelaide.ns.cloudflare.com. 80057 IN	A	172.64.34.1

;; Query time: 94 msec
;; SERVER: 1.1.1.1#53(1.1.1.1)
;; WHEN: Thu Oct 06 10:09:50 AEDT 2022
;; MSG SIZE  rcvd: 225

(base) phwl@AHJ7LDH57JP ~ % whois phwl.org
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.publicinterestregistry.org

domain:       ORG

organisation: Public Interest Registry (PIR)
address:      11911 Freedom Drive 10th Floor,
address:      Suite 1000
address:      Reston, VA 20190
address:      United States

contact:      administrative
name:         Director of Operations, Compliance and Customer Support
organisation: Public Interest Registry (PIR)
address:      11911 Freedom Drive 10th Floor,
address:      Suite 1000
address:      Reston, VA 20190
address:      United States
phone:        +1 703 889 5778
fax-no:       +1 703 889 5779
e-mail:       ops@pir.org

contact:      technical
name:         Senior Director, DNS Infrastructure Group
organisation: Donuts Inc.
address:      10500 NE 8th Street, Suite 750
address:      Bellevue, WA 98004
address:      United States
phone:        1.425.298.2200
fax-no:       1.425.671.0020
e-mail:       tldtech@donuts.email

nserver:      A0.ORG.AFILIAS-NST.INFO 199.19.56.1 2001:500:e:0:0:0:0:1
nserver:      A2.ORG.AFILIAS-NST.INFO 199.249.112.1 2001:500:40:0:0:0:0:1
nserver:      B0.ORG.AFILIAS-NST.ORG 199.19.54.1 2001:500:c:0:0:0:0:1
nserver:      B2.ORG.AFILIAS-NST.ORG 199.249.120.1 2001:500:48:0:0:0:0:1
nserver:      C0.ORG.AFILIAS-NST.INFO 199.19.53.1 2001:500:b:0:0:0:0:1
nserver:      D0.ORG.AFILIAS-NST.ORG 199.19.57.1 2001:500:f:0:0:0:0:1
ds-rdata:     26974 8 2 4fede294c53f438a158c41d39489cd78a86beb0d8a0aeaff14745c0d16e1de32

whois:        whois.publicinterestregistry.org

status:       ACTIVE
remarks:      Registration information:
remarks:      http://publicinterestregistry.org

created:      1985-01-01
changed:      2022-06-03
source:       IANA

# whois.publicinterestregistry.org

Domain Name: phwl.org
Registry Domain ID: e706f642a26e42ebaf3476aa0cd55608-LROR
Registrar WHOIS Server: http://api.fastdomain.com/cgi/whois
Registrar URL: http://www.fastdomain.com
Updated Date: 2022-10-05T20:38:42Z
Creation Date: 2008-01-02T02:17:19Z
Registry Expiry Date: 2024-01-02T02:17:19Z
Registrar: FastDomain Inc.
Registrar IANA ID: 1154
Registrar Abuse Contact Email: legal@fastdomain.com
Registrar Abuse Contact Phone: +1.6022262389
Domain Status: ok https://icann.org/epp#ok
Registry Registrant ID: REDACTED FOR PRIVACY
Registrant Name: REDACTED FOR PRIVACY
Registrant Organization: 
Registrant Street: REDACTED FOR PRIVACY
Registrant City: REDACTED FOR PRIVACY
Registrant State/Province: New South Wales
Registrant Postal Code: REDACTED FOR PRIVACY
Registrant Country: AU
Registrant Phone: REDACTED FOR PRIVACY
Registrant Phone Ext: REDACTED FOR PRIVACY
Registrant Fax: REDACTED FOR PRIVACY
Registrant Fax Ext: REDACTED FOR PRIVACY
Registrant Email: Please query the RDDS service of the Registrar of Record identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
Registry Admin ID: REDACTED FOR PRIVACY
Admin Name: REDACTED FOR PRIVACY
Admin Organization: REDACTED FOR PRIVACY
Admin Street: REDACTED FOR PRIVACY
Admin City: REDACTED FOR PRIVACY
Admin State/Province: REDACTED FOR PRIVACY
Admin Postal Code: REDACTED FOR PRIVACY
Admin Country: REDACTED FOR PRIVACY
Admin Phone: REDACTED FOR PRIVACY
Admin Phone Ext: REDACTED FOR PRIVACY
Admin Fax: REDACTED FOR PRIVACY
Admin Fax Ext: REDACTED FOR PRIVACY
Admin Email: Please query the RDDS service of the Registrar of Record identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
Registry Tech ID: REDACTED FOR PRIVACY
Tech Name: REDACTED FOR PRIVACY
Tech Organization: REDACTED FOR PRIVACY
Tech Street: REDACTED FOR PRIVACY
Tech City: REDACTED FOR PRIVACY
Tech State/Province: REDACTED FOR PRIVACY
Tech Postal Code: REDACTED FOR PRIVACY
Tech Country: REDACTED FOR PRIVACY
Tech Phone: REDACTED FOR PRIVACY
Tech Phone Ext: REDACTED FOR PRIVACY
Tech Fax: REDACTED FOR PRIVACY
Tech Fax Ext: REDACTED FOR PRIVACY
Tech Email: Please query the RDDS service of the Registrar of Record identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
Name Server: adelaide.ns.cloudflare.com
Name Server: kyree.ns.cloudflare.com
DNSSEC: unsigned
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of WHOIS database: 2022-10-05T23:09:59Z <<<

# http

whois: http: nodename nor servname provided, or not known: Invalid argument
```
