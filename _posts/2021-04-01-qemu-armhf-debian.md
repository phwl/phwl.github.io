---
author: phwl
comments: true
toc: true
date: 2021-04-01 11:32:43 AEST
title: Debian on ARM via QEMU
use_math: true
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/02/bbg-photo.jpg
---
This post describes how to emulate an ARM 64 bit (aarch64) or ARM hard float 32 bit (armhf) processor using using ```qemu``` and install Debian Linux on the emulator. Actually I did the 32 bit one first so the process is a little more streamlined for 64 bit.

I used Ubuntu 18.04.5 but any Debian/Ubuntu distribution can be used with minor changes and it should work under VirtualBox. 

# 1. Create QEMU Image

## 1.1. For (64-bit) aarch64
I used the lastest version of [qemu](https://github.com/qemu/qemu) from github
and created a 32G qcow2 image (there isn't any disk space advantage to specifying 16G but it is a pain if it runs out).

```bash
$ qemu-system-aarch64 --version
QEMU emulator version 5.2.92 (v6.0.0-rc2)
Copyright (c) 2003-2021 Fabrice Bellard and the QEMU Project developers
$ qemu-img create -f qcow2 debian-3607-aarch64.qcow2 32G 
$ wget http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/arm64/iso-cd/debian-10.9.0-arm64-xfce-CD-1.iso
$ wget http://ftp.au.debian.org/debian/dists/buster/main/installer-arm64/20190702/images/cdrom/initrd.gz
$ wget http://ftp.au.debian.org/debian/dists/buster/main/installer-arm64/20190702/images/cdrom/vmlinuz
$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G     -initrd initrd.img-4.19.0-16-arm64     -kernel vmlinuz-4.19.0-16-arm64    -append "root=/dev/sda2 console=ttyAMA0"     -global virtio-blk-device.scsi=off     -device virtio-scsi-device,id=scsi     -drive file=debian-3607-aarch64.qcow2,id=rootimg,cache=unsafe,if=none     -device scsi-hd,drive=rootimg  -net user,hostfwd=tcp::10022-:22 -net nic    -nographic -device intel-hda -device hda-duplex
```
 *  No common CD-ROM drive was detected: Manually select to use /dev/vdb

```bash
$ virt-copy-out -a debian-3607-aarch64.qcow2 /boot/vmlinuz-4.19.0-16-arm64 /boot/initrd.img-4.19.0-16-arm64 .

$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G -initrd initrd.img-4.19.0-16-arm64 \
    -kernel vmlinuz-4.19.0-16-arm64 -append "root=/dev/vda2 console=ttyAMA0" \
    -drive if=virtio,file=debian-3607-aarch64.qcow2,format=qcow2,id=hd \
    -net user,hostfwd=tcp::10022-:22 -net nic -nographic -device intel-hda -device hda-duplex
```

Then you can login as root and
```bash
# apt update
# apt 
```


## 1.2. For (32-bit) armhf

Install qemu.
```bash
$ sudo apt update
$ sudo apt upgrade
$ mkdir qemu; cd qemu
$ sudo apt install qemu-system-arm
```

Download [initrd.gz](http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/netboot/initrd.gz), [vmlinuz](http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/netboot/vmlinuz) and
[debian-10.9.0-armhf-netinst.iso](http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-netinst.iso)
(alternatively
[debian-10.9.0-armhf-xfce-CD-1.iso](http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-xfce-CD-1.iso)).
```bash
$ wget http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/netboot/initrd.gz
$ wget http://ftp.debian.org/debian/dists/buster/main/installer-armhf/20190702/images/netboot/vmlinuz
$ wget http://debian.mirror.digitalpacific.com.au/debian-cd/10.9.0/armhf/iso-cd/debian-10.9.0-armhf-netinst.iso
```

```bash
$ qemu-img create -f qcow2 debian-3607.qcow2 16G # 8G will also work but not leave enough disk space for other things
$ qemu-system-arm -M virt -kernel ./vmlinuz -initrd ./initrd.gz -hda debian-3607.qcow2 -nographic -m 1024M -append "console=ttyAMA0" -drive file=debian-10.9.0-armhf-netinst.iso,id=cdrom,if=none,media=cdrom -device virtio-scsi-device -device scsi-cd,drive=cdrom
```

Use all of the defaults for the Debian installer.
 * I used "elec3607" for all user names and passwords.
 * For partitioning select "Guided - use entire disk". Note that this chooses /dev/vda2 for / (we will use this later).
 * If you get a "Failed to install the base system" message, try a second time from the menu.
 * Select linux-image-armmp-lpae for the kernel.
 * Select targeted for initrd **(This was a mistake, choose generic)**
 * For software to install, just choose "SSH server" and "standard system utilities" (the default).
 * You will receive the message that GRUB installation failed. We will fix this later.
 * Exit ```qemu``` with "control-A x".

Extract the kernel and initrd from the disk image.
```bash
$ sudo apt-get install libguestfs-tools
$ virt-ls -a debian-3607.qcow2 /boot/
$ virt-copy-out -a debian-3607.qcow2 /boot/vmlinuz-4.19.0-16-armmp-lpae /boot/initrd.img-4.19.0-16-armmp-lpae .
```

Now you can run your Debian-Arm Linux from either Linux:
```bash
$ qemu-system-arm -M virt -kernel vmlinuz-4.19.0-16-armmp-lpae -initrd initrd.img-4.19.0-16-armmp-lpae \
-append 'root=/dev/vda2' -drive if=virtio,file=debian-3607-lab4sol.qcow2,format=qcow2,id=hd \
-nographic -net user,hostfwd=tcp::10022-:22 -net nic
```

# 2. Install sudo and put ELEC3607 in the sudo group
Login as ```elec3607``` (password is ```elec3607```) and execute the following commands.
Note that the basic distribution of Debian does not include sudo.
```bash
$ su -
Password: 
# apt install sudo 
Reading package lists... Done
...
usermod -a -G sudo elec3607
shutdown now
```

You can also ssh to the machine and use X windows.
```bash
$ ssh -Y elec3607@localhost -p 10022
```

The complete list of Debian packages is available [here](https://www.debian.org/distrib/packages).


# 3. Install Debian Audio
Start by booting QEMU. 
```bash
$ qemu-system-aarch64 -M virt -cpu cortex-a53 -m 1G -initrd initrd.img-4.19.0-16-arm64 \
    -kernel vmlinuz-4.19.0-16-arm64 -append "root=/dev/vda2 console=ttyAMA0" \
    -drive if=virtio,file=debian-3607-aarch64.qcow2,format=qcow2,id=hd \
    -net user,hostfwd=tcp::10022-:22 -net nic -nographic -device intel-hda -device hda-duplex&
```

Rather than login directly, 
I prefer to ssh to the QEMU machine so I can run Xwindows.
```bash
$ ssh -Y elec3607@localhost -p 10022
```
You can also copy files to it.
```bash
scp -P 10022 -r lab5-audio elec3607@localhost:
```

Install the alsa and pulseaudio.
```bash
$ sudo apt install libasound2 libasound2-plugins libasound2-doc alsa-utils pulseaudio pavucontrol paprefs libpulse-dev libcanberra-gtk-dev 
$ sudo usermod -aG audio,pulse,pulse-access elec3607
```
Then you have to log out and log in again.

```bash
$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: Intel [HDA Intel], device 0: Generic Analog [Generic Analog]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
$ pulseaudio --start
$ pactl info
Server String: /run/user/1000/pulse/native
Library Protocol Version: 32
Server Protocol Version: 32
Is Local: yes
Client Index: 2
Tile Size: 65472
User Name: elec3607
Host Name: debian
Server Name: pulseaudio
Server Version: 12.2
Default Sample Specification: s16le 2ch 44100Hz
Default Channel Map: front-left,front-right
Default Sink: alsa_output.platform-4010000000.pcie-pci-0000_00_02.0.analog-stereo
Default Source: alsa_input.platform-4010000000.pcie-pci-0000_00_02.0.analog-stereo
Cookie: 1295:3f1d
```

Then you can start it up via systemctl.
```bash
$ systemctl --user enable pulseaudio
$ systemctl --user start pulseaudio
Job for pulseaudio.service failed because the control process exited with error code.
See "systemctl --user status pulseaudio.service" and "journalctl --user -xe" for details.
$ sudo shutdown -r now
```

Wait for everything to come back up and login again via ssh
```
$ systemctl --user status pulseaudio
● pulseaudio.service - Sound Service
   Loaded: loaded (/usr/lib/systemd/user/pulseaudio.service; enabled; vendor pre
   Active: active (running) since Sat 2021-04-10 15:59:48 AEST; 4s ago
 Main PID: 336 (pulseaudio)
   CGroup: /user.slice/user-1000.slice/user@1000.service/pulseaudio.service
           ├─336 /usr/bin/pulseaudio --daemonize=no
           └─357 /usr/lib/aarch64-linux-gnu/pulse/gsettings-helper
```

Now edit ```/etc/pulse/default.pa``` and append the line:
```
load-module module-null-sink sink_name=MySink format=s16le channels=1 rate=12000
```

We can restart the daemon and configure with.
```
$ systemctl --user restart pulseaudio
$ pacmd list-sinks
2 sink(s) available.
  * index: 0
	name: <alsa_output.platform-4010000000.pcie-pci-0000_00_02.0.analog-stereo>
	driver: <module-alsa-card.c>
	flags: HARDWARE HW_MUTE_CTRL HW_VOLUME_CTRL DECIBEL_VOLUME LATENCY FLAT_VOLUME DYNAMIC_LATENCY
	state: IDLE
	suspend cause: (none)
	priority: 9039
	volume: front-left: 30419 /  46% / -20.00 dB,   front-right: 30419 /  46% / -20.00 dB
	        balance 0.00
	base volume: 65536 / 100% / 0.00 dB
	volume steps: 65537
	muted: no
	current latency: 1283.09 ms
	max request: 344 KiB
	max rewind: 344 KiB
	monitor source: 0
	sample spec: s16le 2ch 44100Hz
	channel map: front-left,front-right
	             Stereo
	used by: 0
	linked by: 0
	configured latency: 2000.00 ms; range is 0.50 .. 2000.00 ms
	card: 0 <alsa_card.platform-4010000000.pcie-pci-0000_00_02.0>
	module: 6
	properties:
		alsa.resolution_bits = "16"
		device.api = "alsa"
		device.class = "sound"
		alsa.class = "generic"
		alsa.subclass = "generic-mix"
		alsa.name = "Generic Analog"
		alsa.id = "Generic Analog"
		alsa.subdevice = "0"
		alsa.subdevice_name = "subdevice #0"
		alsa.device = "0"
		alsa.card = "0"
		alsa.card_name = "HDA Intel"
		alsa.long_card_name = "HDA Intel at 0x10040000 irq 50"
		alsa.driver_name = "snd_hda_intel"
		device.bus_path = "platform-4010000000.pcie-pci-0000:00:02.0"
		sysfs.path = "/devices/platform/4010000000.pcie/pci0000:00/0000:00:02.0/sound/card0"
		device.bus = "pci"
		device.vendor.id = "8086"
		device.vendor.name = "Intel Corporation"
		device.product.id = "2668"
		device.product.name = "82801FB/FBM/FR/FW/FRW (ICH6 Family) High Definition Audio Controller (QEMU Virtual Machine)"
		device.form_factor = "internal"
		device.string = "front:0"
		device.buffering.buffer_size = "352800"
		device.buffering.fragment_size = "176400"
		device.access_mode = "mmap+timer"
		device.profile.name = "analog-stereo"
		device.profile.description = "Analog Stereo"
		device.description = "Built-in Audio Analog Stereo"
		alsa.mixer_name = "QEMU Generic"
		alsa.components = "HDA:1af40022,1af40022,00100101"
		module-udev-detect.discovered = "1"
		device.icon_name = "audio-card-pci"
	ports:
		analog-output-lineout: Line Out (priority 9900, latency offset 0 usec, available: unknown)
			properties:
				
	active port: <analog-output-lineout>
    index: 1
	name: <MySink>
	driver: <module-null-sink.c>
	flags: DECIBEL_VOLUME LATENCY FLAT_VOLUME DYNAMIC_LATENCY
	state: IDLE
	suspend cause: (none)
	priority: 1000
	volume: mono: 65536 / 100% / 0.00 dB
	        balance 0.00
	base volume: 65536 / 100% / 0.00 dB
	volume steps: 65537
	muted: no
	current latency: 1576.69 ms
	max request: 46 KiB
	max rewind: 46 KiB
	monitor source: 2
	sample spec: s16le 1ch 12000Hz
	channel map: mono
	             Mono
	used by: 0
	linked by: 0
	configured latency: 2000.00 ms; range is 0.50 .. 2000.00 ms
	module: 20
	properties:
		device.description = "Null Output"
		device.class = "abstract"
		device.icon_name = "audio-card"
$ pacmd list-sources
3 source(s) available.
    index: 0
	name: <alsa_output.platform-4010000000.pcie-pci-0000_00_02.0.analog-stereo.monitor>
	driver: <module-alsa-card.c>
	flags: DECIBEL_VOLUME LATENCY DYNAMIC_LATENCY
	state: SUSPENDED
	suspend cause: IDLE
	priority: 1030
	volume: front-left: 65536 / 100% / 0.00 dB,   front-right: 65536 / 100% / 0.00 dB
	        balance 0.00
	base volume: 65536 / 100% / 0.00 dB
	volume steps: 65537
	muted: no
	current latency: 0.00 ms
	max rewind: 0 KiB
	sample spec: s16le 2ch 44100Hz
	channel map: front-left,front-right
	             Stereo
	used by: 0
	linked by: 0
	configured latency: 0.00 ms; range is 0.50 .. 2000.00 ms
	monitor_of: 0
	card: 0 <alsa_card.platform-4010000000.pcie-pci-0000_00_02.0>
	module: 6
	properties:
		device.description = "Monitor of Built-in Audio Analog Stereo"
		device.class = "monitor"
		alsa.card = "0"
		alsa.card_name = "HDA Intel"
		alsa.long_card_name = "HDA Intel at 0x10040000 irq 50"
		alsa.driver_name = "snd_hda_intel"
		device.bus_path = "platform-4010000000.pcie-pci-0000:00:02.0"
		sysfs.path = "/devices/platform/4010000000.pcie/pci0000:00/0000:00:02.0/sound/card0"
		device.bus = "pci"
		device.vendor.id = "8086"
		device.vendor.name = "Intel Corporation"
		device.product.id = "2668"
		device.product.name = "82801FB/FBM/FR/FW/FRW (ICH6 Family) High Definition Audio Controller (QEMU Virtual Machine)"
		device.form_factor = "internal"
		device.string = "0"
		module-udev-detect.discovered = "1"
		device.icon_name = "audio-card-pci"
  * index: 1
	name: <alsa_input.platform-4010000000.pcie-pci-0000_00_02.0.analog-stereo>
	driver: <module-alsa-card.c>
	flags: HARDWARE HW_MUTE_CTRL HW_VOLUME_CTRL DECIBEL_VOLUME LATENCY DYNAMIC_LATENCY
	state: SUSPENDED
	suspend cause: IDLE
	priority: 9039
	volume: front-left: 65536 / 100% / 0.00 dB,   front-right: 65536 / 100% / 0.00 dB
	        balance 0.00
	base volume: 65536 / 100% / 0.00 dB
	volume steps: 65537
	muted: no
	current latency: 0.00 ms
	max rewind: 0 KiB
	sample spec: s16le 2ch 44100Hz
	channel map: front-left,front-right
	             Stereo
	used by: 0
	linked by: 0
	configured latency: 0.00 ms; range is 0.50 .. 2000.00 ms
	card: 0 <alsa_card.platform-4010000000.pcie-pci-0000_00_02.0>
	module: 6
	properties:
		alsa.resolution_bits = "16"
		device.api = "alsa"
		device.class = "sound"
		alsa.class = "generic"
		alsa.subclass = "generic-mix"
		alsa.name = "Generic Analog"
		alsa.id = "Generic Analog"
		alsa.subdevice = "0"
		alsa.subdevice_name = "subdevice #0"
		alsa.device = "0"
		alsa.card = "0"
		alsa.card_name = "HDA Intel"
		alsa.long_card_name = "HDA Intel at 0x10040000 irq 50"
		alsa.driver_name = "snd_hda_intel"
		device.bus_path = "platform-4010000000.pcie-pci-0000:00:02.0"
		sysfs.path = "/devices/platform/4010000000.pcie/pci0000:00/0000:00:02.0/sound/card0"
		device.bus = "pci"
		device.vendor.id = "8086"
		device.vendor.name = "Intel Corporation"
		device.product.id = "2668"
		device.product.name = "82801FB/FBM/FR/FW/FRW (ICH6 Family) High Definition Audio Controller (QEMU Virtual Machine)"
		device.form_factor = "internal"
		device.string = "front:0"
		device.buffering.buffer_size = "352800"
		device.buffering.fragment_size = "176400"
		device.access_mode = "mmap+timer"
		device.profile.name = "analog-stereo"
		device.profile.description = "Analog Stereo"
		device.description = "Built-in Audio Analog Stereo"
		alsa.mixer_name = "QEMU Generic"
		alsa.components = "HDA:1af40022,1af40022,00100101"
		module-udev-detect.discovered = "1"
		device.icon_name = "audio-card-pci"
	ports:
		analog-input-linein: Line In (priority 8100, latency offset 0 usec, available: unknown)
			properties:
				
	active port: <analog-input-linein>
    index: 2
	name: <MySink.monitor>
	driver: <module-null-sink.c>
	flags: DECIBEL_VOLUME LATENCY DYNAMIC_LATENCY
	state: SUSPENDED
	suspend cause: IDLE
	priority: 1000
	volume: mono: 65536 / 100% / 0.00 dB
	        balance 0.00
	base volume: 65536 / 100% / 0.00 dB
	volume steps: 65537
	muted: no
	current latency: 0.00 ms
	max rewind: 46 KiB
	sample spec: s16le 1ch 12000Hz
	channel map: mono
	             Mono
	used by: 0
	linked by: 0
	configured latency: 0.00 ms; range is 0.50 .. 2000.00 ms
	monitor_of: 1
	module: 20
	properties:
		device.description = "Monitor of Null Output"
		device.class = "monitor"
		device.icon_name = "audio-input-microphone"
```

The Volume Control program allows you to monitor what sources and sinks are available. If you play something and run ```pavucontrol```.
```bash
$ paplay iq-16b.wav&
$ pavucontrol&
```
 * In the Configuration tab, select Off as the Built-in Audio profile
 * If you look at Input Devices and Show: All Input Devices, you should only see Monitor of Null Output and the meter should indicate something is playing.
 * If you look at Output Devices and Show: All Output Devices, you should only see Null Output and the meter should indicate something is playing.
`

If you play a file in the background, you can decode it.
```bash
$ paplay data/iq-16b.wav &
$ wsprcan/k9an-wsprd 
Writing data/wf-1618037425.wav
mode  -1 -3.1   0.001437 -3  VK2RG QF56 30 
mode -19 -2.9   0.001455 -2  VK3GOD QF23 23 
mode -21 -2.9   0.001478 -2  VK4YEH QG62 37 
<DecodeFinished,data/wf-1618037425.wav,3>
[3]+  Done                    paplay data/iq-16b.wav
```

Other useful tools include:
 * Firefox and audacity packages are useful but run too slow on QEMU. 
  ```
  sudo apt install firefox-esr audacity
  ```

 * PulseAudio Preferences can be used to configure the network.
  ```
  $ paprefs
  ```
   * Under the Network Access tab, select "Make discoverable PulseAudio network sound devices available locally"
   * Under the Network Server tab, select "Enable network access to local sound devices" and "Don't require authentication"

If you go to a websdr in Firefox, you can route the audio to your machine.
```bash
$ firefox http://websdr1.sdrutah.org:8901/index1a.html?tune=7038.6usb &
```
Unfortunately, this doesn't run fast enough under QEMU to work on wspr decoding but it does under native x86 Linux.

## References
 * <https://gavv.github.io/articles/pulseaudio-under-the-hood/>
 * <https://www.freedesktop.org/wiki/Software/PulseAudio/Documentation/>
 * <https://wiki.archlinux.org/index.php/PulseAudio/Examples#PulseAudio_over_network>

