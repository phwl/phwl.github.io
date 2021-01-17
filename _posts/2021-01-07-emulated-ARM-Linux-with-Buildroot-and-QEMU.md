---
author: phwl
comments: true
date: 2021-01-07 16:02:24 AEST
title: Creating an emulated ARM Linux system using Buildroot and QEMU
classes: wide
categories:
- academia
tags:
- embedded
header:
  teaser: /assets/images/2021/01/armlogo.jpeg
---

This post details how to build an ARM linux image via [buildroot](https://buildroot.org), and emulate it using [QEMU](https://www.qemu.org/). This was done using an Ubuntu 18.04.5 LTS host machine.

## 1. Buildroot

An ARM 64-bit embedded Linux system requires a file system, kernel
image and user applications. Moreover, a cross compiler is needed
to build one from scratch, and an emulator (like
[QEMU](https://www.qemu.org/)) is required if it will be tested on
a non-ARM platform. [Buildroot](https://buildroot.org/) automates
this process. It can do a lot more than what is described here
and you should refer to its
[extensive documentation and training materials](https://buildroot.org/docs.html)
for details.

Download buildroot, generate an initial ```.config``` file
and start ```menuconfig```.
``` sh
phwl@bream:~$ H=~/elec3607/
phwl@bream:~$ mkdir $H
phwl@bream:~$ cd $H
phwl@bream:~/elec3607$ git clone git://git.buildroot.net/buildroot
Cloning into 'buildroot'...
remote: Enumerating objects: 24805, done.
remote: Counting objects: 100% (24805/24805), done.
remote: Compressing objects: 100% (11902/11902), done.
remote: Total 401699 (delta 15432), reused 20763 (delta 12840), pack-reused 376894
Receiving objects: 100% (401699/401699), 87.06 MiB | 5.76 MiB/s, done.
Resolving deltas: 100% (279114/279114), done.
phwl@bream:~/elec3607$ cd buildroot/
phwl@bream:~/elec3607/buildroot$ make qemu_aarch64_virt_defconfig
mkdir -p /home/phwl/elec3607/buildroot/output/build/buildroot-config/lxdialog
PKG_CONFIG_PATH="" make CC="/usr/bin/gcc" HOSTCC="/usr/bin/gcc" \
    obj=/home/phwl/elec3607/buildroot/output/build/buildroot-config -C support/kconfig -f Makefile.br conf
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -DCURSES_LOC="<ncurses.h>" -DLOCALE  -I/home/phwl/elec3607/buildroot/output/build/buildroot-config -DCONFIG_=\"\"  -MM *.c > /home/phwl/elec3607/buildroot/output/build/buildroot-config/.depend 2>/dev/null || :
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -DCURSES_LOC="<ncurses.h>" -DLOCALE  -I/home/phwl/elec3607/buildroot/output/build/buildroot-config -DCONFIG_=\"\"   -c conf.c -o /home/phwl/elec3607/buildroot/output/build/buildroot-config/conf.o
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -DCURSES_LOC="<ncurses.h>" -DLOCALE  -I/home/phwl/elec3607/buildroot/output/build/buildroot-config -DCONFIG_=\"\"  -I. -c /home/phwl/elec3607/buildroot/output/build/buildroot-config/zconf.tab.c -o /home/phwl/elec3607/buildroot/output/build/buildroot-config/zconf.tab.o
/usr/bin/gcc -D_GNU_SOURCE -D_DEFAULT_SOURCE -DCURSES_LOC="<ncurses.h>" -DLOCALE  -I/home/phwl/elec3607/buildroot/output/build/buildroot-config -DCONFIG_=\"\"   /home/phwl/elec3607/buildroot/output/build/buildroot-config/conf.o /home/phwl/elec3607/buildroot/output/build/buildroot-config/zconf.tab.o  -o /home/phwl/elec3607/buildroot/output/build/buildroot-config/conf
rm /home/phwl/elec3607/buildroot/output/build/buildroot-config/zconf.tab.c
#
# configuration written to /home/phwl/elec3607/buildroot/.config
#
phwl@bream:~/elec3607/buildroot$ make menuconfig
```

Under ```menuconfig```
```
 1. Select Kernel > Linux Kernel Tools > gpio
 1. Select Target Packages > Libraries > Hardware Handling > libgiod 
 1. Select Target Packages > Libraries > Hardware Handling > libgiod install tools
```

Then save and type 
```sh
make linux-menuconfig
``` 

After a while you will see the Linux kernel configuration menu. 
```
 1. Select Device Drivers > GPIO Support > Memory mapped GPIO drivers > PrimeCell PL061 GPIO support
```

Build the image with
```sh
time make
```

After a while (30 minutes on my desktop machine), it should finish and then run QEMU using:
```sh
cd output/images
./start-qemu.sh 
```

You should see the following output:
```sh
phwl@bream:~/elec3607/buildroot/output/images$ ./start-qemu.sh 
Booting Linux on physical CPU 0x0000000000 [0x410fd034]
Linux version 5.4.58 (phwl@bream) (gcc version 9.3.0 (Buildroot 2020.11-607-gb4db6905a4)) #1 SMP Fri Jan 8 20:11:45 AEDT 2021
Machine model: linux,dummy-virt
efi: Getting EFI parameters from FDT:
efi: UEFI not found.
psci: probing for conduit method from DT.
psci: PSCIv0.2 detected in firmware.
psci: Using standard PSCI v0.2 function IDs
psci: Trusted OS migration not required
percpu: Embedded 21 pages/cpu s46936 r8192 d30888 u86016
Detected VIPT I-cache on CPU0
CPU features: detected: ARM erratum 845719
CPU features: detected: ARM erratum 843419
Built 1 zonelists, mobility grouping on.  Total pages: 32256
Kernel command line: rootwait root=/dev/vda console=ttyAMA0
Dentry cache hash table entries: 16384 (order: 5, 131072 bytes, linear)
Inode-cache hash table entries: 8192 (order: 4, 65536 bytes, linear)
mem auto-init: stack:off, heap alloc:off, heap free:off
Memory: 104460K/131072K available (6012K kernel code, 340K rwdata, 1416K rodata, 448K init, 326K bss, 26612K reserved, 0K cma-reserved)
SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=1, Nodes=1
rcu: Hierarchical RCU implementation.
rcu: 	RCU restricting CPUs from NR_CPUS=256 to nr_cpu_ids=1.
rcu: RCU calculated value of scheduler-enlistment delay is 25 jiffies.
rcu: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=1
NR_IRQS: 64, nr_irqs: 64, preallocated irqs: 0
GICv2m: range[mem 0x08020000-0x08020fff], SPI[80:143]
random: get_random_bytes called from start_kernel+0x2a8/0x420 with crng_init=0
arch_timer: cp15 timer(s) running at 62.50MHz (virt).
clocksource: arch_sys_counter: mask: 0xffffffffffffff max_cycles: 0x1cd42e208c, max_idle_ns: 881590405314 ns
sched_clock: 56 bits at 62MHz, resolution 16ns, wraps every 4398046511096ns
Console: colour dummy device 80x25
Calibrating delay loop (skipped), value calculated using timer frequency.. 125.00 BogoMIPS (lpj=250000)
pid_max: default: 32768 minimum: 301
Mount-cache hash table entries: 512 (order: 0, 4096 bytes, linear)
Mountpoint-cache hash table entries: 512 (order: 0, 4096 bytes, linear)
ASID allocator initialised with 32768 entries
rcu: Hierarchical SRCU implementation.
EFI services will not be available.
smp: Bringing up secondary CPUs ...
smp: Brought up 1 node, 1 CPU
SMP: Total of 1 processors activated.
CPU features: detected: 32-bit EL0 Support
CPU features: detected: CRC32 instructions
CPU: All CPU(s) started at EL1
alternatives: patching kernel code
devtmpfs: initialized
clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645041785100000 ns
futex hash table entries: 256 (order: 2, 16384 bytes, linear)
DMI not present or invalid.
NET: Registered protocol family 16
DMA: preallocated 256 KiB pool for atomic allocations
hw-breakpoint: found 6 breakpoint and 4 watchpoint registers.
Serial: AMBA PL011 UART driver
9000000.pl011: ttyAMA0 at MMIO 0x9000000 (irq = 39, base_baud = 0) is a PL011 rev1
printk: console [ttyAMA0] enabled
iommu: Default domain type: Translated 
vgaarb: loaded
SCSI subsystem initialized
clocksource: Switched to clocksource arch_sys_counter
NET: Registered protocol family 2
tcp_listen_portaddr_hash hash table entries: 256 (order: 0, 4096 bytes, linear)
TCP established hash table entries: 1024 (order: 1, 8192 bytes, linear)
TCP bind hash table entries: 1024 (order: 2, 16384 bytes, linear)
TCP: Hash tables configured (established 1024 bind 1024)
UDP hash table entries: 256 (order: 1, 8192 bytes, linear)
UDP-Lite hash table entries: 256 (order: 1, 8192 bytes, linear)
NET: Registered protocol family 1
PCI: CLS 0 bytes, default 64
hw perfevents: enabled with armv8_pmuv3 PMU driver, 5 counters available
workingset: timestamp_bits=62 max_order=15 bucket_order=0
fuse: init (API version 7.31)
Block layer SCSI generic (bsg) driver version 0.4 loaded (major 251)
io scheduler mq-deadline registered
io scheduler kyber registered
pl061_gpio 9030000.pl061: PL061 GPIO chip registered
pci-host-generic 4010000000.pcie: host bridge /pcie@10000000 ranges:
pci-host-generic 4010000000.pcie:    IO 0x3eff0000..0x3effffff -> 0x00000000
pci-host-generic 4010000000.pcie:   MEM 0x10000000..0x3efeffff -> 0x10000000
pci-host-generic 4010000000.pcie:   MEM 0x8000000000..0xffffffffff -> 0x8000000000
pci-host-generic 4010000000.pcie: ECAM at [mem 0x4010000000-0x401fffffff] for [bus 00-ff]
pci-host-generic 4010000000.pcie: PCI host bridge to bus 0000:00
pci_bus 0000:00: root bus resource [bus 00-ff]
pci_bus 0000:00: root bus resource [io  0x0000-0xffff]
pci_bus 0000:00: root bus resource [mem 0x10000000-0x3efeffff]
pci_bus 0000:00: root bus resource [mem 0x8000000000-0xffffffffff]
pci 0000:00:00.0: [1b36:0008] type 00 class 0x060000
cacheinfo: Unable to detect cache hierarchy for CPU 0
virtio_blk virtio0: [vda] 122880 512-byte logical blocks (62.9 MB/60.0 MiB)
rtc-pl031 9010000.pl031: registered as rtc0
NET: Registered protocol family 10
Segment Routing with IPv6
sit: IPv6, IPv4 and MPLS over IPv4 tunneling driver
NET: Registered protocol family 17
NET: Registered protocol family 15
registered taskstats version 1
rtc-pl031 9010000.pl031: setting system clock to 2021-01-08T09:12:58 UTC (1610097178)
EXT4-fs (vda): mounted filesystem with ordered data mode. Opts: (null)
VFS: Mounted root (ext4 filesystem) readonly on device 254:0.
devtmpfs: mounted
Freeing unused kernel memory: 448K
Run /sbin/init as init process
EXT4-fs (vda): re-mounted. Opts: (null)
ext4 filesystem being remounted at / supports timestamps until 2038 (0x7fffffff)
Starting syslogd: OK
Starting klogd: OK
Running sysctl: OK
Saving random seed: random: dd: uninitialized urandom read (512 bytes read)
OK
Starting network: udhcpc: started, v1.32.0
random: mktemp: uninitialized urandom read (6 bytes read)
udhcpc: sending discover
udhcpc: sending select for 10.0.2.15
udhcpc: lease of 10.0.2.15 obtained, lease time 86400
deleting routers
random: mktemp: uninitialized urandom read (6 bytes read)
adding dns 10.0.2.3
OK

Welcome to Buildroot
buildroot login: IPv6: ADDRCONF(NETDEV_CHANGE): eth0: link becomes ready
```

Enter "root" as the user name and no password is required. You can
exit QEMU with ```Ctrl-a x``` and get help with ```Ctrl-a h```.
The monitor is invoked with ```Ctrl-a c```, and can provide information
about the underlying hardware, e.g. the memory tree:
```
(qemu) info mtree
address-space: memory
  0000000000000000-ffffffffffffffff (prio 0, i/o): system
    0000000000000000-0000000003ffffff (prio 0, romd): virt.flash0
    0000000004000000-0000000007ffffff (prio 0, romd): virt.flash1
    0000000008000000-0000000008000fff (prio 0, i/o): gic_dist
    0000000008010000-0000000008011fff (prio 0, i/o): gic_cpu
    0000000008020000-0000000008020fff (prio 0, i/o): gicv2m
    0000000009000000-0000000009000fff (prio 0, i/o): pl011
    0000000009010000-0000000009010fff (prio 0, i/o): pl031
    0000000009020000-0000000009020007 (prio 0, i/o): fwcfg.data
    0000000009020008-0000000009020009 (prio 0, i/o): fwcfg.ctl
    0000000009020010-0000000009020017 (prio 0, i/o): fwcfg.dma
    0000000009030000-0000000009030fff (prio 0, i/o): pl061
    000000000a000000-000000000a0001ff (prio 0, i/o): virtio-mmio
    000000000a000200-000000000a0003ff (prio 0, i/o): virtio-mmio
    000000000a000400-000000000a0005ff (prio 0, i/o): virtio-mmio
    000000000a000600-000000000a0007ff (prio 0, i/o): virtio-mmio
    000000000a000800-000000000a0009ff (prio 0, i/o): virtio-mmio
    000000000a000a00-000000000a000bff (prio 0, i/o): virtio-mmio
    000000000a000c00-000000000a000dff (prio 0, i/o): virtio-mmio
    000000000a000e00-000000000a000fff (prio 0, i/o): virtio-mmio
    000000000a001000-000000000a0011ff (prio 0, i/o): virtio-mmio
    000000000a001200-000000000a0013ff (prio 0, i/o): virtio-mmio
    000000000a001400-000000000a0015ff (prio 0, i/o): virtio-mmio
    000000000a001600-000000000a0017ff (prio 0, i/o): virtio-mmio
    000000000a001800-000000000a0019ff (prio 0, i/o): virtio-mmio
    000000000a001a00-000000000a001bff (prio 0, i/o): virtio-mmio
    000000000a001c00-000000000a001dff (prio 0, i/o): virtio-mmio
    000000000a001e00-000000000a001fff (prio 0, i/o): virtio-mmio
    000000000a002000-000000000a0021ff (prio 0, i/o): virtio-mmio
    000000000a002200-000000000a0023ff (prio 0, i/o): virtio-mmio
    000000000a002400-000000000a0025ff (prio 0, i/o): virtio-mmio
    000000000a002600-000000000a0027ff (prio 0, i/o): virtio-mmio
    000000000a002800-000000000a0029ff (prio 0, i/o): virtio-mmio
    000000000a002a00-000000000a002bff (prio 0, i/o): virtio-mmio
    000000000a002c00-000000000a002dff (prio 0, i/o): virtio-mmio
    000000000a002e00-000000000a002fff (prio 0, i/o): virtio-mmio
    000000000a003000-000000000a0031ff (prio 0, i/o): virtio-mmio
    000000000a003200-000000000a0033ff (prio 0, i/o): virtio-mmio
    000000000a003400-000000000a0035ff (prio 0, i/o): virtio-mmio
    000000000a003600-000000000a0037ff (prio 0, i/o): virtio-mmio
    000000000a003800-000000000a0039ff (prio 0, i/o): virtio-mmio
    000000000a003a00-000000000a003bff (prio 0, i/o): virtio-mmio
    000000000a003c00-000000000a003dff (prio 0, i/o): virtio-mmio
    000000000a003e00-000000000a003fff (prio 0, i/o): virtio-mmio
    000000000c000000-000000000dffffff (prio 0, i/o): platform bus
    0000000010000000-000000003efeffff (prio 0, i/o): alias pcie-mmio @gpex_mmio 0000000010000000-000000003efeffff
    000000003eff0000-000000003effffff (prio 0, i/o): gpex_ioport
    0000000040000000-0000000047ffffff (prio 0, ram): mach-virt.ram
    0000004010000000-000000401fffffff (prio 0, i/o): alias pcie-ecam @pcie-mmcfg-mmio 0000000000000000-000000000fffffff
    0000008000000000-000000ffffffffff (prio 0, i/o): alias pcie-mmio-high @gpex_mmio 0000008000000000-000000ffffffffff

address-space: I/O
  0000000000000000-000000000000ffff (prio 0, i/o): io

address-space: cpu-memory-0
  0000000000000000-ffffffffffffffff (prio 0, i/o): system
    0000000000000000-0000000003ffffff (prio 0, romd): virt.flash0
    0000000004000000-0000000007ffffff (prio 0, romd): virt.flash1
    0000000008000000-0000000008000fff (prio 0, i/o): gic_dist
    0000000008010000-0000000008011fff (prio 0, i/o): gic_cpu
    0000000008020000-0000000008020fff (prio 0, i/o): gicv2m
    0000000009000000-0000000009000fff (prio 0, i/o): pl011
    0000000009010000-0000000009010fff (prio 0, i/o): pl031
    0000000009020000-0000000009020007 (prio 0, i/o): fwcfg.data
    0000000009020008-0000000009020009 (prio 0, i/o): fwcfg.ctl
    0000000009020010-0000000009020017 (prio 0, i/o): fwcfg.dma
    0000000009030000-0000000009030fff (prio 0, i/o): pl061
    000000000a000000-000000000a0001ff (prio 0, i/o): virtio-mmio
    000000000a000200-000000000a0003ff (prio 0, i/o): virtio-mmio
    000000000a000400-000000000a0005ff (prio 0, i/o): virtio-mmio
    000000000a000600-000000000a0007ff (prio 0, i/o): virtio-mmio
    000000000a000800-000000000a0009ff (prio 0, i/o): virtio-mmio
    000000000a000a00-000000000a000bff (prio 0, i/o): virtio-mmio
    000000000a000c00-000000000a000dff (prio 0, i/o): virtio-mmio
    000000000a000e00-000000000a000fff (prio 0, i/o): virtio-mmio
    000000000a001000-000000000a0011ff (prio 0, i/o): virtio-mmio
    000000000a001200-000000000a0013ff (prio 0, i/o): virtio-mmio
    000000000a001400-000000000a0015ff (prio 0, i/o): virtio-mmio
    000000000a001600-000000000a0017ff (prio 0, i/o): virtio-mmio
    000000000a001800-000000000a0019ff (prio 0, i/o): virtio-mmio
    000000000a001a00-000000000a001bff (prio 0, i/o): virtio-mmio
    000000000a001c00-000000000a001dff (prio 0, i/o): virtio-mmio
    000000000a001e00-000000000a001fff (prio 0, i/o): virtio-mmio
    000000000a002000-000000000a0021ff (prio 0, i/o): virtio-mmio
    000000000a002200-000000000a0023ff (prio 0, i/o): virtio-mmio
    000000000a002400-000000000a0025ff (prio 0, i/o): virtio-mmio
    000000000a002600-000000000a0027ff (prio 0, i/o): virtio-mmio
    000000000a002800-000000000a0029ff (prio 0, i/o): virtio-mmio
    000000000a002a00-000000000a002bff (prio 0, i/o): virtio-mmio
    000000000a002c00-000000000a002dff (prio 0, i/o): virtio-mmio
    000000000a002e00-000000000a002fff (prio 0, i/o): virtio-mmio
    000000000a003000-000000000a0031ff (prio 0, i/o): virtio-mmio
    000000000a003200-000000000a0033ff (prio 0, i/o): virtio-mmio
    000000000a003400-000000000a0035ff (prio 0, i/o): virtio-mmio
    000000000a003600-000000000a0037ff (prio 0, i/o): virtio-mmio
    000000000a003800-000000000a0039ff (prio 0, i/o): virtio-mmio
    000000000a003a00-000000000a003bff (prio 0, i/o): virtio-mmio
    000000000a003c00-000000000a003dff (prio 0, i/o): virtio-mmio
    000000000a003e00-000000000a003fff (prio 0, i/o): virtio-mmio
    000000000c000000-000000000dffffff (prio 0, i/o): platform bus
    0000000010000000-000000003efeffff (prio 0, i/o): alias pcie-mmio @gpex_mmio 0000000010000000-000000003efeffff
    000000003eff0000-000000003effffff (prio 0, i/o): gpex_ioport
    0000000040000000-0000000047ffffff (prio 0, ram): mach-virt.ram
    0000004010000000-000000401fffffff (prio 0, i/o): alias pcie-ecam @pcie-mmcfg-mmio 0000000000000000-000000000fffffff
    0000008000000000-000000ffffffffff (prio 0, i/o): alias pcie-mmio-high @gpex_mmio 0000008000000000-000000ffffffffff

address-space: gpex-root
  0000000000000000-ffffffffffffffff (prio 0, i/o): bus master container

memory-region: gpex_mmio
  0000000000000000-ffffffffffffffff (prio 0, i/o): gpex_mmio

memory-region: pcie-mmcfg-mmio
  0000000000000000-000000001fffffff (prio 0, i/o): pcie-mmcfg-mmio

memory-region: system
  0000000000000000-ffffffffffffffff (prio 0, i/o): system
    0000000000000000-0000000003ffffff (prio 0, romd): virt.flash0
    0000000004000000-0000000007ffffff (prio 0, romd): virt.flash1
    0000000008000000-0000000008000fff (prio 0, i/o): gic_dist
    0000000008010000-0000000008011fff (prio 0, i/o): gic_cpu
    0000000008020000-0000000008020fff (prio 0, i/o): gicv2m
    0000000009000000-0000000009000fff (prio 0, i/o): pl011
    0000000009010000-0000000009010fff (prio 0, i/o): pl031
    0000000009020000-0000000009020007 (prio 0, i/o): fwcfg.data
    0000000009020008-0000000009020009 (prio 0, i/o): fwcfg.ctl
    0000000009020010-0000000009020017 (prio 0, i/o): fwcfg.dma
    0000000009030000-0000000009030fff (prio 0, i/o): pl061
    000000000a000000-000000000a0001ff (prio 0, i/o): virtio-mmio
    000000000a000200-000000000a0003ff (prio 0, i/o): virtio-mmio
    000000000a000400-000000000a0005ff (prio 0, i/o): virtio-mmio
    000000000a000600-000000000a0007ff (prio 0, i/o): virtio-mmio
    000000000a000800-000000000a0009ff (prio 0, i/o): virtio-mmio
    000000000a000a00-000000000a000bff (prio 0, i/o): virtio-mmio
    000000000a000c00-000000000a000dff (prio 0, i/o): virtio-mmio
    000000000a000e00-000000000a000fff (prio 0, i/o): virtio-mmio
    000000000a001000-000000000a0011ff (prio 0, i/o): virtio-mmio
    000000000a001200-000000000a0013ff (prio 0, i/o): virtio-mmio
    000000000a001400-000000000a0015ff (prio 0, i/o): virtio-mmio
    000000000a001600-000000000a0017ff (prio 0, i/o): virtio-mmio
    000000000a001800-000000000a0019ff (prio 0, i/o): virtio-mmio
    000000000a001a00-000000000a001bff (prio 0, i/o): virtio-mmio
    000000000a001c00-000000000a001dff (prio 0, i/o): virtio-mmio
    000000000a001e00-000000000a001fff (prio 0, i/o): virtio-mmio
    000000000a002000-000000000a0021ff (prio 0, i/o): virtio-mmio
    000000000a002200-000000000a0023ff (prio 0, i/o): virtio-mmio
    000000000a002400-000000000a0025ff (prio 0, i/o): virtio-mmio
    000000000a002600-000000000a0027ff (prio 0, i/o): virtio-mmio
    000000000a002800-000000000a0029ff (prio 0, i/o): virtio-mmio
    000000000a002a00-000000000a002bff (prio 0, i/o): virtio-mmio
    000000000a002c00-000000000a002dff (prio 0, i/o): virtio-mmio
    000000000a002e00-000000000a002fff (prio 0, i/o): virtio-mmio
    000000000a003000-000000000a0031ff (prio 0, i/o): virtio-mmio
    000000000a003200-000000000a0033ff (prio 0, i/o): virtio-mmio
    000000000a003400-000000000a0035ff (prio 0, i/o): virtio-mmio
    000000000a003600-000000000a0037ff (prio 0, i/o): virtio-mmio
    000000000a003800-000000000a0039ff (prio 0, i/o): virtio-mmio
    000000000a003a00-000000000a003bff (prio 0, i/o): virtio-mmio
    000000000a003c00-000000000a003dff (prio 0, i/o): virtio-mmio
    000000000a003e00-000000000a003fff (prio 0, i/o): virtio-mmio
    000000000c000000-000000000dffffff (prio 0, i/o): platform bus
    0000000010000000-000000003efeffff (prio 0, i/o): alias pcie-mmio @gpex_mmio 0000000010000000-000000003efeffff
    000000003eff0000-000000003effffff (prio 0, i/o): gpex_ioport
    0000000040000000-0000000047ffffff (prio 0, ram): mach-virt.ram
    0000004010000000-000000401fffffff (prio 0, i/o): alias pcie-ecam @pcie-mmcfg-mmio 0000000000000000-000000000fffffff
    0000008000000000-000000ffffffffff (prio 0, i/o): alias pcie-mmio-high @gpex_mmio 0000008000000000-000000ffffffffff

(qemu) 
```

You can also examine memory addresses e.g. to display a word at physical
memory address 0x903000, and then display a byte:
```
(qemu) xp /x 0x09030000
0000000009030000: 0x00000000
(qemu) xp /xb 0x09030400
0000000009030400: 0xff
```

The ```./start-qemu.sh``` script is shown below. It emulates a Cortex-A53 which is an ARMv8-A 64-bit processor.
```
#!/bin/sh
(
BINARIES_DIR="${0%/*}/"
cd ${BINARIES_DIR}

if [ "${1}" = "serial-only" ]; then
    EXTRA_ARGS='-nographic'
else
    EXTRA_ARGS=''
fi

export PATH="/home/phwl/elec3607/buildroot/output/host/bin:${PATH}"
exec qemu-system-aarch64 -M virt -cpu cortex-a53 -nographic -smp 1 -kernel Image
 -append "rootwait root=/dev/vda console=ttyAMA0" -netdev user,id=eth0 -device v
irtio-net-device,netdev=eth0 -drive file=rootfs.ext4,if=none,format=raw,id=hd0 -
device virtio-blk-device,drive=hd0  ${EXTRA_ARGS}
)
```

Refer to the [QEMU documentation](https://www.qemu.org/docs/master/).

## 2. Installing packages
The usefulness of the Linux created is limited because very few packages were
installed in the previous step. In the buildroot home directory, type
```
make menuconfig
```
select
 1. Target packages > Networking applications > openssh

and then type
```
make 
```
This time the system will build much faster as only the ```openssh```
package needs to be downloaded, compiled and placed in the system image.
Inside this new QEMU environment, you can 
```
ssh 10.0.2.2
```
to connect to the host.

## 3. User Application: Hello QEMU

Create the following C program 
in some directory outside of the buildroot ones (I chose ```$H/labs/lab1```
so the file is ```$H/labs/lab1/hello.c```). 

{% highlight C linenos %}
#include <stdio.h>

main()
{
	printf("Hello QEMU\n");
}
{% endhighlight %}


To compile it, we must remember to use a cross compiler as the target
is not the host machine but rather the guest ARM machine. Fortunately, can use the cross compiler that
buildroot created:
``` sh
$H/buildroot/output/host/bin/aarch64-linux-gcc -o hello hello.c
```
Start up the guest Linux with QEMU,copy the file from the host and execute
```
phwl@bream:~/elec3607/buildroot/output/images$ cd $H/buildroot/output/images
phwl@bream:~/elec3607/buildroot/output/images$ ./start-qemu.sh 
Booting Linux on physical CPU 0x0000000000 [0x410fd034]
...
Starting sshd: OK

Welcome to Buildroot
buildroot login: root
# scp phwl@10.0.2.2:elec3607/labs/lab1/hello .
phwl@10.0.2.2's password: 
hello                                         100% 8680   852.3KB/s   00:00    
# ./hello
Hello QEMU
# 

```
