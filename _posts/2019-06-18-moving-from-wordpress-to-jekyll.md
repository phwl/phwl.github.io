---
title:  "Welcome to Minimal Mistakes Jekyll"
date:   2019-06-18 10:52:46 PDT
slug: moving-from-wordpress-to-jekyll.md
title: Moving from Wordpress to Jekyll
categories: website
tags: jekyll
use_math: true
header:
  teaser: https://jekyllrb.com/img/logo-2x.png
---

I have been using [Wordpress](https://wordpress.com/) for many years. 
It produces good looking websites and is easy to install and maintain.
Unfortunately, it isn't easy at all to backup the website, and the 
interface is all web-based meaning it is difficult to create
scripts which update the website.

Most programmers use [github](https://www.github.com) which offers
[Github Pages](https://pages.github.com) for website hosting.
The advantages over Wordpress plus hosting are:
 * It is free.
 * Websites can be edited with a normal text editor.
 * It is hosted by Github so version control etc is integrated.
 * A local copy is available so scripts to automate updating the
website etc are simple and changes can be made while offline.
 * It is easy to make backups.
 * Latex rendering is easy.
 * Markdown makes code blocks easier.

I managed to move [phwl.org](http://phwl.org) to Github under MacOS using the
steps below.

## Install Jekyll
  * Install ruby, rbenv, bundler and jekyll (I used homebrew) <https://jekyllrb.com/docs/installation/macos/>

## Install minimal-mistakes-jekyll theme
  * Jekyll is not compatible with the stupid Dropbox directory name `'Dropbox\ \(Sydney\ Uni\)/'`, and I don't think there is a way to change it. To get around this I put my website directory outside of Dropbox and made a symbolic link (inside Dropbox) so it would be backed up
  * Make a copy of <https://github.com/mmistakes/mm-github-pages-starter>, edit the _config.yml
~~~~
bundle
bundle update
~~~~
  * To use the local server, type `bundle exec jekyll serve --incremental`
and browse to `localhost:4000`.

## Convert website
  * Use the Wordpress exporter to export old website in xml format (tried the Jekyll converter plugin but that doesn't work for large websites). This just gives the content, without attachments etc. Then
  * Use [exitwp](https://github.com/thomasf/exitwp) to convert Wordpress to Jekyll
  * Copy all the images and documents from the Wordpress site (`wp-content` directory) using `ftp`. I used `FileZilla` from the App store for this.
  * Copy the _posts directory from `exitwp` into the Jekyll website.
  * Copy wp-content files into `assets/images` on the Jekyll website.
  * To make publically available, type `bundle exec jekyll build` and then push the files up to Github (the repository is <https://github.com/phwl/phwl.github.io>)

## Fix `_posts`
  * This took the most time. The main changes I needed to do was to fix the headers: remove the old `link` header, add a teaser image. Then I edited the image insertion code, which involved the extensive use of Python scripts to do global replacements like
 
~~~~
import fileinput
import re
import sys
 
for line in fileinput.input(sys.argv[1], inplace=1, backup='.bak'):
    line = re.sub(r'\[!.*\((.+)\).*\]\(.*\)', r'![](\1){: .align-center}', line.rstrip())
    print(line)
~~~~

## Customise website
  * Since I wanted teaser images appearing on the front page, I put a copy of <https://github.com/justinrummel/jr.com-mm/blob/jr-branch/_includes/archive-single.html> in `_includes/archive-single.html`
  * To enable $$\LaTeX$$ rendering with mathjax, I created a file in `_includes/scripts.html` with

~~~~
{% if page.use_math %}
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
{% endif %}
~~~~
