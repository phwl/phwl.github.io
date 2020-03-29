---
author: phwl
comments: true
date: 2020-03-29 Sun 29 Mar 2020 17:50:13 AEDT
title: Updating jekyll on macOS
classes: wide
categories:
- software
tags:
- ubuntu
header:
  teaser: https://jekyllrb.com/img/logo-2x.png
---

When doing a ```bundle update``` I got an error telling me that 
installing ffi failed, and the following had to be fixed:
```
phwl@x86_64-apple-darwin13 phwl.github.io % gem install ffi -v '1.12.2' --source 'https://rubygems.org/'
Building native extensions. This could take a while...
ERROR:  Error installing ffi:
	ERROR: Failed to build gem native extension.

    current directory: /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c
/Users/phwl/.rbenv/versions/2.6.3/bin/ruby -I /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/site_ruby/2.6.0 -r ./siteconf20200329-12274-1mw6aa1.rb extconf.rb
checking for ffi.h... no
checking for ffi.h in /usr/local/include,/usr/include/ffi... no
checking for shlwapi.h... no
checking for rb_thread_call_without_gvl()... yes
checking for ruby_native_thread_p()... yes
checking for ruby_thread_has_gvl_p()... yes
creating extconf.h
creating Makefile

current directory: /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c
make "DESTDIR=" clean

current directory: /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c
make "DESTDIR="
Configuring libffi
clang-4.0: error: unsupported option '-print-multi-os-directory'
clang-4.0: error: no input files
cd "/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18" && make
make[1]: Entering directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18'
make  all-recursive
make[2]: Entering directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18'
Making all in include
make[3]: Entering directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18/include'
make[3]: Nothing to be done for 'all'.
make[3]: Leaving directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18/include'
Making all in testsuite
make[3]: Entering directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18/testsuite'
make[3]: Nothing to be done for 'all'.
make[3]: Leaving directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18/testsuite'
Making all in man
make[3]: Entering directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18/man'
make[3]: Nothing to be done for 'all'.
make[3]: Leaving directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18/man'
make[3]: Entering directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18'
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT    -Wall -fexceptions -c -o src/prep_cif.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/prep_cif.c
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -Wall -fexceptions -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/prep_cif.c  -fno-common -DPIC -o src/.libs/prep_cif.o
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT    -Wall -fexceptions -c -o src/types.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/types.c
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -Wall -fexceptions -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/types.c  -fno-common -DPIC -o src/.libs/types.o
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT    -Wall -fexceptions -c -o src/raw_api.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/raw_api.c
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -Wall -fexceptions -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/raw_api.c  -fno-common -DPIC -o src/.libs/raw_api.o
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT    -Wall -fexceptions -c -o src/java_raw_api.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/java_raw_api.c
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -Wall -fexceptions -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/java_raw_api.c  -fno-common -DPIC -o src/.libs/java_raw_api.o
/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/java_raw_api.c:328:46: warning: 'ffi_java_raw_size' is deprecated [-Wdeprecated-declarations]
  ffi_java_raw *raw = (ffi_java_raw*)alloca (ffi_java_raw_size (cif));
                                             ^
/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/java_raw_api.c:45:1: note: 'ffi_java_raw_size' has been explicitly marked deprecated here
ffi_java_raw_size (ffi_cif *cif)
^
/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/java_raw_api.c:331:3: warning: 'ffi_java_ptrarray_to_raw' is deprecated [-Wdeprecated-declarations]
  ffi_java_ptrarray_to_raw (cif, avalue, raw);
  ^
/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/java_raw_api.c:157:1: note: 'ffi_java_ptrarray_to_raw' has been explicitly marked deprecated here
ffi_java_ptrarray_to_raw (ffi_cif *cif, void **args, ffi_java_raw *raw)
^
2 warnings generated.
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT    -Wall -fexceptions -c -o src/closures.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/closures.c
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -Wall -fexceptions -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/closures.c  -fno-common -DPIC -o src/.libs/closures.o
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT    -Wall -fexceptions -c -o src/x86/ffi64.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/x86/ffi64.c
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -Wall -fexceptions -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/x86/ffi64.c  -fno-common -DPIC -o src/x86/.libs/ffi64.o
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT   -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src  -c -o src/x86/unix64.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/x86/unix64.S
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/x86/unix64.S  -fno-common -DPIC -o src/x86/.libs/unix64.o
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT    -Wall -fexceptions -c -o src/x86/ffiw64.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/x86/ffiw64.c
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -Wall -fexceptions -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/x86/ffiw64.c  -fno-common -DPIC -o src/x86/.libs/ffiw64.o
/bin/sh ./libtool  --tag=CC   --mode=compile clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi  -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include  -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT   -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src  -c -o src/x86/win64.lo /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/x86/win64.S
libtool: compile:  clang -DHAVE_CONFIG_H -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -DRUBY_EXTCONF_H=\"extconf.h\" -I/Users/phwl/.rbenv/versions/2.6.3/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT -I. -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/include -Iinclude -I/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src -c /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi/src/x86/win64.S  -fno-common -DPIC -o src/x86/.libs/win64.o
/bin/sh ./libtool  --tag=CC   --mode=link clang  -Wall -fexceptions  -Wl,-pie -Wl,-headerpad_max_install_names -Wl,-dead_strip_dylibs -o libffi_convenience.la  src/prep_cif.lo src/types.lo src/raw_api.lo src/java_raw_api.lo src/closures.lo   src/x86/ffi64.lo src/x86/unix64.lo src/x86/ffiw64.lo src/x86/win64.lo 
libtool: link: libtool -static cru .libs/libffi_convenience.a src/.libs/prep_cif.o src/.libs/types.o src/.libs/raw_api.o src/.libs/java_raw_api.o src/.libs/closures.o src/x86/.libs/ffi64.o src/x86/.libs/unix64.o src/x86/.libs/ffiw64.o src/x86/.libs/win64.o 
error: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool: no output file specified (specify with -o output)
Usage: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool -static [-] file [...] [-filelist listfile[,dirname]] [-arch_only arch] [-sacLT] [-no_warning_for_no_symbols]
Usage: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/libtool -dynamic [-] file [...] [-filelist listfile[,dirname]] [-arch_only arch] [-o output] [-install_name name] [-compatibility_version #] [-current_version #] [-seg1addr 0x#] [-segs_read_only_addr 0x#] [-segs_read_write_addr 0x#] [-seg_addr_table <filename>] [-seg_addr_table_filename <file_system_path>] [-all_load] [-noall_load]
make[3]: *** [Makefile:1072: libffi_convenience.la] Error 1
make[3]: Leaving directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18'
make[2]: *** [Makefile:1348: all-recursive] Error 1
make[2]: Leaving directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18'
make[1]: *** [Makefile:623: all] Error 2
make[1]: Leaving directory '/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18'
make: *** [libffi.darwin.mk:33: "/Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2/ext/ffi_c/libffi-x86_64-darwin18"/.libs/libffi_convenience.a] Error 2

make failed, exit code 2

Gem files will remain installed in /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/gems/ffi-1.12.2 for inspection.
Results logged to /Users/phwl/.rbenv/versions/2.6.3/lib/ruby/gems/2.6.0/extensions/x86_64-darwin-18/2.6.0-static/ffi-1.12.2/gem_make.out

```

This was because it was not using the homebrew libffi and
fixed with:
```
brew reinstall libffi
export LDFLAGS="-L/usr/local/opt/libffi/lib"
export PKG_CONFIG_PATH="/usr/local/opt/libffi/lib/pkgconfig"
gem install jekyll
bundle update
```
