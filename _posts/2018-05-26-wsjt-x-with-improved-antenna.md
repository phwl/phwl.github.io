---
author: phwl
comments: true
date: 2018-05-26 10:25:06+00:00
slug: wsjt-x-with-improved-antenna
title: WSJT-X with improved antenna
classes: wide
categories:
- radio
tags:
- hobbies
header:
  teaser: /assets/images/2021/01/wspr-100121.png
---

# 26 May 2018
{% include figure image_path="/assets/images/2018/05/Screen-Shot-2018-05-26.jpg" caption="" %}

Improving the antenna from [this post]({% post_url 2018-04-21-configuring-wsjt-x-on-ubuntu-for-an-icom-ic-7200 %}) (it now goes down to the fence and up the tree), I can get to Western Australia, New Zealand, Canada and the US using WSPR with only 5 W.

<!-- more -->


```
Timestamp	Call	MHz	SNR	Drift	Grid	Pwr	Reporter	RGrid	km	az
 2018-05-25 10:20 	 VK2APL 	 7.040019 	 -24 	 0 	 QF56 	 5 	 KC2STA1 	 FN22vx 	 15985 	 61
 2018-05-25 10:20 	 VK2APL 	 7.040008 	 -19 	 0 	 QF56 	 5 	 N1MCY 	 FN20fc 	 15859 	 66
 2018-05-25 10:12 	 VK2APL 	 7.040010 	 -25 	 0 	 QF56 	 5 	 N2HQI 	 FN13sa 	 15802 	 61
 2018-05-25 10:12 	 VK2APL 	 7.039988 	 -27 	 0 	 QF56 	 5 	 KB3EDF 	 FM18rh 	 15751 	 69
 2018-05-25 10:12 	 VK2APL 	 7.040005 	 -27 	 0 	 QF56 	 5 	 W3GXT 	 FM19ol 	 15746 	 67
 2018-05-25 10:12 	 VK2APL 	 7.040002 	 -27 	 0 	 QF56 	 5 	 KK4MBI 	 FM18kv 	 15710 	 68
 2018-05-25 10:20 	 VK2APL 	 7.039999 	 -28 	 0 	 QF56 	 5 	 K9AN 	 EN50wc 	 14801 	 64
 2018-05-25 10:12 	 VK2APL 	 7.040000 	 -28 	 0 	 QF56 	 5 	 N8AUM 	 EM70em 	 14737 	 77
 2018-05-25 10:20 	 VK2APL 	 7.040005 	 -24 	 0 	 QF56 	 5 	 KD6RF 	 EM22lr 	 13979 	 71
 2018-05-25 10:20 	 VK2APL 	 7.040006 	 -22 	 0 	 QF56 	 5 	 N5CEY 	 EL16gc 	 13479 	 78
 2018-05-25 10:20 	 VK2APL 	 7.040001 	 -25 	 0 	 QF56 	 5 	 AC0ZG 	 DN70km 	 13426 	 59
 2018-05-25 10:12 	 VK2APL 	 7.040010 	 -24 	 0 	 QF56 	 5 	 KF7VLT 	 DN40 	 12958 	 57
 2018-05-25 10:12 	 VK2APL 	 7.040001 	 -20 	 0 	 QF56 	 5 	 W7OWO 	 CN85lh 	 12297 	 49
 2018-05-25 10:12 	 VK2APL 	 7.040016 	 -25 	 0 	 QF56 	 5 	 KF6I 	 DM13bv 	 12097 	 61
 2018-05-25 10:20 	 VK2APL 	 7.040011 	 -22 	 0 	 QF56 	 5 	 VK6CQ 	 OF78wa 	 3270 	 263
 2018-05-25 10:12 	 VK2APL 	 7.040020 	 -2 	 0 	 QF56 	 5 	 VK5MR 	 PF89kk 	 1366 	 280
 2018-05-25 10:12 	 VK2APL 	 7.040008 	 -12 	 0 	 QF56 	 5 	 VK7KPC 	 QE38ok 	 953 	 199
 2018-05-25 10:12 	 VK2APL 	 7.040102 	 -4 	 0 	 QF56 	 5 	 VK7JJ 	 QE38lr 	 931 	 201
 2018-05-25 10:12 	 VK2APL 	 7.040001 	 -12 	 -1 	 QF56 	 5 	 VK3PYE 	 QF21 	 774 	 222
 2018-05-25 10:12 	 VK2APL 	 7.040000 	 -3 	 0 	 QF56 	 5 	 VK3MHY 	 QF22ma 	 728 	 225
 2018-05-25 10:12 	 VK2APL 	 7.039998 	 -10 	 0 	 QF56 	 5 	 VK3MI 	 QF22ne 	 711 	 226
 2018-05-25 10:12 	 VK2APL 	 7.040001 	 -13 	 0 	 QF56 	 5 	 VK4ZBV 	 QG62ml 	 696 	 17
 2018-05-25 11:32 	 VK2APL 	 7.039999 	 -19 	 0 	 QF56 	 5 	 VK4AAN 	 QG61ah 	 547 	 11
 2018-05-25 10:20 	 VK2APL 	 7.040000 	 -22 	 0 	 QF56 	 5 	 VK2COW 	 QF44ox 	 232 	 223
```



