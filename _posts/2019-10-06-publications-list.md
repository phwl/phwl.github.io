---
title:  Generating a Publications List from BibTex files
date:   2019-10-06 15:40:06 
slug: generating-publications-list
categories: 
  - software
  - academia
  - latex
use_math: true
classes: wide
header:
  teaser: https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/320px-LaTeX_logo.svg.png
---

## Publications list in Markdown
For many years I've been using a convoluted process to generate my 
[publications list](/assets/papers) from separate bibtex files for
journals, conferences, books, patents, etc. I thought I could do it
using [pandoc](https://pandoc.org/), but it doesn't appear that it
parses bibtex files correctly.

After quite a lot of searching, I found [pybtex](https://pybtex.org/) 
which (unlike pandoc) understands bibtex bst files and can output
markdown. This plus a little bit of python allowed me to generate
papers.md directly from my .bib files.

``` python
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
```

## Publications list in LaTeX
The next problem is to get it in $$\LaTeX$$. Unfortunately, I couldn't 
stay with bibtex and had to use biblatex/biber instead.
Using biblatex, it is relatively straightforward and only a few issues needed to be handled:
 * How to manage different .bib files in different categories: <https://tex.stackexchange.com/questions/35279/biblatex-multiple-bibliographies-categorised-by-different-bib-files>
 * How to add a prefix to citations: <https://tex.stackexchange.com/questions/389083/how-to-add-a-prefix-to-citations-and-references-numbers-in-latex>
 * How to disable urls in a bibliography: <https://tex.stackexchange.com/questions/26318/disabling-urls-in-bibliography>
 * How to format \printbibliography as subsections: <https://tex.stackexchange.com/questions/134958/how-to-format-bibliography-titles-as-section-subsection-and-subsubsection>

I also had to remove keywords in the .bib files as my way of overwriting 
them didn't work properly. Putting all this together, here is a skeleton of
the latex file for my publications list.

``` latex
\documentclass[11pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[scale=0.8]{geometry}
\usepackage[backend=biber,sorting=none,defernumbers=true,url=false]{biblatex}
\usepackage{hyperref}
\DeclareSourcemap{
  \maps[datatype=bibtex, overwrite]{
    \map{
      \perdatasource{journal.bib}
      \step[fieldset=KEYWORDS, fieldvalue=journal, append]
    }
    \map{
      \perdatasource{conference.bib}
      \step[fieldset=KEYWORDS, fieldvalue=conference, append]
    }
  }
}
\addbibresource{journal.bib}
\addbibresource{conference.bib}

\begin{document}
\nocite{*}
\printbibheading[title={Publications},heading=bibnumbered]
\newrefcontext[labelprefix=J]
\printbibliography[title=Journals, resetnumbers=true, heading=subbibnumbered, keyword=journal]
\newrefcontext[labelprefix=C]
\printbibliography[title=Conferences, resetnumbers=true, heading=subbibnumbered, keyword=conference]
\end{document}
```
