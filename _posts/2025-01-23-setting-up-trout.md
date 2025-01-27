---
author: phwl
comments: true
date: 2025-01-22 09:30:00 AEST
title: Setting up trout (Debian home server)
use_math: true
toc: true
classes: wide
categories:
- academia
tags:
- linux
header:
  teaser: /assets/images/2025/01/debianlogo.png
---
Setting up my home server.

## Install Debian

### Partitioning

I keep /home in a seperate partition of the SSD so it was partitioned as follows:
  ```
  (parted)  print all                                                       
  Model: ATA ST2000LM007-1R81 (scsi)
  Disk /dev/sda: 2000GB
  Sector size (logical/physical): 512B/4096B
  Partition Table: gpt
  Disk Flags: 
  
  Number  Start   End     Size    File system  Name  Flags
   1      1049kB  2000GB  2000GB  ext4
  
  
  Model: Samsung SSD 970 EVO Plus 500GB (nvme)
  Disk /dev/nvme0n1: 500GB
  Sector size (logical/physical): 512B/512B
  Partition Table: gpt
  Disk Flags: 

  Number  Start   End    Size    File system     Name  Flags
   1      1049kB  538MB  537MB   fat32                 boot, esp
   2      538MB   151GB  150GB   ext4
   3      151GB   451GB  300GB   ext4
   4      451GB   500GB  49.6GB  linux-swap(v1)        swap
  ```
  
## Post Install

1. Install ssh ```sudo apt install openssh-server```. Use ```ssh-copy-id user@machine``` to copy public key over.

2. Create LUKS Volume
We are going to use /dev/sda1 with encryption so:
  ```bash
  $ sudo apt install cryptsetup
  $ sudo cryptsetup luksFormat /dev/sda1
  $ sudo cryptsetup luksOpen /dev/sda1 img3
  $ sudo mkfs.ext4 /dev/mapper/img3
  $ sudo cryptsetup luksClose /dev/mapper/img3
  ```

3. Mount LUKS Volume.
Use ```sudo blkid``` to identify /dev/sda UUID and create the 
following shell script: 
  ```bash
  #!/bin/bash
  sudo cryptsetup luksOpen /dev/disk/by-uuid/XXXXXXXX-843f-42c9-af34-b5cb43f73d00 img3 
  sudo mount /dev/mapper/img3 /srv
  ```
If you aren't using encryption you can just directly mount the disk by adding the below to /etc/fstab:
  ```
  UUID=XXXXXXXX-463c-4ae6-827a-368ab73cad88 /srv ext4 defaults 0 1
  ```
Then mount disk:
  ```
  sudo mount -a
  ```

4. Install samba
```bash
$ sudo apt install samba -y
```
In /etc/samba/samba.conf add:
```
[troutshare]
      path = /samba
      writeable = yes
      browsable = yes
      read only = no
      guest ok = no
```
```bash
$ sudo systemctl restart smbd
```
5. Set up backup cron job using ```crontab -e```
```
0 5 * * * /srv/troutdisk/scripts/backup-to-cod >/tmp/cronjob.out
```
the script itself is
```bash
#!/bin/bash

function teval() {
	echo "$*"
	eval "/usr/bin/time -v $*"
}

date
teval 'find /srv/troutdisk -print > /srv/troutdisk/data/media/gen/WD3.index'
teval 'rsync -avh --delete --progress /srv/troutdisk/ cod.local:/srv/coddisk/image/3'
teval 'ssh cod.local rsync -avh --delete --progress /srv/coddisk/ /srv/carpdisk'

date
```

6. Disable suspend ```/etc/systemd/sleep.conf``` with the following options
```
[Sleep]
AllowSuspend=no
AllowHibernation=no
AllowSuspendThenHibernate=no
AllowHybridSleep=no
```

7. To mount cod:
```bash
$ sudo apt-get install cifs-utils time
$ sudo mount.cifs  //cod.local/cod-share /srv/coddisk -o username=phwl
```
