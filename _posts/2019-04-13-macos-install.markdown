---
author: phwl
comments: true
date: 2019-04-13 02:30:33+00:00
layout: post
link: http://phwl.org/macos-install/
slug: macos-install
title: MacOS Install
wordpress_id: 4658
categories:
- software
---




It seemed like a good idea to remove all the accumulated rubbish on my MacBook Pro and install what I really needed. Here are the steps:





<!-- more -->





  1. First I made a Time Machine backup. One should be careful because, contrary to what one might think, it doesn't backup everything. In my case, most of my important stuff was already backed up to a separate disk using rsync, and also via dropbox.
  2. Created a bootable USB ([https://support.apple.com/en-us/HT201372).](https://support.apple.com/en-us/HT201372)
  3. Rebooted using the bootable USB
  4. Reformatted disk as APFS (Encrypted), Case Insensitive to avoid problems with matching file names
  5. Install MacOS, use iCloud to restore Contacts, Notes and Keychain. In Settings, make secondary click right side of trackpad.
  6. Copy music and iphoto library over.
  7. Using the MacOS Migration Assistant, transfer computer and network settings from Time Machine backup
  8. To see files in Time Machine: "defaults write com.apple.finder AppleShowAllFiles TRUE;killall Finder". Then copy .ssh .bash_profile and any other Unix files needed over. Type "defaults write com.apple.finder AppleShowAllFiles FALSE;killall Finder" to undo.
  9. Downloaded and installed Dropbox, Firefox, Skype, Chrome, Acrobat Reader, vlc
  10. From University machines download and install Cisco Anyconnect (VPN) and Adobe Acrobat. Connect to vpn.sydney.edu.au
  11. Installed MS Office
  12. Installed Apple's xcode command line tools: "xcode-select --install"
  13. Installed homebrew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`and the wget, curl, rsync, git
  14. Did brew install caskroom/cask/brew-cask and the following casks mactex, xquartz
  15. Installed anaconda from anaconda.com
  16. Installed Virtualbox from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)








