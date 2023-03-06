---
comments: false
date: 2021-10-10 12:16:08+00:00
## layout: page
# link: http://phwl.org/talks/
permalink: talks
slug: talks
title: Talks
classes: wide

---
## Invited Lecture
[Block Minifloat Arithmetic for Deep Learning Inference and Training](/assets/talks/cel-bmf23v2.pdf),
given at: 
* Hong Kong University of Science and Technology ACCESS Seminar Series (3 Feb, 2023)  
* Imperial College, London (17 Feb, 2023) (recording: <https://youtu.be/ENsKtdCgi7c>)
* ST Distinguished Lecture, ST Microelectronic, Italy (21 Feb, 2023)
* EPFL Seminar (23 Feb, 2023)

In this talk we present Block Minifloat (BM) arithmetic, a parameterised minifloat format which is optimised for low-precision deep learning applications. While standard floating-point representations have two degrees of freedom, the exponent and mantissa, BM exposes an additional exponent bias allowing the range of a block to be controlled. Results for inference, training and transfer learning using 4-8 bit precision which achieve similar accuracy to floating point will be presented.

## 24 Feb 2022, Tutorial
[FPGA-based Machine Learning for Communications Applications: A Tutorial](assets/talks/rfml-milcis22.pdf),
Military Communication and Information Systems Conference and Expo, Canberra

A field-programmable gate array (FPGA) is an integrated circuit in which the logic and interconnections can be defined by downloading a bitstream to its memory. Since their introduction in the 1980s, these devices have dramatically increased in capacity and functionality, with the recent Xilinx ZU48DR FPGA integrating a quad core ARM Cortex A-53, a dual core ARM Cortex-R5, 8x 14-bit, 10 GSPS digital-to-analog converters; 8x 14-bit, 5 GSPS analog-to-digital converters; 33 G transceivers and 930K system logic cells on a single device. FPGAs enable integration of entire communications systems on a single chip, with significant latency, size, weight, power and cost (LSWaP-C) advantages. This tutorial presentation first provides an overview of FPGA technology and then describes opportunities for their use in sophisticated applications in defence communications through the combination of software defined radio and machine learning technology. The opportunities for the development of secure, sovereign solutions based on this technological foundation will be explained and finally research from our group and others will be surveyed.

## 20 Jan 2022, Panel
[Difference Between Computer Engineering, Software Engineering and Computer Science](assets/talks/cscese.pdf),
University of Sydney Info Day.

Explained the Association for Computing Machinery View of the difference between computing subdisciplines.

## 11 Oct 2021, Lecture
[Thesis Projects for 2022](assets/talks/projects-thesis21.pdf), 
University of Sydney

Undergraduate thesis projects for 2022.

## 26 August 2021, Invited Lecture
[Low Precision Inference and Training for Deep Neural Networks](/assets/talks/lowprecision-croucher-asi21.pdf),
Croucher Advanced Study Institute: [Frontiers of AI Accelerators: Technologies, Circuits and Applications](https://accessasi.hkust.edu.hk/program),
online and at HKUST

The computational complexity of deep learning has led to research efforts to reduce the computation required. The use of low precision is particularly effective on FPGAs as they are not restricted to byte addressable operations. 
 
We first describe our finding that in inference applications, throughput matching with higher precision on certain layers can be used to recover accuracy in low-precision deep neural networks (DNNs). The work is applied to automatic modulation classification of radio signals leveraging the capabilities of the Xilinx ZCU111 RFSoC platform. On the open-source RadioML 2018.01A dataset, we demonstrate how to recover 4.3% in accuracy with the same hardware usage and achieve 488k classifications per second.
 
In the second part of the talk we introduce Block Minifloat (BM), a new spectrum of minifloat formats capable of training DNNs end-to-end with only 4-8 bit weight, activation and gradient tensors. While standard floating-point representations have two degrees of freedom, via the exponent and mantissa, BM exposes the exponent bias as an additional field for optimization. For ResNet trained on ImageNet, 6-bit BM achieves almost no degradation in floating-point accuracy with FMA units that are 4.1 × (23.9×) smaller and consume 2.3 × (16.1×) less energy than FP8 (FP32). 


## 12 May 2021, ELEC3607 Embedded Systems Lecture
[A Simple SDR](assets/talks/elec3607-sdr21.pdf), 
University of Sydney

A simple 40m (7 MHz) software defined radio.

## 4 Sep 2020, Invited Lecture
[A Fully Parallel DNN Implementation and its Application to Automatic Modulation Classification](assets/talks/amc-rc4ml20.pdf), 
[30th International Conference on Field-Programmable Logic and Applications](https://www.fpl2020.org/), 4th Workshop on Reconfigurable Computing for Machine Learning – RC4ML’2020

The high computational complexity of deep neural networks (DNNs) has led to strong interest in exploring low precision as a way to improve implementations. Unfortunately, very low precision activations and weights can have a significant impact on accuracy. This work demonstrates an efficient DNN which uses throughput matching where higher precision on certain layers can be used to recover this accuracy. This is applied to the domain of automatic modulation classification for radio signals leveraging the RF capabilities offered by the Xilinx ZCU111 RFSoC platform. The implemented networks achieve high-speed real-time performance with a classification latency of ≈8µs, and an operational throughput of 488k classifications per second. On the open-source RadioML dataset, we demonstrate how to recover 4.3% in accuracy using our technique.

## 9 July 2020, Lecture 
[FPGAs - EPIC Benefits](assets/talks/rcintro20-nbn.pdf), NBN CTO Office

A field-programmable gate array (FPGA) is an integrated circuit in which the logic and interconnections can be defined by downloading a bitstream to its memory. Since their introduction in the 1980’s, these devices have dramatically increased in capacity and functionality, with the recent Xilinx ZU29DR FPGA integrating a 1.5 GHz Quad-core ARM Cortex-A53 processor; Dual-core ARM Cortex-R5; 16x 14-bit, 6.6 GSPS digital-to-analog converters; 16x 12-bit, 2.1 GSPS analog-to-digital converters; 4K DSP slices and 930K system logic gates on a single device. This presentation will first provide an overview of FPGA architectures and describe their Energy, Parallelism, Integration and Customisation (EPIC) benefits over other technologies such as microprocessors, digital signal processors and graphics processing units (GPUs). This will be followed with examples of interesting FPGA-based computing applications, including my own research in the Computer Engineering Lab at the University of Sydney. 

## 1 June 2020, Lecture (Stephen Tridgell)
[Real-time automatic modulation classification using RFSoC](http://phwl.org/2020/rtamc/), 27th Reconfigurable Architectures Workshop (RAW)

The computational complexity of deep learning has
led to research efforts to reduce the computation required.
The use of low precision is particularly effective on FPGAs as
they are not restricted to byte addressable operations. Very low
precision activations and weights can have a significant impact
on the accuracy however. This work demonstrates by exploiting
throughput matching that higher precision on certain layers
can be used to recover this accuracy. This is applied to the
domain of automatic modulation classification for radio signals
leveraging the RF capabilities offered by the Xilinx ZCU111
RFSoC platform. The implemented networks achieve high-speed
real-time performance with a classification latency of ≈8µs, and
an operational throughput of 488k classifications per second.
On the open-source RadioML dataset, we demonstrate how to
recover 4.3% in accuracy with the same hardware usage with
our technique.

## 24 Mar 2020, Lecture
[LUXOR: An FPGA Logic Cell Architecture for Efficient Compressor Tree Implementations](/assets/talks/LUXOR-usyd-fpga20.pdf), 28th ACM/SIGDA International Symposium on Field-Programmable Gate Arrays (FPGA), Monterey

We propose two tiers of modiications to FPGA logic cell architecture
to deliver a variety of performance and utilization beneits with
only minor area overheads. In the first tier, we augment existing
commercial logic cell datapaths with a 6-input XOR gate in order
to improve the expressiveness of each element, while maintaining
backward compatibility. This new architecture is vendor-agnostic,
and we refer to it as LUXOR. We also consider a secondary tier of
vendor-speciic modifications to both Xilinx and Intel FPGAs, which
we refer to as X-LUXOR+ and I-LUXOR+ respectively. We demonstrate
that compressor tree synthesis using generalized parallel
counters (GPCs) is further improved with the proposed modiications.
Using both the Intel adaptive logic module and the Xilinx
slice at the 65nm technology node for a comparative study, it is
shown that the silicon area overhead is less than 0.5% for LUXOR
and 5-6% for LUXOR+, while the delay increments are 1-6% and
3-9% respectively. We demonstrate that LUXOR can deliver an average
reduction of 13-19% in logic utilization on micro-benchmarks
from a variety of domains. BNN benchmarks benefit the most with
an average reduction of 37-47% in logic utilization, which is due
to the highly-efficient mapping of the XnorPopcount operation on
our proposed LUXOR+ logic cells.

## 19 Feb 2020, Lecture
[Low-precision CNN Inference and Training for Edge Applications on FPGAs](/assets/talks/lpcnn-xsj20.pdf), Xilinx Research Labs, San Jose

Much of the focus on FPGA-based implementation of convolutional neural networks (CNNs) has targeted server-based applications for which the primary benchmark set is Imagenet.
In this talk, we discuss our research on FPGA-based inference and training for small convolutional neural networks, intended for edge applications such as radio frequency machine learning (RFML). 

For inference, an open-source, ternary neural network generator which produces fully unrolled designs is presented. A VGG-style network implemented with this approach can achieve 90.9% accuracy for CIFAR10. On an Ultrascale+ VU9P, it achieves 122 k frames per second, with a latency of 29 μs. When applied to radio frequency modulation classification on a Xilinx ZCU111 board, we achieve 488 k classifications per second with a latency of 8 μs.

We also present a mixed-precision training accelerator, where most of the computations are processed using 8-bit block floating point. The work includes modifications to the stochastic weight averaging low-precision (SWALP) algorithm to achieve a 0.5% accuracy improvement for the MNIST and CIFAR10 benchmarks, bringing it within 0.1% of floating-point.

## 26th November 2019, Lecture
[Multipliers for FPGA Machine Learning Applications](/assets/talks/ml-multipliers-imperial19.pdf), Imperial College

FPGA implementations of machine learning algorithms have received considerable interest, and multipliers are a key component for their efficient implementation. In this talk, four examples of our recent research efforts in customisation of FPGA architecture and designs using different approaches to multiplication be described. As the multipliers become more specialised, higher performance gains are possible.

First we describe a two-speed multiplier (TSM) which offers improved average clock rate over a conventional multiplier by carefully considering the delay of two critical paths in a serial-parallel modified radix-4 Booth multiplier. Secondly, our joint research with Fudan University on a flexible precision, run-time decomposable DSP architecture for CNN implementations which optimises Precision, Interconnect, and Reuse (PIR-DSP) is presented. The resulting design offers a 6× improvement in multiply-accumulate operations per DSP in the 9 × 9-bit case, 12× for 4 × 4 bits, and 24× for 2 × 2 bits. Thirdly, we present AddNet which shows that reconfigurable constant coefficient multipliers (RCCMs) offer an alternative to low precision arithmetic for saving area. Finally, we describe a ternary neural network generator which can generate fully unrolled designs. The implementation of a VGG-style network achieves 90.9% accuracy and 122 k frames per second, with a latency of only 29 μs, which is the fastest CNN inference implementation reported so far on an FPGA.


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

## 24 October 2016, Lecture
[Architectures for the FPGA Implementation of Online Kernel Methods (link to video)](https://www.microsoft.com/en-us/research/video/architectures-fpga-implementation-online-kernel-methods/), 
Microsoft Research Talks, Redmond

In machine learning, traditional linear prediction techniques are well understood and methods for their efficient solution have been developed. Many real-world applications are better modelled using non-linear techniques, which often have high computational requirements. Kernel methods utilise linear methods in a non-linear feature space and combine the advantages of both. Commonly used kernel methods include the support vector machine (SVM), Gaussian processes and regularisation networks. These are batch-based, and a global optimisation is conducted over all input exemplars to create a model. In contrast, online methods, such as the kernel recursive least squares (KRLS) algorithm, update the state in a recursive and incremental fashion upon receiving a new exemplar. Although not as extensively studied as batch methods, online approaches are advantageous when throughput and latency are critical. In this talk I will describe efforts in the Computer Engineering Laboratory to produce high-performance FPGA-based implementations of online kernel methods. These have included: (1) a microcoded vector processor optimised for kernel methods; (2) a fully pipelined implementation of kernel normalised least mean squares which achieves 160 GFLOPS; (3) an implementation of Naive Online regularised Risk Minimization Algorithm (NORMA) which uses “braiding” to resolve data hazards and reduce latency by an order of magnitude; and (4) a distributed kernel recursive least squares algorithm which constructs a compact model while enabling massive parallelism.

## 25 May 2015, Lecture
[Integration of Nanoscale Structures with Electronics](/assets/images/2017/10/nanoelec-ainst17.pdf), Australian Institute for Nanoscale Science and Technology Accelerator Seminar, The University of Sydney

## 27 November 2015, Lecture
[Architectures for the FPGA Implementation of Online Kernel Methods](/assets/images/2017/10/ml-xilinx15.pdf), Xilinx Research Labs, Dublin, Ireland

## 1 July 2014, Lecture
[MCALIB - Measuring Sensitivity to Rounding Error using Monte Carlo Programming](/assets/images/2017/10/mca-msra14.pdf), Microsoft Research Asia, Beijing, China

## 25 October 2013, Lecture
[Computer Engineering Lab](/assets/images/2017/10/cel-nicta13.pdf), National ICT Australia (NICTA), Sydney

## 15 May 2009, Lunchtime talk
[Lunchtime research talk](http://phwl.org/2009/life-the-universe-and-fishing/), Chinese University of Hong Kong, Hong Kong

## 14 December 2007, Lecture
[10 Sonnets Concerning Field Programmable Technology (FPT)](/assets/images/2017/10/fpt07-whatsexciting.pdf), International Conference on Field Programmable Technology Special Session on What is Exciting about Field Programmable Technology


