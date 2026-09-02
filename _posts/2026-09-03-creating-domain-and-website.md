---
author: phwl
comments: true
date: 2026-09-02 09:30:00 AEST
title: Creating Domain and Website
use_math: true
toc: true
classes: wide
categories:
- academia
tags:
- linux
header:
  teaser: /assets/images/2022/03/win11.png
---
It took me a while to renew the SSL certificate for ternarynet.com. Here is the setup.

1. Register Your Domain on Namecheap

Purchase your domain name on [Namecheap](https://www.namecheap.com/). Go to your Domain List in your Namecheap dashboard. Click Manage next to your domain.

2. Point the Domain to Cloudflare

Create a free account on [Cloudflare](cloudflare.com). Add your new domain to Cloudflare. Copy the custom nameservers provided by Cloudflare. In Namecheap, change your domain nameservers to Custom Nameservers and paste the Cloudflare ones. Save your changes.

3. Connect Cloudflare to EasyWP

Log in to your [EasyWP](easywp.com) dashboard and create your WordPress website. Change the domain in EasyWP to your custom domain and select the option for a domain on an external provider. Copy the generated CNAME or ALIAS record from EasyWP. Go to your Cloudflare DNS settings, add a new CNAME record for @ (root) and www, and paste the target value from EasyWP. Turn off the orange proxy cloud icon (set to DNS only / grey cloud) for these records to ensure proper connection.

4. Install Sectigo CA SSL

I generated a PositiveSSL certificate on [SSLTrust](https://www.ssltrust.com.au/). You'll also need a [Certificate Signing Request](https://knowledge.digicert.com/general-information/how-to-create-a-csr) (CSR). 

Navigate back to your EasyWP dashboard and find your website settings. Locate the SSL Certificate section and click Manage. Choose Custom SSL Certificate if you are using an external certificate, or activate the built-in Sectigo PositiveSSL if available on your plan. Upload your Sectigo certificate files (.crt and .ca-bundle) along with your private key if doing a manual install, then save the changes.
