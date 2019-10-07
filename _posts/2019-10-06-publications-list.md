---
title:  Generating a Publications List from BibTex files
date:   2019-10-06 15:40:06 
slug: generating-publications-list
categories: 
  - software
  - academia
use_math: true
classes: wide
header:
  teaser: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/BibTeX_logo.svg/320px-BibTeX_logo.svg.png
---

For many years I've been using a convoluted process to generate my 
[publications list](/assets/papers) from separate BibTex files for
journals, conferences, books, patents, etc. I thought I could do it
using [pandoc](https://pandoc.org/), but it doesn't appear that it
parses bibtex files correctly.

After quite a lot of searching, I found [pybtex](https://pybtex.org/) 
which (unlike pandoc) understands BibTex bst files and can output
markdown. This plus a little bit of python allowed me to generate
papers.md directly from my .bib files.

~~~~
import subprocess
import re
import os

# different bibliography categories with their names
bibs = {'journal': 'Journals',
    'conference': 'Conference Papers',
    'patent': 'Patents',
    'book': 'Books',
    'bookchap': 'Chapters in Books',
    'editor': 'Edited Books',
    'misc': 'Miscellaneous'}

pretex = """\\documentclass{article}
\\usepackage{natbib}
\\usepackage{hyperref}
% whatever you need here, basically a good idea is to use your real thesis header
\\begin{document}
\\nocite{*}
\\bibliographystyle{unsrt}
"""

# create the .tex and .md files for each category
for k in bibs:
    intex = pretex + '\\bibliography{../' + k + '}\n\\end{document}\n'
    with open(k+".tex", "w") as tex_file:
        print(intex, file=tex_file)
    os.system("latex {}".format(k))
    os.system("bibtex {}".format(k))
    os.system("latex {}".format(k))
    cmd = "pybtex --style-language python --output-backend markdown {}".format(k)
    os.system(cmd)

out = """---
comments: false
permalink: papers
slug: papers
title: Publications
classes: wide
---
"""
with open("papers.md", "w") as out_file:
    print(out, file=out_file)

    for k in bibs:
        with open(k+".md", "r") as text_file:
            text = text_file.read()
            print("# {}\n".format(bibs[k]), file=out_file)
            print(text, file=out_file)
~~~~
