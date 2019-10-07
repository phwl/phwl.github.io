---
author: phwl
comments: true
date: 2018-05-19 06:05:43+00:00
# link: http://phwl.org/how-to-program-australian-repeaters-into-an-icom-ic-2730a-using-chirp/
slug: how-to-program-australian-repeaters-into-an-icom-ic-2730a-using-chirp
title: How to program Australian Repeaters into an Icom IC-2730A using Chirp
classes: wide
categories:
- amateur radio
tags:
- hobbies
header:
  teaser: https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Icom_logo.svg/640px-Icom_logo.svg.png
---

I was not able to find much information on how to program Australian repeaters into my Icom IC-2730A. I did this under a Windows 7 VirtualBox virtual machine since I thought all I needed was the Icom cloning software which is only available under Windows. Here is a list of steps:

1. Purchase (or make) an Icom OPC-478UC programming cable. These are about US$60 but I purchased a clone from ebay ([https://www.ebay.com.au/itm/3-5mm-USB-Programming-Cable-OPC-478U-ICOM-IC-F11-IC-F11S-IC-2200H-IC-2720H-Q2Q0-/252991340381](https://www.ebay.com.au/itm/3-5mm-USB-Programming-Cable-OPC-478U-ICOM-IC-F11-IC-F11S-IC-2200H-IC-2720H-Q2Q0-/252991340381)) for $5 Australian.

2. The cable needs to be plugged into the right hand female port of the radio (looking from the back). It showed up as a Prolific Technology USB Serial Controller [0300] under VirtualBox so I installed the Windows 7 driver here  [http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=225&pcid=41](http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=225&pcid=41)  after which Windows created a com port (com3).

3. Install the Icom cloning software [https://www.icom.co.jp/world/support/download/firm/IC-2730A_E/1_00/](https://www.icom.co.jp/world/support/download/firm/IC-2730A_E/1_00/). I thought I would be able to cut and paste the repeater list into this application but I couldn't figure out how to do that ...

4. Install the Chirp software from [https://chirp.danplanet.com/projects/chirp/wiki/Home](https://chirp.danplanet.com/projects/chirp/wiki/Home)

5. Obtain the WIA Australian repeater directory from [http://www.wia.org.au/members/repeaters/data/](http://www.wia.org.au/members/repeaters/data/) (the "Example VBScript, Sorted Directory csv and CHIRP csv files and other csv formats" file) and unzip.

6. In Chirp,
(a) download the radio data using the Radio -> Download from radio menu
(b) File -> Import the appropriate csv file from the chirp directory from (4). I used NSW\chirp_Sydney.csv
(c) It then gives you the option to select the repeaters you wish to import, I just clicked OK.
(d) Radio -> Upload
(e) Switch radio off and on again

7. I then cloned the radio using the Icom cloning software from (2) so I have an Icom icf file of my configuration.
