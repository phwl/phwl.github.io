---
author: phwl
comments: true
date: 2013-05-23 13:21:52+00:00
# link: http://phwl.org/high-altitude-balloon-launch-1/
slug: high-altitude-balloon-launch-1
title: 'High Altitude Balloon Launch #1'
classes: wide
categories:
- australia
- photography
header:
  teaser: /assets/images/2013/05/GOPR5590.jpg
---

Our [Sydney University Electrical Engineering ](http://www.ee.usyd.edu.au)students, Stephen Tridgell and David Portelli successfully made a high-altitude balloon launch from Blayney, NSW. Stephen's report is after the jump.

[![](/assets/images/2013/05/GOPR5590.jpg){: .align-center}](/assets/images/2013/05/GOPR5590.jpg)

<!-- more -->

Excellent job guys!

[![](/assets/images/2013/05/936768_10200551479541477_289143142_n.jpg){: .align-center}](/assets/images/2013/05/936768_10200551479541477_289143142_n.jpg)

<!-- more -->

[![](/assets/images/2013/05/942112_10200551489181718_819025503_n.jpg){: .align-center}](/assets/images/2013/05/942112_10200551489181718_819025503_n.jpg)

[![](/assets/images/2013/05/GOPR4668.jpg){: .align-center}](/assets/images/2013/05/GOPR4668.jpg)

[![](/assets/images/2013/05/GOPR4935.jpg){: .align-center}](/assets/images/2013/05/GOPR4935.jpg)

[![](/assets/images/2013/05/GOPR5590.jpg){: .align-center}](/assets/images/2013/05/GOPR5590.jpg)

[![](/assets/images/2013/05/942273_10200551505942137_1613835602_n.jpg){: .align-center}](/assets/images/2013/05/942273_10200551505942137_1613835602_n.jpg)



**Balloon Launch Report (by Stephen Tridgell)**

On the 11th of May a Balloon with approximately a 2Kg payload was launched from Blayney Tourist Park. The balloon contained:




  * A Find Me Spot GPS Tracker


  * A HTC smart phone


  * A Go Pro 2 Camera


  * An Arduino Uno board


  * A high current output stage


  * Nichrome wire


  * A Radar Reflector constructed of aluminium foil and cardboard


  * A Small parachute


  * A Medipack Heat warmer


**Regulations:**

In order to meet CASA approval we were required to have the following:




  * A method of popping the balloon from the ground


  * A suitable launch site far away from any flight paths


  * That it be fitted with a radar reflector


  * That the personnel launching the balloon must be contactable during its flight


**Design of the Balloon:**

To meet these requirements a radar reflector was constructed out of aluminum foil and cardboard. The chosen method of popping the balloon was to use nichrome wire around the balloons neck and if necessary heat up the wire by putting a large current through it to melt the neck of the balloon. In order to achieve this an Arduino Board was used with a output stage capable of drawing large current. The Arduino board would be triggered via bluetooth from the HTC phone when it received a message. There would also be an independent GPS tracker and a Camera to take scenic photos.

**Construction of the Balloon System:**

The balloon was constructed over a few weeks which was mostly focused on enclosing all the items securely in a box. The chosen method for this was to drill holes in the box and tie down the components with cable ties. A small piece of plywood was also used to secure the Go Pro camera to the box. It was theorized that the box would get quite cold when the balloon achieved sufficient altitude. To attempt to combat this, a heat Medipack was attached to the lid of the box. In order for the box to be successfully communicated with a python Script was developed to run on the HTC phone with a corresponding Bluetooth program running on the Arduino Uno. On the Uno it was necessary to use four digital pins in order to sink sufficient current into the board so that the current over the Nichrome wire would be high enough to pop the balloon. There was some experimentation and it was found that the wire required around 2 to 2.5 Amps to heat up enough to pop the balloon. Fishing line was selected as the means of holding the box, parachute, radar reflector and balloon together as it is high strength. There was a limited amount that could be done until right before the launch as all the components in the box were battery powered and hence could not be securely fastened until they had been activated.

**Issues before the Launch:**

The launch team arrived at the site a 1pm, which was about an hour later than expected. Setting up all the equipment ready for launch also took longer than expected resulting in a launch at around 15:30.  One issue was that many things needed to be done just before the launch such as:




  * GPS set up to Track


  * Aduino Uno On and connected to the output Stage


  * Phone on and Connected via Bluetooth to the Uno


  * Go Pro Camera set to take Photos every 2 Secs


  * Medi Heat Pack activated


  * Sealing the box


  * Filling up the balloon with helium


Additionally, the first time the balloon wasn't filled up enough resulting in a very anti-climatic launch. The balloon had to be detached, filled a little more and reattached to the payload. For this payload the balloon required 3.5 m^3 of helium at 1atm.

**Issues After Launch:**

Immediately after launch the balloon was observed to be swinging the payload rather vigorously.  Fortunately the payload was securely fastened and the fishing line did not break. The balloon was tracked visually initially and was heading south. The first GPS tracking point confirmed this, however after the tracking point at 15:40 the GPS did not send a tracking point until 16:40 which was at its final resting place. The loss of GPS means we cannot map its trajectory which was a little disappointing. From the camera evidence it can be gathered that it took approximately 40 minutes to reach the peak after launch and 20 minutes to come back down. The first image after launch was judged to be at around 20m, This implies an initial vertical velocity of around 10m/s. Extrapolating this to the average speed of the upwards flight this implies it reached a maximum height of 79 000 feet. This is consistent with the images obtained as a height of around this is necessary to see the curvature of the earth. As it took only 20 minutes to come down, it was calculated that the balloon probably hit the ground at 70-75 km/hour. This is a lot faster than expected and is possibly due to the parachute getting tangled on the way down. The likely reason for this appears to be the balloon which, after popping was still attached to the rest of the balloon. The speed at which it came down is an issue that needs to be improved upon in future launches as it could cause significant damage. There will have to be design improvements and possibly a larger parachute or a smaller payload.

**Issues with the Recovery:**

As the balloon was launched late, the recovery started late too. The prediction had showed a position far to the east, thus after launch the team made their way to Bathurst. The first point at the landing sight was detected at 16:40 however it was mistakenly hypothesized that this was simply a point while it was still in the air as the predicted flight time was a lot longer than an hour and a lot further. When it was eventually realized there were several scattered GPS locations and the team made their way to the landing site. They reached it at around 18:00, after dark. The numerous GPS positions meant that there was a reasonable area that it could have landed in and the landing site, though near a dirt road had a few barbed wire fences and other obstacles. The balloon was not found the night it landed, due to uncertainty in the accuracy of the GPS and lack of light. In order for it to be found more easily in the future, it is recommended that the balloon be fitted with a buzzer and a flashing light. This would enable it to be more reliably and quickly recovered. It was found the next day to be very close to a few of the GPS points so it is believed that the accuracy is fairly good but there were a few points on the map far from where it was found. It can be seen from the landing site and the picture prior to landing that the balloon hit a tree and came to rest on the ground.

**Summary:**

The launch was a success as the balloon reached a high altitude took fantastic pictures and was recovered successfully. There were a few areas for improvement as there could have been issues with the launch. The highest priority one is a larger or better parachute deployment as it came down far too fast, which could not only damage the equipment but could harm someone or a third parties property. The launch timing needed to be planned better so that it could be recovered before dark. Possibly a more accurate GPS or one that could work at higher altitude.


