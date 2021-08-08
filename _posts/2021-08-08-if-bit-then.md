---
author: phwl
comments: true
date: 2021-08-08 7:49:55 AEDT
title: If-bit-then
categories:
- cruxml
tags:
- embedded
header:
  teaser: /assets/images/2021/08/cml_logo_new_sm.png
---
This optimisation came up in a consulting job for [CruxML](http://www.cruxml.com).
A common pattern in embedded programming or high-level synthesis
is if-bit-then, i.e.  test a bit and modify a variable depending on the result.

Here is an example in C:
```C
unsigned a = 0x23, x = 0x86;

...
    if (a & 1)
	    x = x op q;
```
(where op is some operation like ```+``` but could be more complicated).
This can be implemented in a number of ways. A common one is:
```C
    x = (a & 1) ? x op q : x;
```

An alternative, less well known  way to do this is:
```C
    x = x op (-(a & 1) & q)
```

This relies on the fact that ```a & 1``` only has two possible outputs,
```1``` or ```0```. Moreover, ```-1 = 0xffffffff``` and ```-0 == 0``` 
so ```-(a & 1) & q``` either evaluates to ```q``` or ```0```.

This identity may be advantageous depending on the situation, particularly
for optimising inner loops of time-critical applications. For our specific
problem, it reduced resource utilisation significantly for
an OpenCL-based FPGA design.
