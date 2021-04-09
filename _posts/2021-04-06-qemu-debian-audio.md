---
author: phwl
comments: true
date: 2021-04-06 09:00:00 AEST
title: Audio configuration under Debian QEMU
use_math: true
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---
This post describes how to use audio on aarch64 ARM under
```qemu``` Debian Linux. It follows from ({% link _posts/2021-04-01-qemu-armhf-debian.md %})


Install the alsa and pulseaudio packages. 
```bash
$ sudo apt install libasound2 libasound2-plugins libasound2-doc alsa-utils pulseaudio pavucontrol paprefs libpulse-dev libcanberra-gtk-dev
$ sudo usermod -aG audio,pulse,pulse-access elec3607
```
Then you have to log out and log in again.

```bash
$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: NVidia [HDA NVidia], device 3: HDMI 0 [HDMI 0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: NVidia [HDA NVidia], device 7: HDMI 1 [HDMI 1]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: NVidia [HDA NVidia], device 8: HDMI 2 [HDMI 2]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: NVidia [HDA NVidia], device 9: HDMI 3 [HDMI 3]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: NVidia [HDA NVidia], device 10: HDMI 4 [HDMI 4]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: NVidia [HDA NVidia], device 11: HDMI 5 [HDMI 5]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 0: NVidia [HDA NVidia], device 12: HDMI 6 [HDMI 6]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: Device [Plugable USB Audio Device], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: Generic [HD-Audio Generic], device 0: ALC1220 Analog [ALC1220 Analog]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
$ pactl info
Server String: /run/user/1000/pulse/native
Library Protocol Version: 32
Server Protocol Version: 32
Is Local: yes
Client Index: 9
Tile Size: 65472
User Name: phwl
Host Name: bream
Server Name: pulseaudio
Server Version: 11.1
Default Sample Specification: s16le 2ch 44100Hz
Default Channel Map: front-left,front-right
Default Sink: alsa_output.usb-Plugable_Plugable_USB_Audio_Device_000000000000-00.analog-stereo
Default Source: alsa_input.usb-Plugable_Plugable_USB_Audio_Device_000000000000-00.analog-stereo
Cookie: d261:0707
```

Then you can start it up via systemctl.
```bash
$ systemctl --user enable pulseaudio
$ systemctl --user start pulseaudio
$ systemctl --user status pulseaudio
```

Now edit ```/etc/pulse/default.pa``` and add the line:
```
load-module module-null-sink sink_name=MySink format=s16le channels=1 rate=12000
```

We can restart the daemon and configure with.
```
$ systemctl --user restart pulseaudio
$ pacmd list-sinks
$ paprefs
$ pavucontrol
```
```

## References
 * <https://gavv.github.io/articles/pulseaudio-under-the-hood/>
 * <https://www.freedesktop.org/wiki/Software/PulseAudio/Documentation/>
 * <https://wiki.archlinux.org/index.php/PulseAudio/Examples#PulseAudio_over_network>

