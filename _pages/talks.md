---
comments: false
date: 2017-10-21 09:16:08+00:00
## layout: page
## link: http://phwl.org/talks/
permalink: talks
slug: talks
title: Talks
classes: wide
wordpress_id: 3312
---

## 7th November 2019, Lecture
[Computer Engineering Lab](/assets/talks/cel-tasforum19.pdf), Defence Innovation Network Industry Forum, University of Technology, Sydney

The Computer Engineering Lab at the University of Sydney focusses on how to use FPGAs to solve demanding problems. We strive to develop novel architectures, applications and design techniques for problems combining signal processing and machine learning.

## 23rd Oct 2019, Lunchtime Tutorial
[Python Map-Reduce tutorial](/assets/talks/mr-tutorial19.pdf), Computer Engineering Lab 

This Python tutorial introduces the map-reduce programming model.
Map-reduce can be used to simplify code as well as to parallelise
computer programs. It is commonly used not only in Python programs, but
also in reconfigurable computing and large-scale computing.

## 30th Sep 2019, Lecture
[Multipliers for FPGA Machine Learning Applications](/assets/talks/ml-multipliers19.pdf), Fudan University

FPGA implementations of machine learning algorithms have received considerable interest, and multipliers are a key component for their efficient implementation. In this talk, four examples of our recent research efforts in customisation of FPGA architecture and designs using different approaches to multiplication be described. As the multipliers become more specialised, higher performance gains are possible.

First we describe a two-speed multiplier (TSM) which offers improved average clock rate over a conventional multiplier by carefully considering the delay of two critical paths in a serial-parallel modified radix-4 Booth multiplier. Secondly, our joint research with Fudan University on a flexible precision, run-time decomposable DSP architecture for CNN implementations which optimises Precision, Interconnect, and Reuse (PIR-DSP) is presented. The resulting design offers a 6× improvement in multiply-accumulate operations per DSP in the 9 × 9-bit case, 12× for 4 × 4 bits, and 24× for 2 × 2 bits. Thirdly, we present AddNet which shows that reconfigurable constant coefficient multipliers (RCCMs) offer an alternative to low precision arithmetic for saving area. Finally, we describe a ternary neural network generator which can generate fully unrolled designs. The implementation of a VGG-style network achieves 90.9% accuracy and 122 k frames per second, with a latency of only 29 μs, which is the fastest CNN inference implementation reported so far on an FPGA.

## 10th May 2019, Lecture
[Efficient FPGA implementations of Machine Learning Algorithms](/assets/images/2019/05/efficientML19.pdf), San Jose State University


FPGA implementations of machine learning algorithms have been shown to be extremely efficient when the problem fits entirely on the FPGA but it remains a challenge to scale to problems of interest to industry. In this talk, our recent research on how to increase the capacity of existing approaches will be described.

In the first part of the talk we will describe an implementation of the Fastfood algorithm for scaling up online kernel methods. By utilizing the theory of random projections, problems with 1000x larger input dimension and dictionary size can be solved. A systolic implementation that operates at 500 MHz clock frequency was achieved. The next part of the talk describes how the resource requirements  in convolutional neural networks can be reduced using symmetric quantisation (SYQ), which achieves state of the art accuracy for binary and ternary weights. Finally, our work on new DSP-block architectures within FPGAs, optimised for energy-efficient embedded machine learning will be presented.


## 7th December 2018, Lecture
[Large Scale FPGA Implementations of Machine Learning Algorithms](/assets/images/2018/12/largescaleML18.pdf), Tokyo Institute of Technology


_FPGA implementations of machine learning algorithms have been shown to be extremely efficient when the problem fits entirely on the FPGA but it remains a challenge to scale to problems of interest to industry. In this talk, our recent research on how to increase the capacity of existing approaches will be described._

_In the first part of the talk we will describe an implementation of the Fastfood algorithm for scaling up online kernel methods. By utilizing the theory of random projections, problems with 1000x larger input dimension and dictionary size can be solved. A systolic implementation that operates at 500 MHz clock frequency was achieved. The next part of the talk describes how the resource requirements  in convolutional neural networks can be reduced using symmetric quantisation (SYQ), which achieves state of the art accuracy for binary and ternary weights. Finally, our work on an open-source matrix multiplication library on the Xeon+FPGA platform is described. This allows a number of different precisions down to binary, and additional support for deep learning applications is provided. Performance approaching the maximum of 14 Xeon cores and an Arria 10 FPGA was achieved._



 	
## 26 November 2018, Lecture
[Fixed-point FPGA implementations of Machine Learning Algorithms](/assets/images/2018/11/fixedml-imperial18.pdf), Department of Computing, Imperial College


