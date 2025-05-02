ERROR:  Error installing rdiscount:
	ERROR: Failed to build gem native extension.

    current directory: /opt/anaconda3/envs/jekyll/share/rubygems/gems/rdiscount-2.2.7/ext
/opt/anaconda3/envs/jekyll/bin/ruby extconf.rb
checking for random()... yes
checking for srandom()... yes
checking for rand()... yes
checking for srand()... yes
checking size of unsigned long... 8
checking size of unsigned int... 4
checking size of unsigned int... 4
checking size of unsigned short... 2
creating Makefile

current directory: /opt/anaconda3/envs/jekyll/share/rubygems/gems/rdiscount-2.2.7/ext
make DESTDIR\= sitearchdir\=./.gem.20250502-50817-few75b sitelibdir\=./.gem.20250502-50817-few75b clean

current directory: /opt/anaconda3/envs/jekyll/share/rubygems/gems/rdiscount-2.2.7/ext
make DESTDIR\= sitearchdir\=./.gem.20250502-50817-few75b sitelibdir\=./.gem.20250502-50817-few75b
compiling Csio.c
In file included from Csio.c:5:
./markdown.h:9:7: warning: 'HAVE_STDINT_H' is not defined, evaluates to 0 [-Wundef]
    9 | #elif HAVE_STDINT_H
      |       ^
./markdown.h:58:5: warning: 'GITHUB_CHECKBOX' is not defined, evaluates to 0 [-Wundef]
   58 | #if GITHUB_CHECKBOX
      |     ^
