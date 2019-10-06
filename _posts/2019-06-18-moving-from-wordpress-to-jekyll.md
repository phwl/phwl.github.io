---
title:  "Welcome to Minimal Mistakes Jekyll"
date:   2019-06-18 10:52:46 PDT
slug: moving-from-wordpress-to-jekyll.md
title: Moving from Wordpress to Jekyll
categories: website
tags: jekyll
use_math: true
classes: wide
header:
  teaser: https://jekyllrb.com/img/logo-2x.png
---

I have been using [Wordpress](https://wordpress.com/) for many years.
It produces good looking websites and is easy to install and maintain.
Unfortunately, it isn't easy at all to backup the website, and the
interface is all web-based meaning it is difficult to create
scripts which update the website. The old website is <http://phwl.org/blog>
and the new website can be viewed at <https://phwl.github.io>.
I will be switching them over at some point and moved the old
domain to a spare <http://uxa.apl.mybluehost.me/>.

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

## Fix `_posts` and `_pages`
  * This took the most time. The main changes I needed to do was to fix the headers: remove the old `link` header, add a teaser image (blank one if unneeded). Then I edited the image insertion code, which involved the extensive use of Python scripts to do global replacements like

~~~~
import fileinput
import re

for line in fileinput.input(sys.argv[1], inplace=1, backup='.bak'):
    line = re.sub(r'\[!.*\((.+)\).*\]\(.*\)', r'[![](\1){: .align-center}](\1)', line.rstrip())
    print(line)
~~~~
 * I later added links to the original image with this script.

~~~~
import fileinput
import re

for line in fileinput.input(inplace=1, backup='.bak'):
    line = re.sub('!\[(.*)\]\((.*)\)\{: .align-center\}',r'[![\1](\2){: .align-center}](\2)', line.rstrip())
    print(line)
~~~~
 * and then changed them yet again to use the include form

~~~~
{% raw %}
{% include figure image_path="/assets/images/2019/10/IMG_1268.jpg" caption="Shenzhen" %}
{% endraw %}
~~~~

 * I also used wide pages <https://mmistakes.github.io/minimal-mistakes/markup-text-readability-wide-page/>

## Customise website
  * Since I wanted teaser images appearing on the front page, I put a copy of <https://github.com/justinrummel/jr.com-mm/blob/jr-branch/_includes/archive-single.html> in `_includes/archive-single.html`
  * To use a custom domain <https://help.github.com/en/articles/managing-a-custom-domain-for-your-github-pages-site>
  * To use single pages without sidebar <https://github.com/mmistakes/minimal-mistakes/issues/1322#issuecomment-521386064>
  * To change home to a grid layout I changed home.html so the loop is in a grid wrapper

```
<div class="grid__wrapper">
{% for post in paginator.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>
```
  * To enable $$\LaTeX$$ rendering with mathjax (if it didn't work the LaTeX symbol would not have appeared), I created a file in `_includes/latex.html` with

~~~~
{% if page.use_math %}
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
{% endif %}
~~~~
This is similar to the approach in <https://haixing-hu.github.io/programming/2013/09/20/how-to-use-mathjax-in-jekyll-generated-github-pages/>.

## Links
I found the following sites helpful:
 * <https://www.alexdglover.com/the-move-to-jekyll/>
 * <http://www.seanbuscay.com/blog/jekyll-teaser-pager-and-read-more/>
 * <https://stackoverflow.com/questions/25463865/in-jekyll-how-do-i-grab-a-posts-first-image>
 * <https://www.vgemba.net/blog/Blog-Migration-Part-1-Setup/>
 * <https://github.com/merlos/jekyll-auto-image>
 * <http://lanyon.getpoole.com/>
 * <http://drjekyllthemes.github.io/>
 * <https://gykovacsblog.wordpress.com/tag/jekyll-scholar/>
 * <https://www.aravindiyer.com/tech/how-i-made-my-website-with-jekyll/#>
 * <https://github.com/alshedivat/al-folio>
 * <https://haixing-hu.github.io/programming/2013/09/20/how-to-use-mathjax-in-jekyll-generated-github-pages/>
