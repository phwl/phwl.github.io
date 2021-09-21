---
author: phwl
comments: true
toc: true
date: 2021-09-21 11:44:13 AEST
title: Windows 10 No Audio Output Device is Installed Problem
classes: wide
categories:
- academia
tags:
- software
header:
  teaser: https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Windows_logo_-_2002%E2%80%932012_%28Black%29.svg/174px-Windows_logo_-_2002%E2%80%932012_%28Black%29.svg.png
---

This is a fix to the "No Audio Output Device is Installed Problem" which occurs after a Windows Update.


I'm not the only one to have this problem (mine is on an Intel NUC8i7HNB
machine). Of course, the Windows Troubleshooter didn't help at all. The solution is
 * <https://answers.microsoft.com/en-us/windows/forum/all/kb5003173-killed-my-audio/03662044-80f9-45e0-ba20-a47d1e93488a>

First open a Powershell prompt as Admin and ran the following commands.

```
net localgroup Administrators /add localservice

net localgroup Administrators /add networkservice
```

Restart the Windows Audio service in ```services.msc```
and audio is back!

It appears windows Update removes the service accounts from the Administrators groups and never puts them back.