2 warnings generated.
compiling amalloc.c
amalloc.c:24:1: warning: function 'die' could be declared with attribute 'noreturn' [-Wmissing-noreturn]
   24 | {
      | ^
amalloc.c:40:14: warning: using the result of an assignment as a condition without parentheses [-Wparentheses]
   40 |     if ( ret = calloc(count + sizeof(struct alist) + sizeof(int), size) ) {
      |          ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
amalloc.c:40:14: note: place parentheses around the assignment to silence this warning
   40 |     if ( ret = calloc(count + sizeof(struct alist) + sizeof(int), size) ) {
      |              ^
      |          (                                                             )
amalloc.c:40:14: note: use '==' to turn this assignment into an equality comparison
   40 |     if ( ret = calloc(count + sizeof(struct alist) + sizeof(int), size) ) {
      |              ^
      |              ==
amalloc.c:77:10: warning: passing 'const char[46]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   77 |             die("goddam: corrupted memory block %d in free()!\n", p2->index);
      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
amalloc.c:23:11: note: passing argument to parameter 'msg' here
   23 | die(char *msg, int index)
      |           ^
amalloc.c:96:10: warning: passing 'const char[49]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   96 |             die("goddam: corrupted memory block %d in realloc()!\n", p2->index);
      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
amalloc.c:23:11: note: passing argument to parameter 'msg' here
   23 | die(char *msg, int index)
      |           ^
4 warnings generated.
compiling basename.c
compiling css.c
In file included from css.c:17:
./markdown.h:9:7: warning: 'HAVE_STDINT_H' is not defined, evaluates to 0 [-Wundef]
    9 | #elif HAVE_STDINT_H
      |       ^
./markdown.h:58:5: warning: 'GITHUB_CHECKBOX' is not defined, evaluates to 0 [-Wundef]
   58 | #if GITHUB_CHECKBOX
      |     ^
css.c:79:28: warning: implicit conversion loses integer precision: 'unsigned long' to 'int' [-Wshorten-64-to-32]
   79 |     written = (size > 0) ? fwrite(res,1,size,f) : 0;
      |             ~              ^~~~~~~~~~~~~~~~~~~~
3 warnings generated.
compiling docheader.c
In file included from docheader.c:14:
./markdown.h:9:7: warning: 'HAVE_STDINT_H' is not defined, evaluates to 0 [-Wundef]
    9 | #elif HAVE_STDINT_H
      |       ^
./markdown.h:58:5: warning: 'GITHUB_CHECKBOX' is not defined, evaluates to 0 [-Wundef]
   58 | #if GITHUB_CHECKBOX
      |     ^
2 warnings generated.
compiling dumptree.c
In file included from dumptree.c:8:
./markdown.h:9:7: warning: 'HAVE_STDINT_H' is not defined, evaluates to 0 [-Wundef]
    9 | #elif HAVE_STDINT_H
      |       ^
./markdown.h:58:5: warning: 'GITHUB_CHECKBOX' is not defined, evaluates to 0 [-Wundef]
   58 | #if GITHUB_CHECKBOX
      |     ^
dumptree.c:23:29: warning: returning 'const char[11]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   23 |     case WHITESPACE: return "whitespace";
      |                             ^~~~~~~~~~~~
dumptree.c:24:29: warning: returning 'const char[5]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   24 |     case CODE      : return "code";
      |                             ^~~~~~
dumptree.c:25:29: warning: returning 'const char[6]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   25 |     case QUOTE     : return "quote";
      |                             ^~~~~~~
dumptree.c:26:29: warning: returning 'const char[7]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   26 |     case MARKUP    : return "markup";
      |                             ^~~~~~~~
dumptree.c:27:29: warning: returning 'const char[5]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   27 |     case HTML      : return "html";
      |                             ^~~~~~
dumptree.c:28:29: warning: returning 'const char[3]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   28 |     case DL        : return "dl";
      |                             ^~~~
dumptree.c:29:29: warning: returning 'const char[3]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   29 |     case UL        : return "ul";
      |                             ^~~~
dumptree.c:30:29: warning: returning 'const char[3]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   30 |     case OL        : return "ol";
      |                             ^~~~
dumptree.c:31:29: warning: returning 'const char[5]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   31 |     case LISTITEM  : return "item";
      |                             ^~~~~~
dumptree.c:32:29: warning: returning 'const char[7]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   32 |     case HDR       : return "header";
      |                             ^~~~~~~~
dumptree.c:33:29: warning: returning 'const char[3]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   33 |     case HR        : return "hr";
      |                             ^~~~
dumptree.c:34:29: warning: returning 'const char[6]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   34 |     case TABLE     : return "table";
      |                             ^~~~~~~
dumptree.c:35:29: warning: returning 'const char[7]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   35 |     case SOURCE    : return "source";
      |                             ^~~~~~~~
dumptree.c:36:29: warning: returning 'const char[6]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   36 |     case STYLE     : return "style";
      |                             ^~~~~~~
dumptree.c:37:29: warning: returning 'const char[14]' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   37 |     default        : return "mystery node!";
      |                             ^~~~~~~~~~~~~~~
dumptree.c:104:33: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  104 |     static char *Begin[] = { 0, "P", "center" };
      |                                 ^~~
dumptree.c:104:38: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  104 |     static char *Begin[] = { 0, "P", "center" };
      |                                      ^~~~~~~~
19 warnings generated.
compiling emmatch.c
In file included from emmatch.c:17:
./markdown.h:9:7: warning: 'HAVE_STDINT_H' is not defined, evaluates to 0 [-Wundef]
    9 | #elif HAVE_STDINT_H
      |       ^
./markdown.h:58:5: warning: 'GITHUB_CHECKBOX' is not defined, evaluates to 0 [-Wundef]
   58 | #if GITHUB_CHECKBOX
      |     ^
emmatch.c:113:20: warning: using the result of an assignment as a condition without parentheses [-Wparentheses]
  113 |     case 2: if ( e = empair(f,first,last,match=2) )
      |                  ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
emmatch.c:113:20: note: place parentheses around the assignment to silence this warning
  113 |     case 2: if ( e = empair(f,first,last,match=2) )
      |                    ^
      |                  (                               )
emmatch.c:113:20: note: use '==' to turn this assignment into an equality comparison
  113 |     case 2: if ( e = empair(f,first,last,match=2) )
      |                    ^
      |                    ==
3 warnings generated.
compiling flags.c
In file included from flags.c:2:
./markdown.h:9:7: warning: 'HAVE_STDINT_H' is not defined, evaluates to 0 [-Wundef]
    9 | #elif HAVE_STDINT_H
      |       ^
./markdown.h:58:5: warning: 'GITHUB_CHECKBOX' is not defined, evaluates to 0 [-Wundef]
   58 | #if GITHUB_CHECKBOX
      |     ^
flags.c:10:27: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   10 |     { MKD_NOLINKS,        "!LINKS" },
      |                           ^~~~~~~~
flags.c:11:27: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   11 |     { MKD_NOIMAGE,        "!IMAGE" },
      |                           ^~~~~~~~
flags.c:12:27: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   12 |     { MKD_NOPANTS,        "!PANTS" },
      |                           ^~~~~~~~
flags.c:13:27: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   13 |     { MKD_NOHTML,         "!HTML" },
      |                           ^~~~~~~
flags.c:14:27: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   14 |     { MKD_STRICT,         "STRICT" },
      |                           ^~~~~~~~
flags.c:15:27: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   15 |     { MKD_TAGTEXT,        "TAGTEXT" },
      |                           ^~~~~~~~~
flags.c:16:27: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   16 |     { MKD_NO_EXT,         "!EXT" },
      |                           ^~~~~~
flags.c:17:27: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   17 |     { MKD_CDATA,          "CDATA" },
      |                           ^~~~~~~
flags.c:18:27: warning: initializing 'char *' with an expression of type 'const char[13]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   18 |     { MKD_NOSUPERSCRIPT,  "!SUPERSCRIPT" },
      |                           ^~~~~~~~~~~~~~
flags.c:19:27: warning: initializing 'char *' with an expression of type 'const char[9]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   19 |     { MKD_NORELAXED,      "!RELAXED" },
      |                           ^~~~~~~~~~
flags.c:20:27: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   20 |     { MKD_NOTABLES,       "!TABLES" },
      |                           ^~~~~~~~~
flags.c:21:27: warning: initializing 'char *' with an expression of type 'const char[15]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   21 |     { MKD_NOSTRIKETHROUGH,"!STRIKETHROUGH" },
      |                           ^~~~~~~~~~~~~~~~
flags.c:22:27: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   22 |     { MKD_TOC,            "TOC" },
      |                           ^~~~~
flags.c:23:27: warning: initializing 'char *' with an expression of type 'const char[13]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   23 |     { MKD_1_COMPAT,       "MKD_1_COMPAT" },
      |                           ^~~~~~~~~~~~~~
flags.c:24:27: warning: initializing 'char *' with an expression of type 'const char[9]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   24 |     { MKD_AUTOLINK,       "AUTOLINK" },
      |                           ^~~~~~~~~~
flags.c:25:27: warning: initializing 'char *' with an expression of type 'const char[9]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   25 |     { MKD_SAFELINK,       "SAFELINK" },
      |                           ^~~~~~~~~~
flags.c:26:27: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   26 |     { MKD_NOHEADER,       "!HEADER" },
      |                           ^~~~~~~~~
flags.c:27:27: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   27 |     { MKD_TABSTOP,        "TABSTOP" },
      |                           ^~~~~~~~~
flags.c:28:27: warning: initializing 'char *' with an expression of type 'const char[10]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   28 |     { MKD_NODIVQUOTE,     "!DIVQUOTE" },
      |                           ^~~~~~~~~~~
flags.c:29:27: warning: initializing 'char *' with an expression of type 'const char[11]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   29 |     { MKD_NOALPHALIST,    "!ALPHALIST" },
      |                           ^~~~~~~~~~~~
flags.c:30:27: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   30 |     { MKD_NODLIST,        "!DLIST" },
      |                           ^~~~~~~~
flags.c:31:27: warning: initializing 'char *' with an expression of type 'const char[9]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   31 |     { MKD_EXTRA_FOOTNOTE, "FOOTNOTE" },
      |                           ^~~~~~~~~~
flags.c:32:27: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   32 |     { MKD_NOSTYLE,        "!STYLE" },
      |                           ^~~~~~~~
flags.c:33:27: warning: initializing 'char *' with an expression of type 'const char[12]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   33 |     { MKD_NODLDISCOUNT,   "!DLDISCOUNT" },
      |                           ^~~~~~~~~~~~~
flags.c:34:27: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   34 |     { MKD_DLEXTRA,        "DLEXTRA" },
      |                           ^~~~~~~~~
flags.c:35:27: warning: initializing 'char *' with an expression of type 'const char[11]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   35 |     { MKD_FENCEDCODE,     "FENCEDCODE" },
      |                           ^~~~~~~~~~~~
flags.c:36:27: warning: initializing 'char *' with an expression of type 'const char[9]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   36 |     { MKD_IDANCHOR,       "IDANCHOR" },
      |                           ^~~~~~~~~~
flags.c:37:27: warning: initializing 'char *' with an expression of type 'const char[11]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   37 |     { MKD_GITHUBTAGS,     "GITHUBTAGS" },
      |                           ^~~~~~~~~~~~
flags.c:38:29: warning: initializing 'char *' with an expression of type 'const char[17]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   38 |     { MKD_URLENCODEDANCHOR, "URLENCODEDANCHOR" },
      |                             ^~~~~~~~~~~~~~~~~~
flags.c:39:27: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   39 |     { MKD_LATEX,          "LATEX" },
      |                           ^~~~~~~
flags.c:40:27: warning: initializing 'char *' with an expression of type 'const char[13]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
   40 |     { MKD_EXPLICITLIST,   "EXPLICITLIST" },
      |                           ^~~~~~~~~~~~~~
flags.c:57:11: warning: using the result of an assignment as a condition without parentheses [-Wparentheses]
   57 |         if ( not = (*name == '!') ) {
      |              ~~~~^~~~~~~~~~~~~~~~
flags.c:57:11: note: place parentheses around the assignment to silence this warning
   57 |         if ( not = (*name == '!') ) {
      |                  ^
      |              (                   )
flags.c:57:11: note: use '==' to turn this assignment into an equality comparison
   57 |         if ( not = (*name == '!') ) {
      |                  ^
      |                  ==
flags.c:54:17: warning: comparison of integers of different signs: 'int' and 'unsigned long' [-Wsign-compare]
   54 |     for (i=0; i < NR(flagnames); i++) {
      |               ~ ^ ~~~~~~~~~~~~~
35 warnings generated.
compiling generate.c
In file included from generate.c:17:
./markdown.h:9:7: warning: 'HAVE_STDINT_H' is not defined, evaluates to 0 [-Wundef]
    9 | #elif HAVE_STDINT_H
      |       ^
./markdown.h:58:5: warning: 'GITHUB_CHECKBOX' is not defined, evaluates to 0 [-Wundef]
   58 | #if GITHUB_CHECKBOX
      |     ^
generate.c:285:14: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  285 |             Qstring("&amp;", f);
      |                     ^~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:287:14: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  287 |             Qstring("&lt;", f);
      |                     ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:289:14: warning: passing 'const char[4]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  289 |             Qstring("%22", f);
      |                     ^~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:293:14: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  293 |             Qstring("  ", f);
      |                     ^~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:295:17: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  295 |             Qprintf(f, "%%%02X", c);
      |                        ^~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:368:28: warning: implicit conversion loses integer precision: 'long' to 'int' [-Wshorten-64-to-32]
  368 |                 S(ref->title) = (e-title)-2;
      |                               ~ ~~~~~~~~~^~
generate.c:515:17: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  515 |     _aprotocol( "https:" ), 
      |                 ^~~~~~~~
generate.c:514:25: note: expanded from macro '_aprotocol'
  514 | #define _aprotocol(x)   { x, (sizeof x)-1 }
      |                           ^
generate.c:516:17: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  516 |     _aprotocol( "http:" ), 
      |                 ^~~~~~~
generate.c:514:25: note: expanded from macro '_aprotocol'
  514 | #define _aprotocol(x)   { x, (sizeof x)-1 }
      |                           ^
generate.c:517:17: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  517 |     _aprotocol( "news:" ),
      |                 ^~~~~~~
generate.c:514:25: note: expanded from macro '_aprotocol'
  514 | #define _aprotocol(x)   { x, (sizeof x)-1 }
      |                           ^
generate.c:518:17: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  518 |     _aprotocol( "ftp:" ), 
      |                 ^~~~~~
generate.c:514:25: note: expanded from macro '_aprotocol'
  514 | #define _aprotocol(x)   { x, (sizeof x)-1 }
      |                           ^
generate.c:530:29: warning: comparison of integers of different signs: 'int' and 'unsigned long' [-Wsign-compare]
  530 |     for (i=0, p=protocol; i < NRPROTOCOLS; i++, p++)
      |                           ~ ^ ~~~~~~~~~~~
generate.c:554:35: warning: initializing 'char *' with an expression of type 'const char[11]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  554 | static linkytype imaget = { 0, 0, "<img src=\"", "\"",
      |                                   ^~~~~~~~~~~~~
generate.c:554:50: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  554 | static linkytype imaget = { 0, 0, "<img src=\"", "\"",
      |                                                  ^~~~
generate.c:555:12: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  555 |                              1, " alt=\"", "\" />", MKD_NOIMAGE|MKD_TAGTEXT, IS_URL };
      |                                 ^~~~~~~~~
generate.c:555:23: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  555 |                              1, " alt=\"", "\" />", MKD_NOIMAGE|MKD_TAGTEXT, IS_URL };
      |                                            ^~~~~~~
generate.c:556:35: warning: initializing 'char *' with an expression of type 'const char[10]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  556 | static linkytype linkt  = { 0, 0, "<a href=\"", "\"",
      |                                   ^~~~~~~~~~~~
generate.c:556:49: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  556 | static linkytype linkt  = { 0, 0, "<a href=\"", "\"",
      |                                                 ^~~~
generate.c:557:33: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  557 |                              0, ">", "</a>", MKD_NOLINKS, IS_URL };
      |                                 ^~~
generate.c:557:38: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  557 |                              0, ">", "</a>", MKD_NOLINKS, IS_URL };
      |                                      ^~~~~~
generate.c:567:7: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  567 |     { "id:", 3, "<span id=\"", "\"", 0, ">", "</span>", 0, 0 },
      |       ^~~~~
generate.c:567:17: warning: initializing 'char *' with an expression of type 'const char[11]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  567 |     { "id:", 3, "<span id=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                 ^~~~~~~~~~~~~
generate.c:567:32: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  567 |     { "id:", 3, "<span id=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                ^~~~
generate.c:567:41: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  567 |     { "id:", 3, "<span id=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                         ^~~
generate.c:567:46: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  567 |     { "id:", 3, "<span id=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                              ^~~~~~~~~
generate.c:568:7: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  568 |     { "raw:", 4, 0, 0, 0, 0, 0, MKD_NOHTML, 0 },
      |       ^~~~~~
generate.c:569:7: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  569 |     { "lang:", 5, "<span lang=\"", "\"", 0, ">", "</span>", 0, 0 },
      |       ^~~~~~~
generate.c:569:19: warning: initializing 'char *' with an expression of type 'const char[13]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  569 |     { "lang:", 5, "<span lang=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                   ^~~~~~~~~~~~~~~
generate.c:569:36: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  569 |     { "lang:", 5, "<span lang=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                    ^~~~
generate.c:569:45: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  569 |     { "lang:", 5, "<span lang=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                             ^~~
generate.c:569:50: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  569 |     { "lang:", 5, "<span lang=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                                  ^~~~~~~~~
generate.c:570:7: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  570 |     { "abbr:", 5, "<abbr title=\"", "\"", 0, ">", "</abbr>", 0, 0 },
      |       ^~~~~~~
generate.c:570:19: warning: initializing 'char *' with an expression of type 'const char[14]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  570 |     { "abbr:", 5, "<abbr title=\"", "\"", 0, ">", "</abbr>", 0, 0 },
      |                   ^~~~~~~~~~~~~~~~
generate.c:570:37: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  570 |     { "abbr:", 5, "<abbr title=\"", "\"", 0, ">", "</abbr>", 0, 0 },
      |                                     ^~~~
generate.c:570:46: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  570 |     { "abbr:", 5, "<abbr title=\"", "\"", 0, ">", "</abbr>", 0, 0 },
      |                                              ^~~
generate.c:570:51: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  570 |     { "abbr:", 5, "<abbr title=\"", "\"", 0, ">", "</abbr>", 0, 0 },
      |                                                   ^~~~~~~~~
generate.c:571:7: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  571 |     { "class:", 6, "<span class=\"", "\"", 0, ">", "</span>", 0, 0 },
      |       ^~~~~~~~
generate.c:571:20: warning: initializing 'char *' with an expression of type 'const char[14]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  571 |     { "class:", 6, "<span class=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                    ^~~~~~~~~~~~~~~~
generate.c:571:38: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  571 |     { "class:", 6, "<span class=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                      ^~~~
generate.c:571:47: warning: initializing 'char *' with an expression of type 'const char[2]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  571 |     { "class:", 6, "<span class=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                               ^~~
generate.c:571:52: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  571 |     { "class:", 6, "<span class=\"", "\"", 0, ">", "</span>", 0, 0 },
      |                                                    ^~~~~~~~~
generate.c:584:30: warning: comparison of integers of different signs: 'int' and 'unsigned long' [-Wsign-compare]
  584 |     for ( i=0, r=specials; i < NR(specials); i++,r++ ) {
      |                            ~ ^ ~~~~~~~~~~~~
generate.c:606:19: warning: implicit conversion loses integer precision: 'unsigned long' to 'int' [-Wshorten-64-to-32]
  606 |             puturl(edit, strlen(edit), f, 0);
      |             ~~~~~~       ^~~~~~~~~~~~
generate.c:632:12: warning: returning 'const char *' from a function with result type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  632 |     return p->ref_prefix ? p->ref_prefix : "fn";
      |            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:629:1: warning: a function definition without a prototype is deprecated in all versions of C and is not supported in C23 [-Wdeprecated-non-prototype]
  629 | p_or_nothing(p)
      | ^
generate.c:649:13: warning: passing 'const char[64]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  649 |         Qprintf(f, "<sup id=\"%sref:%d\"><a href=\"#%s:%d\" rel=\"footnote\">%d</a></sup>",
      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:693:19: warning: using the result of an assignment as a condition without parentheses [-Wparentheses]
  693 |     else if ( tag = pseudo(ref->link) ) {
      |               ~~~~^~~~~~~~~~~~~~~~~~~
generate.c:693:19: note: place parentheses around the assignment to silence this warning
  693 |     else if ( tag = pseudo(ref->link) ) {
      |                   ^
      |               (                      )
generate.c:693:19: note: use '==' to turn this assignment into an equality comparison
  693 |     else if ( tag = pseudo(ref->link) ) {
      |                   ^
      |                   ==
generate.c:714:35: warning: passing 'const char[13]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  714 |             if ( ref->height ) Qprintf(f," height=\"%d\"", ref->height);
      |                                          ^~~~~~~~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:715:35: warning: passing 'const char[12]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  715 |             if ( ref->width ) Qprintf(f, " width=\"%d\"", ref->width);
      |                                          ^~~~~~~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:719:14: warning: passing 'const char[9]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  719 |             Qstring(" title=\"", f);
      |                     ^~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:785:12: warning: using the result of an assignment as a condition without parentheses [-Wparentheses]
  785 |                 if ( ref = bsearch(&key, T(f->footnotes->note),
      |                      ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  786 |                                          S(f->footnotes->note),
      |                                          ~~~~~~~~~~~~~~~~~~~~~~
  787 |                                          sizeof key, (stfu)__mkd_footsort) ) {
      |                                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:785:12: note: place parentheses around the assignment to silence this warning
  785 |                 if ( ref = bsearch(&key, T(f->footnotes->note),
      |                          ^
      |                      (
  786 |                                          S(f->footnotes->note),
  787 |                                          sizeof key, (stfu)__mkd_footsort) ) {
      |                                                                           )
generate.c:785:12: note: use '==' to turn this assignment into an equality comparison
  785 |                 if ( ref = bsearch(&key, T(f->footnotes->note),
      |                          ^
      |                          ==
generate.c:814:25: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  814 |     case '&':   Qstring("&amp;", f); break;
      |                         ^~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:815:25: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  815 |     case '>':   Qstring("&gt;", f); break;
      |                         ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:816:25: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  816 |     case '<':   Qstring("&lt;", f); break;
      |                         ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:829:5: warning: 'DEBIAN_GLITCH' is not defined, evaluates to 0 [-Wundef]
  829 | #if DEBIAN_GLITCH
      |     ^
generate.c:832:10: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  832 |         Qstring("&#", f);
      |                 ^~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:833:13: warning: passing 'const char *' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  833 |         Qprintf(f, COINTOSS() ? "x%02x;" : "%02d;", *((unsigned char*)(s++)) );
      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
./config.h:14:20: note: expanded from macro 'COINTOSS'
   14 | #define COINTOSS() (random()&1)
      |                    ^
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:897:14: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  897 |             Qstring("  ", f);
      |                     ^~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:909:13: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  909 |     Qstring("<del>", f);
      |             ^~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:911:13: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  911 |     Qstring("</del>", f);
      |             ^~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:961:13: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  961 |     Qstring("<code>", f);
      |             ^~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:963:13: warning: passing 'const char[8]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
  963 |     Qstring("</code>", f);
      |             ^~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1040:10: warning: passing 'const char[10]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1040 |         Qstring("<a href=\"", f);
      |                 ^~~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1043:13: warning: passing 'const char[8]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1043 |             mangle("mailto:", 7, f);
      |                    ^~~~~~~~~
generate.c:826:14: note: passing argument to parameter 's' here
  826 | mangle(char *s, int len, MMIOT *f)
      |              ^
generate.c:1046:10: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1046 |         Qstring("\">", f);
      |                 ^~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1048:10: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1048 |         Qstring("</a>", f);
      |                 ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1055:10: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1055 |         Qstring("</a>", f);
      |                 ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1122:15: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1122 |                     Qstring("&amp;", f);
      |                             ^~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1176:17: warning: passing 'const char[9]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1176 |             Qprintf(f, "&r%cquo;", typeofquote);
      |                        ^~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1182:13: warning: passing 'const char[9]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1182 |         Qprintf(f, "&l%cquo;", typeofquote);
      |                    ^~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1202:18: warning: implicit conversion loses integer precision: 'unsigned long' to 'int' [-Wshorten-64-to-32]
 1202 |     if ( !(len = strlen(s)) )
      |                ~ ^~~~~~~~~
generate.c:1224:13: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1224 |     { '\'', "'s|",      "rsquo",  0 },
      |             ^~~~~
generate.c:1224:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1224 |     { '\'', "'s|",      "rsquo",  0 },
      |                         ^~~~~~~
generate.c:1225:13: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1225 |     { '\'', "'t|",      "rsquo",  0 },
      |             ^~~~~
generate.c:1225:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1225 |     { '\'', "'t|",      "rsquo",  0 },
      |                         ^~~~~~~
generate.c:1226:13: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1226 |     { '\'', "'re|",     "rsquo",  0 },
      |             ^~~~~~
generate.c:1226:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1226 |     { '\'', "'re|",     "rsquo",  0 },
      |                         ^~~~~~~
generate.c:1227:13: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1227 |     { '\'', "'ll|",     "rsquo",  0 },
      |             ^~~~~~
generate.c:1227:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1227 |     { '\'', "'ll|",     "rsquo",  0 },
      |                         ^~~~~~~
generate.c:1228:13: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1228 |     { '\'', "'ve|",     "rsquo",  0 },
      |             ^~~~~~
generate.c:1228:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1228 |     { '\'', "'ve|",     "rsquo",  0 },
      |                         ^~~~~~~
generate.c:1229:13: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1229 |     { '\'', "'m|",      "rsquo",  0 },
      |             ^~~~~
generate.c:1229:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1229 |     { '\'', "'m|",      "rsquo",  0 },
      |                         ^~~~~~~
generate.c:1230:13: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1230 |     { '\'', "'d|",      "rsquo",  0 },
      |             ^~~~~
generate.c:1230:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1230 |     { '\'', "'d|",      "rsquo",  0 },
      |                         ^~~~~~~
generate.c:1231:13: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1231 |     { '-',  "---",      "mdash",  2 },
      |             ^~~~~
generate.c:1231:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1231 |     { '-',  "---",      "mdash",  2 },
      |                         ^~~~~~~
generate.c:1232:13: warning: initializing 'char *' with an expression of type 'const char[3]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1232 |     { '-',  "--",       "ndash",  1 },
      |             ^~~~
generate.c:1232:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1232 |     { '-',  "--",       "ndash",  1 },
      |                         ^~~~~~~
generate.c:1233:13: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1233 |     { '.',  "...",      "hellip", 2 },
      |             ^~~~~
generate.c:1233:25: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1233 |     { '.',  "...",      "hellip", 2 },
      |                         ^~~~~~~~
generate.c:1234:13: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1234 |     { '.',  ". . .",    "hellip", 4 },
      |             ^~~~~~~
generate.c:1234:25: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1234 |     { '.',  ". . .",    "hellip", 4 },
      |                         ^~~~~~~~
generate.c:1235:13: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1235 |     { '(',  "(c)",      "copy",   2 },
      |             ^~~~~
generate.c:1235:25: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1235 |     { '(',  "(c)",      "copy",   2 },
      |                         ^~~~~~
generate.c:1236:13: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1236 |     { '(',  "(r)",      "reg",    2 },
      |             ^~~~~
generate.c:1236:25: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1236 |     { '(',  "(r)",      "reg",    2 },
      |                         ^~~~~
generate.c:1237:13: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1237 |     { '(',  "(tm)",     "trade",  3 },
      |             ^~~~~~
generate.c:1237:25: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1237 |     { '(',  "(tm)",     "trade",  3 },
      |                         ^~~~~~~
generate.c:1238:13: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1238 |     { '3',  "|3/4|",    "frac34", 2 },
      |             ^~~~~~~
generate.c:1238:25: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1238 |     { '3',  "|3/4|",    "frac34", 2 },
      |                         ^~~~~~~~
generate.c:1239:13: warning: initializing 'char *' with an expression of type 'const char[9]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1239 |     { '3',  "|3/4ths|", "frac34", 2 },
      |             ^~~~~~~~~~
generate.c:1239:25: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1239 |     { '3',  "|3/4ths|", "frac34", 2 },
      |                         ^~~~~~~~
generate.c:1240:13: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1240 |     { '1',  "|1/2|",    "frac12", 2 },
      |             ^~~~~~~
generate.c:1240:25: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1240 |     { '1',  "|1/2|",    "frac12", 2 },
      |                         ^~~~~~~~
generate.c:1241:13: warning: initializing 'char *' with an expression of type 'const char[6]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1241 |     { '1',  "|1/4|",    "frac14", 2 },
      |             ^~~~~~~
generate.c:1241:25: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1241 |     { '1',  "|1/4|",    "frac14", 2 },
      |                         ^~~~~~~~
generate.c:1242:13: warning: initializing 'char *' with an expression of type 'const char[8]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1242 |     { '1',  "|1/4th|",  "frac14", 2 },
      |             ^~~~~~~~~
generate.c:1242:25: warning: initializing 'char *' with an expression of type 'const char[7]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1242 |     { '1',  "|1/4th|",  "frac14", 2 },
      |                         ^~~~~~~~
generate.c:1243:13: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1243 |     { '&',  "&#0;",      0,       3 },
      |             ^~~~~~
generate.c:1263:14: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1263 |                 Qprintf(f, "&%s;", smarties[i].entity);
      |                            ^~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1285:16: warning: passing 'const char[8]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1285 |                             Qstring("&ldquo;", f);
      |                                     ^~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1287:16: warning: passing 'const char[8]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1287 |                             Qstring("&rdquo;", f);
      |                                     ^~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1260:18: warning: comparison of integers of different signs: 'int' and 'unsigned long' [-Wsign-compare]
 1260 |     for ( i=0; i < NRSMART; i++)
      |                ~ ^ ~~~~~~~
generate.c:1374:15: warning: passing 'const char *' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1374 |                     Qstring(tag_text(f) ? "  " : "<br/>", f);
      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:1349:21: note: expanded from macro 'tag_text'
 1349 | #define tag_text(f)     is_flag_set(f->flags, MKD_TAGTEXT)
      |                         ^
./markdown.h:17:34: note: expanded from macro 'is_flag_set'
   17 | #define is_flag_set(flags, item)        ((flags) & (item))
      |                                         ^
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1378:12: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1378 |                         Qstring("&gt;", f);
      |                                 ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1384:12: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1384 |                         Qstring("&quot;", f);
      |                                 ^~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1392:16: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1392 |                             Qstring("![", f);
      |                                     ^~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1451:12: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1451 |                         Qstring("<sup>",f);
      |                                 ^~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1452:35: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1452 |                         ___mkd_reparse(sup, len, 0, f, "()");
      |                                                        ^~~~
generate.c:212:71: note: passing argument to parameter 'esc' here
  212 | ___mkd_reparse(char *bfr, int size, mkd_flag_t flags, MMIOT *f, char *esc)
      |                                                                       ^
generate.c:1453:12: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1453 |                         Qstring("</sup>", f);
      |                                 ^~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1499:27: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1499 |                     case '&':   Qstring("&amp;", f);
      |                                         ^~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1503:17: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1503 |                                     Qstring("&lt;", f);
      |                                             ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1554:16: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1554 |                             Qstring("&lt;", f);
      |                                     ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1563:12: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1563 |                         Qstring("&amp;", f);
      |                                 ^~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1592:13: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1592 |         Qprintf(f, "<h%d", pp->hnumber);
      |                    ^~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1594:14: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1594 |             Qstring(" id=\"", f);
      |                     ^~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1601:14: warning: passing 'const char[10]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1601 |             Qstring("<a name=\"", f);
      |                     ^~~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1603:14: warning: passing 'const char[8]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1603 |             Qstring("\"></a>\n", f);
      |                     ^~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1605:13: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1605 |         Qprintf(f, "<h%d>", pp->hnumber);
      |                    ^~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1609:16: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1609 |     Qprintf(f, "</h%d>", pp->hnumber);
      |                ^~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1615:31: warning: initializing 'char *' with an expression of type 'const char[1]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1615 | static char* alignments[] = { "", " style=\"text-align:center;\"",
      |                               ^~
generate.c:1615:35: warning: initializing 'char *' with an expression of type 'const char[28]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1615 | static char* alignments[] = { "", " style=\"text-align:center;\"",
      |                                   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:1616:7: warning: initializing 'char *' with an expression of type 'const char[26]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1616 |                                   " style=\"text-align:left;\"",
      |                                   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:1617:7: warning: initializing 'char *' with an expression of type 'const char[27]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1617 |                                   " style=\"text-align:right;\"" };
      |                                   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:1633:13: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1633 |     Qstring("<tr>\n", f);
      |             ^~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1645:13: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1645 |         Qprintf(f, "<%s%s>",
      |                    ^~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1648:52: warning: passing 'const char[2]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1648 |         ___mkd_reparse(T(p->text)+first, idx-first, 0, f, "|");
      |                                                           ^~~
generate.c:212:71: note: passing argument to parameter 'esc' here
  212 | ___mkd_reparse(char *bfr, int size, mkd_flag_t flags, MMIOT *f, char *esc)
      |                                                                       ^
generate.c:1649:13: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1649 |         Qprintf(f, "</%s>\n", block);
      |                    ^~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1655:17: warning: passing 'const char[11]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1655 |             Qprintf(f, "<%s></%s>\n", block, block);
      |                        ^~~~~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1658:13: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1658 |     Qstring("</tr>\n", f);
      |             ^~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1710:13: warning: passing 'const char[9]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1710 |     Qstring("<table>\n", f);
      |             ^~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1711:13: warning: passing 'const char[9]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1711 |     Qstring("<thead>\n", f);
      |             ^~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1712:24: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1712 |     hcols = splat(hdr, "th", align, 0, f);
      |                        ^~~~
generate.c:1622:22: note: passing argument to parameter 'block' here
 1622 | splat(Line *p, char *block, Istring align, int force, MMIOT *f)
      |                      ^
generate.c:1713:13: warning: passing 'const char[10]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1713 |     Qstring("</thead>\n", f);
      |             ^~~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1721:13: warning: passing 'const char[9]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1721 |     Qstring("<tbody>\n", f);
      |             ^~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1723:14: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1723 |         splat(body, "td", align, 1, f);
      |                     ^~~~
generate.c:1622:22: note: passing argument to parameter 'block' here
 1622 | splat(Line *p, char *block, Istring align, int force, MMIOT *f)
      |                      ^
generate.c:1724:13: warning: passing 'const char[10]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1724 |     Qstring("</tbody>\n", f);
      |             ^~~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1725:13: warning: passing 'const char[10]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1725 |     Qstring("</table>\n", f);
      |             ^~~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1735:30: warning: initializing 'char *' with an expression of type 'const char[1]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1735 |     static char *Begin[] = { "", "<p>", "<p style=\"text-align:center;\">"  };
      |                              ^~
generate.c:1735:34: warning: initializing 'char *' with an expression of type 'const char[4]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1735 |     static char *Begin[] = { "", "<p>", "<p style=\"text-align:center;\">"  };
      |                                  ^~~~~
generate.c:1735:41: warning: initializing 'char *' with an expression of type 'const char[31]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1735 |     static char *Begin[] = { "", "<p>", "<p style=\"text-align:center;\">"  };
      |                                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:1736:30: warning: initializing 'char *' with an expression of type 'const char[1]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1736 |     static char *End[]   = { "", "</p>","</p>" };
      |                              ^~
generate.c:1736:34: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1736 |     static char *End[]   = { "", "</p>","</p>" };
      |                                  ^~~~~~
generate.c:1736:41: warning: initializing 'char *' with an expression of type 'const char[5]' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1736 |     static char *End[]   = { "", "</p>","</p>" };
      |                                         ^~~~~~
generate.c:1806:13: warning: passing 'const char[11]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1806 |     Qstring("<pre><code", f);
      |             ^~~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1808:15: warning: passing 'const char[9]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1808 |       Qstring(" class=\"", f);
      |               ^~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1810:15: warning: passing 'const char[2]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1810 |       Qstring("\"", f);
      |               ^~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1812:13: warning: passing 'const char[2]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1812 |     Qstring(">", f);
      |             ^~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1824:13: warning: passing 'const char[14]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1824 |     Qstring("</code></pre>", f);
      |             ^~~~~~~~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1796:18: warning: implicit conversion loses integer precision: 'unsigned long' to 'int' [-Wshorten-64-to-32]
 1796 |             Qwrite(fmt, strlen(fmt), f);
      |             ~~~~~~      ^~~~~~~~~~~
generate.c:1853:10: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1853 |         Qstring("\n\n", f);
      |                 ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1895:13: warning: passing 'const char *' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1895 |         Qprintf(f, arguments ? "<%s %s>" : "<%s>", block, arguments);
      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1900:14: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1900 |          Qprintf(f, "</%s>", block);
      |                     ^~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1911:10: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1911 |         Qstring("<dl>\n", f);
      |                 ^~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1915:11: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1915 |                 Qstring("<dt>", f);
      |                         ^~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1917:11: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1917 |                 Qstring("</dt>\n", f);
      |                         ^~~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1920:23: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1920 |             htmlify(p->down, "dd", p->ident, f);
      |                              ^~~~
generate.c:1891:29: note: passing argument to parameter 'block' here
 1891 | htmlify(Paragraph *p, char *block, char *arguments, MMIOT *f)
      |                             ^
generate.c:1924:10: warning: passing 'const char[6]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1924 |         Qstring("</dl>", f);
      |                 ^~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:1933:13: warning: passing 'const char[5]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1933 |         Qprintf(f, "<%cl", (typ==UL)?'u':'o');
      |                    ^~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1935:17: warning: passing 'const char[10]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1935 |             Qprintf(f, " type=\"a\"");
      |                        ^~~~~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1936:13: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1936 |         Qprintf(f, ">\n");
      |                    ^~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1942:23: warning: passing 'const char[3]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1942 |             htmlify(p->down, "li", p->ident, f);
      |                              ^~~~
generate.c:1891:29: note: passing argument to parameter 'block' here
 1891 | htmlify(Paragraph *p, char *block, char *arguments, MMIOT *f)
      |                             ^
generate.c:1947:13: warning: passing 'const char[8]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1947 |         Qprintf(f, "</%cl>\n", (typ==UL)?'u':'o');
      |                    ^~~~~~~~~~
generate.c:171:25: note: passing argument to parameter 'fmt' here
  171 | Qprintf(MMIOT *f, char *fmt, ...)
      |                         ^
generate.c:1973:19: warning: passing 'const char *' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1973 |         htmlify(p->down, p->ident ? "div" : "blockquote", p->ident, f);
      |                          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
generate.c:1891:29: note: passing argument to parameter 'block' here
 1891 | htmlify(Paragraph *p, char *block, char *arguments, MMIOT *f)
      |                             ^
generate.c:1987:10: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 1987 |         Qstring("<hr />", f);
      |                 ^~~~~~~~
generate.c:151:15: note: passing argument to parameter 's' here
  151 | Qstring(char *s, MMIOT *f)
      |               ^
generate.c:2021:23: warning: passing 'const char[37]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 2021 |     Csprintf(&m->out, "\n<div class=\"footnotes\">\n<hr/>\n<ol>\n");
      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
./cstring.h:73:38: note: passing argument to parameter here
   73 | extern int Csprintf(Cstring *, char *, ...);
      |                                      ^
generate.c:2027:21: warning: passing 'const char[17]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 2027 |                 Csprintf(&m->out, "<li id=\"%s:%d\">\n",
      |                                   ^~~~~~~~~~~~~~~~~~~~~
./cstring.h:73:38: note: passing argument to parameter here
   73 | extern int Csprintf(Cstring *, char *, ...);
      |                                      ^
generate.c:2030:21: warning: passing 'const char[47]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 2030 |                 Csprintf(&m->out, "<a href=\"#%sref:%d\" rev=\"footnote\">&#8617;</a>",
      |                                   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
./cstring.h:73:38: note: passing argument to parameter here
   73 | extern int Csprintf(Cstring *, char *, ...);
      |                                      ^
generate.c:2032:21: warning: passing 'const char[7]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 2032 |                 Csprintf(&m->out, "</li>\n");
      |                                   ^~~~~~~~~
./cstring.h:73:38: note: passing argument to parameter here
   73 | extern int Csprintf(Cstring *, char *, ...);
      |                                      ^
generate.c:2036:23: warning: passing 'const char[14]' to parameter of type 'char *' discards qualifiers [-Wincompatible-pointer-types-discards-qualifiers]
 2036 |     Csprintf(&m->out, "</ol>\n</div>\n");
      |                       ^~~~~~~~~~~~~~~~~
./cstring.h:73:38: note: passing argument to parameter here
   73 | extern int Csprintf(Cstring *, char *, ...);
      |                                      ^
182 warnings generated.
compiling gethopt.c
gethopt.c:13:1: warning: a function definition without a prototype is deprecated in all versions of C and is not supported in C23 [-Wdeprecated-non-prototype]
   13 | hoptset(ctx, argc, argv)
      | ^
gethopt.c:26:1: warning: a function definition without a prototype is deprecated in all versions of C and is not supported in C23 [-Wdeprecated-non-prototype]
   26 | hoptarg(ctx)
      | ^
gethopt.c:33:1: warning: a function definition without a prototype is deprecated in all versions of C and is not supported in C23 [-Wdeprecated-non-prototype]
   33 | hoptind(ctx)
      | ^
gethopt.c:40:1: warning: a function definition without a prototype is deprecated in all versions of C and is not supported in C23 [-Wdeprecated-non-prototype]
   40 | hoptopt(ctx)
      | ^
gethopt.c:48:13: error: parameter 'val' was not declared, defaults to 'int'; ISO C99 and later do not support implicit int [-Wimplicit-int]
   48 | hopterr(ctx,val)
      |             ^
   49 | struct h_context *ctx;
   50 | {
gethopt.c:48:1: warning: a function definition without a prototype is deprecated in all versions of C and is not supported in C23 [-Wdeprecated-non-prototype]
   48 | hopterr(ctx,val)
      | ^
gethopt.c:59:1: warning: a function definition without a prototype is deprecated in all versions of C and is not supported in C23 [-Wdeprecated-non-prototype]
   59 | gethopt(ctx, opts, nropts)
      | ^
gethopt.c:79:18: warning: implicit truncation from 'int' to a one-bit wide bit-field changes value from 1 to -1 [-Wsingle-bit-bitfield-constant-conversion]
   79 |             ctx->optend = 1;
      |                         ^ ~
gethopt.c:87:18: warning: implicit truncation from 'int' to a one-bit wide bit-field changes value from 1 to -1 [-Wsingle-bit-bitfield-constant-conversion]
   87 |             ctx->optend = 1;
      |                         ^ ~
gethopt.c:236:5: warning: 'DEBUG' is not defined, evaluates to 0 [-Wundef]
  236 | #if DEBUG
      |     ^
9 warnings and 1 error generated.
make: *** [gethopt.o] Error 1

make failed, exit code 2

Gem files will remain installed in /opt/anaconda3/envs/jekyll/share/rubygems/gems/rdiscount-2.2.7 for inspection.
Results logged to /opt/anaconda3/envs/jekyll/share/rubygems/extensions/arm64-darwin-20/3.4.0/rdiscount-2.2.7/gem_make.out