_Abstract: FPGA implementations of machine learning algorithms have been shown to be extremely efficient, particularly when fixed-point arithmetic can be utilised to simplify the datapath of a hardware implementation. In this talk, our recent research on how accuracy and performance of fixed-point implementations of neural networks can be improved will be presented._

_In the first part of the talk we describe how the resource requirements  in convolutional neural networks can be reduced using symmetric quantisation (SYQ), which achieves state of the art accuracy for binary and ternary weights. Next, a variant of the serial-parallel modified radix-4 Booth multiplier that adds only the non-zero Booth encodings and skips over the zero operations, achieving a 1.4x Area-Time improvement over the standard parallel Booth multiplier is presented. Finally, we describe a system implementation of a long short-term memory (LSTM) based spectral prediction accelerator for physical layer radio frequency applications, with latency below 5 microseconds._



 	
## 29 October 2018, Lecture
[Long short-term memory for radio frequency spectral prediction and its real-time FPGA implementation](/assets/images/2018/10/lstmslides-milcom18.pdf), MILCOM Los Angeles

 	
## 26 September 2018, Lecture
[Teaching and Research at the University of Sydney](/assets/images/2018/09/TeachingandResearchatUSyd-HIT18.pdf), Harbin Institute of Technology

 	
## 26 September 2018, Lecture
[Reconfigurable Computing](/harbin-intitute-of-technology-reconfigurable-computing-course-2018/), Harbin Institute of Technology Short Graduate Course

 	
## 25 September 2018, Lecture
[Discover your future in engineering and technology](/assets/images/2018/09/DLT-presentation-60-min.pdf), D & LT Consultants, Harbin

 	
## 24 July 2018, Lecture
[Quantisation](/assets/images/2018/11/quantisation-papaa18.pdf), [Performance-Aware Programming with Application Accelerators (PAPAA)](http://cscpapaa.eee.hku.hk/), Hong Kong


## 30 November 2017, Lecture
[FPGA-based Implementations of Machine Learning Algorithms and the EPIC Approach](/assets/images/2017/11/imperial17.pdf), Imperial College, London.


Abstract - Recent progress in machine learning (ML) has led to an ability to solve difficult problems with unprecedented accuracy. Unfortunately, implementations using conventional software-based technologies such as central processing units, digital signal processors and graphics processing units suffer from high latency and high power consumption. In this talk, it will be explained how we have been applying Exploration, Parallelism, Integration and Customisation (EPIC) design techniques to FPGA implementations of online kernel methods, low-precision convolutional neural networks, and real-time processing of radio-frequency signals._



 	
## 21 October 2017, Keynote Speech
[FPGA-based Machine Learning for Electronic Measurement and Instruments](/assets/images/2017/10/FPGAMLforEMI17.pdf), IEEE International Conference on Electronic Measurement and Instruments (ICEMI) Conference, Yangzhou, China


## 25 May 2015, Lecture
[Integration of Nanoscale Structures with Electronics](/assets/images/2017/10/nanoelec-ainst17.pdf), Australian Institute for Nanoscale Science and Technology Accelerator Seminar, The University of Sydney

## 27 November 2015, Lecture
[Architectures for the FPGA Implementation of Online Kernel Methods](/assets/images/2017/10/ml-xilinx15.pdf), Xilinx Research Labs, Dublin, Ireland

## 1 July 2014, Lecture
[MCALIB - Measuring Sensitivity to Rounding Error using Monte Carlo Programming](/assets/images/2017/10/mca-msra14.pdf), Microsoft Research Asia, Beijing, China

## 25 October 2013, Lecture
[Computer Engineering Lab](/assets/images/2017/10/cel-nicta13.pdf), National ICT Australia (NICTA), Sydney

## 14 December 2007, Lecture
[10 Sonnets Concerning Field Programmable Technology](/assets/images/2017/10/fpt07-whatsexciting.pdf), International Conference on Field Programmable Technology Special Session on What is Exciting about Field Programmable Technology


