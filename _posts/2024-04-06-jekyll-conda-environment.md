---
author: phwl
comments: true
date: 2024-04-06 09:30:00 AEST
title: Installing Jekyll under Anaconda
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

Instructions for the above based on <https://s-canchi.github.io/2021-04-30-jekyll-conda/>.

```bash
(base) % conda create --name jekyll python
(base) % conda activate jekyll
```
Your path should look something like this:
```bash
(jekyll) % echo $PATH
/Users/phwl/anaconda3/envs/jekyll/share/rubygems/bin:/Users/phwl/anaconda3/envs/jekyll/bin:/Users/phwl/anaconda3/condabin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/opt/X11/bin:/Library/Apple/usr/bin:/Library/TeX/texbin
```

Now install compilers and ruby:
```bash
(jekyll) % conda install -c conda-forge c-compiler compilers cxx-compiler
(jekyll) % conda install -c conda-forge ruby
(jekyll) % gem install jekyll bundler
(jekyll) % pushd $HOME/opt/anaconda3/envs/jekyll/share/rubygems/bin
(jekyll) % ln -s $HOME/opt/anaconda3/envs/jekyll/bin/ruby .
(jekyll) % popd
(jekyll) % bundle install
(jekyll) % bundle exec jekyll serve --incremental
```