Then I made my first decent [FT8](https://en.wikipedia.org/wiki/WSJT_(amateur_radio_software)#FT8) contact with K8VFV in Michigan USA today using 40 W, followed by VK2PMG (Lismore Heights, NSW), YV2TTM (Central Java, Indonesia), JA4VLK (Japan) and UA0FO (Asiatic Russia) at 50 W. This guide is mandatory reading for beginners [http://www.physics.princeton.edu/pulsar/K1JT/FT8_Operating_Tips.pdf](http://www.physics.princeton.edu/pulsar/K1JT/FT8_Operating_Tips.pdf).

{% include figure image_path="/assets/images/2018/05/Screen-Shot-2018-05-26.jpg" caption="" %}

# Update 8 Jan 2021

By hanging the wire antenna in a better position and using 50W, I managed to hit Europe on 40m for the first time.

{% include figure image_path="/assets/images/2021/01/wspr-080121.png" caption="" %}

```
Date                   Call        Frequency     SNR     Drift   Grid        POWER dBm W         REPORTED by loc       km         mi        Mode 
 2021-01-03 08:10      VK2APL      7.040099      -11      0      QF56of      +37      5.012      EA8BFK    IL38bo      18486      11487     WSPR-2 
 2021-01-03 07:56      VK2APL      7.040099      -15      0      QF56of      +37      5.012      EA8BFK    IL38bo      18486      11487     WSPR-2 
 2021-01-08 07:58      VK2APL      7.040097      -11      0      QF56of      +47      50.119     EA8BFK    IL38bo      18486      11487     WSPR-2 
 2021-01-08 07:58      VK2APL      7.040099      -15      0      QF56of      +47      50.119     OE9GHV    JN47wk      16462      10229     WSPR-2 
 2021-01-08 07:58      VK2APL      7.040099      -21      0      QF56of      +47      50.119     IW2NKE    JN63np      16260      10103     WSPR-2 
 2021-01-08 07:58      VK2APL      7.040099      -11      0      QF56of      +47      50.119     K5XL      EM12kp      13781      8563      WSPR-2 
 2021-01-08 07:50      VK2APL      7.040177      -19      0      QF56of      +47      50.119     VE6JY     DO33or      13340      8289      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040178      -10      0      QF56of      +47      50.119     VE6JY     DO33or      13340      8289      WSPR-2 
 2021-01-03 07:52      VK2APL      7.040101      -22      0      QF56of      +37      5.012      VE6EGN    DO23qe      13206      8206      WSPR-2 
 2021-01-03 08:10      VK2APL      7.040099      -5       0      QF56of      +37      5.012      VE6ARS    DO30eb      13156      8175      WSPR-2 
 2021-01-03 06:24      VK2APL      7.040098      -19      0      QF56        +37      5.012      KA7OEI-1  DN31uo      12910      8022      WSPR-2 
 2021-01-03 07:52      VK2APL      7.040098      -8       0      QF56of      +37      5.012      KA7OEI-1  DN31uo      12906      8019      WSPR-2 
 2021-01-03 08:10      VK2APL      7.040099      -13      0      QF56of      +37      5.012      KA7OEI-1  DN31uo      12906      8019      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040099      -9       0      QF56of      +47      50.119     KA7OEI-1  DN31uo      12906      8019      WSPR-2 
 2021-01-03 07:56      VK2APL      7.040098      -11      0      QF56of      +37      5.012      KA7OEI-1  DN31uo      12906      8019      WSPR-2 
 2021-01-08 07:42      VK2APL      7.040099      -9       0      QF56of      +47      50.119     KA7OEI-1  DN31uo      12906      8019      WSPR-2 
 2021-01-08 07:50      VK2APL      7.040101      -11      0      QF56of      +47      50.119     AA0JR     DM33wi      12534      7788      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040101      -12      0      QF56of      +47      50.119     AA0JR     DM33wi      12534      7788      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040099      -13      0      QF56of      +47      50.119     N6RY      DM33sp      12521      7780      WSPR-2 
 2021-01-03 06:46      VK2APL      7.040083      -22      0      QF56of      +37      5.012      KI7E      CN87wr      12483      7757      WSPR-2 
 2021-01-03 06:42      VK2APL      7.040099      -22      0      QF56of      +37      5.012      KK6PR     CN94ik      12376      7690      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040097      -12      0      QF56of      +47      50.119     KK6PR     CN94ik      12376      7690      WSPR-2 
 2021-01-03 07:56      VK2APL      7.040099      -14      0      QF56of      +37      5.012      KK6PR     CN94ik      12376      7690      WSPR-2 
 2021-01-08 07:50      VK2APL      7.040097      -16      0      QF56of      +47      50.119     KK6PR     CN94ik      12376      7690      WSPR-2 
 2021-01-03 08:10      VK2APL      7.040098      -13      0      QF56of      +37      5.012      KK6PR     CN94ik      12376      7690      WSPR-2 
 2021-01-03 06:46      VK2APL      7.040097      -22      0      QF56of      +37      5.012      KK6PR     CN94ik      12376      7690      WSPR-2 
 2021-01-03 07:52      VK2APL      7.040099      -14      0      QF56of      +37      5.012      KK6PR     CN94ik      12376      7690      WSPR-2 
 2021-01-08 07:42      VK2APL      7.040097      -16      0      QF56of      +47      50.119     KK6PR     CN94ik      12376      7690      WSPR-2 
 2021-01-08 07:50      VK2APL      7.040087      -13      0      QF56of      +47      50.119     ND7M      DM16xf      12359      7680      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040087      -12      0      QF56of      +47      50.119     ND7M      DM16xf      12359      7680      WSPR-2 
 2021-01-03 08:10      VK2APL      7.040099      -11      0      QF56of      +37      5.012      W7OWO     CN85lh      12298      7642      WSPR-2 
 2021-01-03 07:52      VK2APL      7.040099      -13      0      QF56of      +37      5.012      W7OWO     CN85lh      12298      7642      WSPR-2 
 2021-01-08 07:42      VK2APL      7.040100      -18      0      QF56of      +47      50.119     KP4MD     CM98iq      12077      7504      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040101      -18      0      QF56of      +47      50.119     KP4MD     CM98iq      12077      7504      WSPR-2 
 2021-01-08 07:50      VK2APL      7.040100      -19      0      QF56of      +47      50.119     KP4MD     CM98iq      12077      7504      WSPR-2 
 2021-01-03 07:56      VK2APL      7.040098      -17      0      QF56of      +37      5.012      KP4MD     CM98iq      12077      7504      WSPR-2 
 2021-01-03 08:10      VK2APL      7.040098      -20      0      QF56of      +37      5.012      KJ6WSM    CM98hs      12075      7503      WSPR-2 
 2021-01-03 07:56      VK2APL      7.040098      -23      0      QF56of      +37      5.012      KJ6WSM    CM98hs      12075      7503      WSPR-2 
 2021-01-08 07:50      VK2APL      7.040106      -14      0      QF56of      +47      50.119     W6UV      CM87wx      11975      7441      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040106      -13      0      QF56of      +47      50.119     W6UV      CM87wx      11975      7441      WSPR-2 
 2021-01-03 07:56      VK2APL      7.040098      -16      0      QF56of      +37      5.012      WB7ABP    CM88ok      11950      7425      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040100      -23      0      QF56of      +47      50.119     WB7ABP    CM88ok      11950      7425      WSPR-2 
 2021-01-08 07:50      VK2APL      7.040100      -23      0      QF56of      +47      50.119     WB7ABP    CM88ok      11950      7425      WSPR-2 
 2021-01-03 08:10      VK2APL      7.040098      -17      0      QF56of      +37      5.012      WB7ABP    CM88ok      11950      7425      WSPR-2 
 2021-01-08 07:42      VK2APL      7.040096      -18      0      QF56of      +47      50.119     KJ6MKI    CM88oi      11945      7422      WSPR-2 
 2021-01-08 07:50      VK2APL      7.040097      -17      0      QF56of      +47      50.119     KJ6MKI    CM88oi      11945      7422      WSPR-2 
 2021-01-08 07:58      VK2APL      7.040097      -16      0      QF56of      +47      50.119     KJ6MKI    CM88oi      11945      7422      WSPR-2 
 2021-01-03 08:10      VK2APL      7.040098      -14      0      QF56of      +37      5.012      KJ6MKI    CM88oi      11945      7422      WSPR-2 
 2021-01-03 07:56      VK2APL      7.040098      -12      0      QF56of      +37      5.012      KJ6MKI    CM88oi      11945      7422      WSPR-2 
 2021-01-03 07:52      VK2APL      7.040098      -12      0      QF56of      +37      5.012      KJ6MKI    CM88oi      11945      7422      WSPR-2 
```

Also on 20m: Brazil, US East and West coast, Taiwan, Russia and Hawaii.

{% include figure image_path="/assets/images/2021/01/wspr-090121.png" caption="" %}

```
Timestamp          Call    MHz         SNR      Drift  Grid    Pwr     Reporter  RGrid    km    az      Mode   # Spots
 2021-01-09 05:28  VK2APL  14.097002   -24      0      QF56of  50      PT2FHC    GH64cg   14154 157     2      1 
 2021-01-09 05:20  VK2APL  14.097112   -18      0      QF56of  50      VK5MR     PF94gw   1170  259     2      1 
 2021-01-09 05:20  VK2APL  14.097108   -26      1      QF56of  50      BM4AIK    PL02dp   7075  328     2      1 
 2021-01-09 05:20  VK2APL  14.097096   -26      0      QF56of  50      KFS       CM87tj   11924 56      2      1 
 2021-01-09 05:20  VK2APL  14.097098   -17      0      QF56of  50      K4COD     EM73sc   14915 75      2      1 
 2021-01-09 05:04  VK2APL  14.097067   -12      0      QF56of  50      VK5EI     PF95gd   1169  261     2      2 
 2021-01-09 05:04  VK2APL  14.097066   -16      0      QF56of  50      KH6KR     BL10ts   8220  50      2      2 
 2021-01-09 05:04  VK2APL  14.097101   +4       1      QF56of  50      ZL1NJR    RF72pg   2211  108     2      2 
 2021-01-09 05:04  VK2APL  14.097108   -19      0      QF56of  50      RU0LL     PN53xt   8845  346     2      1 
 2021-01-09 05:04  VK2APL  14.097117   -15      0      QF56of  50      VK8MA     PH65dm   2868  314     2      1 
 2021-01-09 05:04  VK2APL  14.097098   -18      0      QF56of  50      VK3KHZ    QF22pe   697   228     2      2 
 2021-01-09 05:04  VK2APL  14.097098   -10      0      QF56of  50      ZL2005SWL RE68mx   2083  119     2      2 
 2021-01-09 05:04  VK2APL  14.097098   +5       0      QF56of  50      VK4NE     QG62nj   710   15      2      2 
```

# Grey line 10 Jan 2021
Good grey line propagation today, particularly on 20m. Got into
Antarctica, Denmark, Scotland, Austria, Switzerland, Taiwan, China, Hong Kong,
NZ, Japan, Hawaii, US, Canada, Chile and Brazil.

{% include figure image_path="/assets/images/2021/01/wspr-100121.png" caption="" %}

```
63 spots
Timestamp              Call        MHz            SNR    Drift    Grid       Pwr    Reporter  RGrid        km    az      Mode    # Spots
 2021-01-10 09:30      VK2APL      14.097093      -22    0      QF56of      50      DO5EU     JO62qm      16089  315      2      1 
 2021-01-10 09:30      VK2APL      14.097118      -6     0      QF56of      50      VK8MA     PH65dm      2868   314      2      1 
 2021-01-10 09:30      VK2APL      14.097110      -20    0      QF56of      50      MW1CFN    IO73tj      17106  326      2      1 
 2021-01-10 09:18      VK2APL      14.097089      -16    0      QF56of      50      ON5KQ     JO10os      16814  316      2      2 
 2021-01-10 09:18      VK2APL      14.097097      -23    1      QF56of      50      K1RA-PI   FM18cr      15639  68      2      1 
 2021-01-10 09:18      VK2APL      14.097099      -25    0      QF56of      50      K4COD     EM73sc      14915  75      2      1 
 2021-01-10 09:18      VK2APL      14.097094      -21    0      QF56of      50      DL8KCW    JO42pb      16369  316      2      2 
 2021-01-10 09:18      VK2APL      14.097095      -23    0      QF56of      50      HB9NF     JN47lh      16532  307      2      1 
 2021-01-10 09:18      VK2APL      14.097097      -17    0      QF56of      50      G4ZFQ/O   IO90ir      17099  319      2      2 
 2021-01-10 09:18      VK2APL      14.097099      -19    0      QF56of      50      OE9GHV    JN47wk      16462  307      2      1 
 2021-01-10 09:18      VK2APL      14.097109      -22    0      QF56of      50      DL5ABH    JO41ul      16362  314      2      2 
 2021-01-10 09:18      VK2APL      14.097094      -23    0      QF56of      50      PI4THT    JO32kf      16517  317      2      2 
 2021-01-10 09:18      VK2APL      14.097094      -13    0      QF56of      50      OZ5ACI    JO66ca      16040  321      2      2 
 2021-01-10 09:18      VK2APL      14.097097      -19    1      QF56of      50      PE1NMR    JO32gb      16545  317      2      1 
 2021-01-10 09:18      VK2APL      14.097112      -24    0      QF56of      50      ON3URE/02 JO20cw      16742  316      2      1 
 2021-01-10 09:18      VK2APL      14.097124      -14    1      QF56of      50      ZL2RKL    RE68xl      2172   120      2      2 
 2021-01-10 09:18      VK2APL      14.097000      -17    0      QF56of      50      PT2FHC    GH64cg      14154  157      2      1 
 2021-01-10 09:18      VK2APL      14.097108      -15    0      QF56of      50      BM4AIK    PL02dp      7075   328      2      2 
 2021-01-10 09:10      VK2APL      14.097121      -19    0      QF56of      50      GM4SFW    IO77sn      16801  333      2      2 
 2021-01-10 09:10      VK2APL      14.097102      +10    1      QF56of      50      VK5KJP    PF95gd      1169   261      2      3 
 2021-01-10 09:10      VK2APL      14.097139      -20    1      QF56of      50      BA7KW-1   OL63        7543   322      2      3 
 2021-01-10 09:10      VK2APL      14.097123      -24    0      QF56of      50      VR2BG     OL72bi      7373   322      2      3 
 2021-01-10 09:10      VK2APL      14.097111      -13    0      QF56of      50      BD7MQB    OL72an      7397   323      2      3 
 2021-01-10 09:10      VK2APL      14.097100      -16    0      QF56of      50      GM4CCN    IO87dh      16788  332      2      3 
 2021-01-10 09:10      VK2APL      14.097102      +4     0      QF56of      50      VK2CPR    QF33          493  230      2      3 
 2021-01-10 09:10      VK2APL      14.097110      +2     0      QF56of      50      VK2POP    QF57          141  350      2      3 
 2021-01-10 09:10      VK2APL      14.097101      -21    -2      QF56of      50      JA1KPF   QM06bb      7850   351      2      3 
 2021-01-10 09:10      VK2APL      14.096996      -14    0      QF56of      50      BR7IAF/3  OL52        7567   320      2      3 
 2021-01-10 09:10      VK2APL      14.097105      +12    0      QF56of      50      VK2XGJ    QF55jl        92   205      2      3 
 2021-01-10 09:10      VK2APL      14.097097      -10    0      QF56of      50      DP0GVN-1  IB59ui      8289   187      2      1 
 2021-01-10 09:10      VK2APL      14.097096      -10    3      QF56of      50      BD7MLA    OL51uq      7451   320      2      3 
 2021-01-10 09:06      VK2APL      7.040099      -26     0      QF56of      50      K6PZB     CM88nk      11943  55      2      1 
 2021-01-10 09:06      VK2APL      7.040099      -21     0      QF56of      50      WB7ABP    CM88ok      11950  55      2      1 
 2021-01-10 09:06      VK2APL      7.040100      -14     0      QF56of      50      W7OWO     CN85lh      12298  49      2      1 
 2021-01-10 09:06      VK2APL      7.040105      +12     0      QF56of      50      VK2CEL    QF57uf      121    23      2      1 
 2021-01-10 09:06      VK2APL      7.040145      +10     0      QF56of      50      VK4XDB    QG62jk      707    13      2      1 
 2021-01-10 09:06      VK2APL      7.040097      -17     0      QF56of      50      KA7OEI-1  DN31uo      12906  56      2      2 
 2021-01-10 09:06      VK2APL      7.040096      +14     0      QF56of      50      VK7JJ     QE38lr      914    203      2      1 
 2021-01-10 09:06      VK2APL      7.040099      -21     0      QF56of      50      NH6XO     BL11      8230     49      2      1 
 2021-01-10 09:06      VK2APL      7.040099      +8      0      QF56of      50      VK4LAH    QG62nk      714    15      2      1 
 2021-01-10 09:06      VK2APL      7.040098      +3      0      QF56of      50      ZL2005SWL RE68mx      2083   119      2      1 
 2021-01-10 09:06      VK2APL      7.040087      -3      0      QF56of      50      VK3VMR    QF22nb      718    228      2      1 
 2021-01-10 09:06      VK2APL      7.040099      -13     0      QF56of      50      KK6PR     CN94ik      12376  50      2      1 
 2021-01-10 09:06      VK2APL      7.040084      -13     0      QF56of      50      VK6TGQ/S  OF76to      3280   261      2      3 
 2021-01-10 09:06      VK2APL      7.040089      -6      0      QF56of      50      JH3APN    PM74tq      7783   346      2      4 
 2021-01-10 09:06      VK2APL      7.040100      +8      0      QF56of      50      VK3LU     QF22rs      647    232      2      3 
 2021-01-10 09:06      VK2APL      7.040099      -8      0      QF56of      50      AI6VN/KH6 BL10rx      8225   50      2      1 
 2021-01-10 09:06      VK2APL      7.040097      -16     0      QF56of      50      JA5NVN    PM74ec      7749   345      2      1 
 2021-01-10 09:06      VK2APL      7.040047      +38     0      QF56of      50      VK2AMF/1  QF44pu      233    228      2      1 
 2021-01-10 09:06      VK2APL      7.040105      -8      0      QF56of      50      VK5AJQ    PF95ha      1162   260      2      1 
 2021-01-10 09:06      VK2APL      7.040093      -8      0      QF56of      50      ND7M      DM16xf      12359  60      2      1 
 2021-01-10 09:06      VK2APL      7.040104      -7      0      QF56of      50      VK3ZTE    QF22kg      721    231      2      1 
 2021-01-10 09:06      VK2APL      7.040109      -14     0      QF56of      50      VK5TCP    PF95hb      1162   260      2      1 
 2021-01-10 09:06      VK2APL      7.040100      -4      0      QF56of      50      VK1MAL    QF44mp      265    228      2      2 
 2021-01-10 09:06      VK2APL      7.040099       0      0      QF56of      50      KFS       CM87tj      11924  56      2      1 
 2021-01-10 09:06      VK2APL      7.040123      -1      0      QF56of      50      VK2COW    QF44ox      230    232      2      8 
 2021-01-10 09:06      VK2APL      7.040099      +16     0      QF56of      50      VK3KHZ    QF22pe      697    228      2      4 
 2021-01-10 09:06      VK2APL      7.040109      +6      0      QF56of      50      VK4YEH    QG62ll      715    14      2      1 
 2021-01-10 09:06      VK2APL      7.040105      -25     0      QF56of      50      ZL4KYH    RE78js      2231   119      2      2 
 2021-01-10 09:06      VK2APL      7.040099      -12     0      QF56of      50      CE3VRT    FF46pi      11336  145      2      3 
 2021-01-10 09:06      VK2APL      7.040091      -17     0      QF56of      50      KJ6MKI    CM88oi      11945  55      2      1 
 2021-01-10 09:06      VK2APL      7.040102      -21     0      QF56of      50      VK6CQ     OF78wa      3290   264      2      1 
 2021-01-10 09:06      VK2APL      7.040105      -5      0      QF56of      50      VK5MR     PF94gw      1170   259      2      3 
```
