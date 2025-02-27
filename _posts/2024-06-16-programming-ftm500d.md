---
author: phwl
comments: true
date: 2024-06-16 09:30:00 AEST
title: Program Yaesu FTM-500DR (without a Cable)
use_math: true
toc: true
classes: wide
categories:
- radio
tags:
- hobbies
header:
  teaser: https://yaesu.com/ProductImages/FTM-500DR_thumb.jpg
---

This post explains how to program the memories of a Yaesu FTM-500DR
via the microSD card (instead of a cable).

Even though the FTM-500DR has a microSD card slot, it isn't 
straightforward to program its memories from a computer.
I came up with this simple python 
program to convert CSV files from the [Australian Repeater list](https://www.wia.org.au/members/repeaters/data/) 
to a form digestible by the Yaesu FTM-500D Programmer ADMS-16 software, available under Files from the [Yaesu website](https://yaesu.com/indexVS.cfm?cmd=DisplayProducts&ProdCatID=249&encProdID=0308259EFC6C36C21D8DCDB78ECBBDCA). 

Specifically, the program converts the ```chirpM_Sydney.csv``` file. The resulting output file can be downloaded from [here](/assets/images/2024/06/chirpM_Sydney-FTM500d.csv) and directly imported in the Yaesu ADMS-16 software.

If you would like to customise the program, it is available below.

73 VK2APL

```python
#!/usr/bin/python3

# Program to convert csv files from https://www.wia.org.au/members/repeaters/data/ 
# to a form digestible by the Yaesu FTM-500D Programmer ADMS-16 software 

import re
import sys
import csv

fname = 'chirpM_Sydney.csv'
# we include all these names in our scan list
scancalls = ['VK2RBV', 'VK2RCG', 'Paddo', 'VK2RON', 'VK2RHC', 'VK2RCF', 'THills', 'Asqith', 'Dural', 'HCote']
# initial memory entries
initialmem = ['145.175,145.175,0.0,OFF,FM,AMS,AUS APRS,OFF,91.5 Hz,023,1500 Hz,RX 00,TX 00,MID,NO,5.0KHz,OFF,OFF,,0']


with open(fname) as csv_file:
    csv_reader = csv.DictReader(csv_file)
    lcount = 0
    for x in initialmem:
        lcount += 1
        print(f'{lcount},{x}')

    for r in csv_reader:
        # print(f'Column names are {", ".join(r)}')
        # process rx and xx frequency
        rxfreq = float(r['Frequency'])
        duplex = '+RPT' if r['Duplex'] == '+' else '-RPT'
        offset = float(r['Offset'])
        txfreq = rxfreq + offset if duplex == '+RPT' else rxfreq - offset

        # only interested in 2m and 70cm
        if not ((rxfreq < 148 and rxfreq > 144) or (rxfreq < 450 and rxfreq > 430)):
            continue
        if not ((txfreq < 148 and txfreq > 144) or (txfreq < 450 and txfreq > 430)):
            continue
        if not (r['Mode'] == 'FM'):
            continue

        # other parameters 
        mode = r['Mode']         # choices are AM,FM
        diganalog = 'AMS'   # choices are AMS,FM,DN
        name = r['Name']
        tonemode = 'TONE' if r['Tone'] == 'Tone' else 'OFF' # choices are OFF,TONE,TONE SQL,DCS,REVTONE,PR FREQ,PAGER
        ctcssfreq = r['rToneFreq']   # choices are OFF,TONE,TONE SQL,DCS,REVTONE,PR FREQ,PAGER
        dtcscode = r['DtcsCode']   # choices are OFF,TONE,TONE SQL,DCS,REVTONE,PR FREQ,PAGER
        userctss = '1500 Hz'
        txpower = 'MID'     # choices are HIGH,MID,LOW
        if any(x in r['Name'] for x in scancalls):
            scan = 'YES'    # choices are YES,NO
        else:
            scan = 'NO'        

        # print(r)
        lcount += 1
        print(f'{lcount},{rxfreq:.5f},{txfreq:.5f},{offset},{duplex},{mode},{diganalog},{name},{tonemode},{ctcssfreq} Hz,{dtcscode},{userctss},RX 00,TX 00,{txpower},{scan},5.0KHz,OFF,OFF,,0')
        #if lcount > 525:
            #break

    # print(f'Processed {lcount} lines.')
    for i in range(lcount + 1, 1000):
        print(f'{i},,,,,,,,,,,,,,,,,,,,0') 
```
