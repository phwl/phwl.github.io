---
author: phwl
comments: true
date: 2024-04-07 09:30:00 AEST
title: Using Jekyll under Anaconda
use_math: true
toc: true
classes: wide
categories:
- academia
tags:
- linux
header:
  teaser: https://jekyllrb.com/img/logo-2x.png
---

Instructions for doing the above based on <https://s-canchi.github.io/2021-04-30-jekyll-conda/>.

```bash
(base) $ conda create --name jekyll python
(base) $ conda activate jekyll
(jekyll) $ conda activate jekyll
(jekyll) $ conda install -c conda-forge c-compiler compilers cxx-compiler
(jekyll) $ conda install -c conda-forge ruby
(jekyll) $ gem install jekyll bundler

