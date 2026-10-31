---
author: phwl
comments: true
date: 2026-10-29 09:30:00 AEST
title: AMC with Conditional Cyclic-Cumulant Refinement
use_math: true
toc: true
classes: wide
categories:
- academia
tags:
- reseach,radio
header:
  teaser: /assets/images/2026/10/hamc-fig.png
---


An AMC algorithm that adapts computational effort to the discriminability
of different modulation groups.

[Ruilin Wu, Xueyuan Liu, and Philip Leong. Hierarchical automatic modulation classification with conditional cyclic-cumulant refinement. IEEE Signal Processing Letters, (to appear), 2026.](/assets/papers/hamc_spl26.pdf)

Abstract: Cyclostationary features have shown robust cross-
dataset generalization for single signals in flat channels, but
higher-order feature extraction is costly. This paper proposes a
hybrid hierarchical automatic modulation classification (AMC)
algorithm that adapts computational effort to the discriminability
of different modulation groups. A lightweight fast Fourier trans-
form (FFT)–logistic regression (LR) classifier first separates the
signals into BPSK, MSK, ω/4-DQPSK, 8PSK, and a QPSK-like
family; for QPSK-like signals, blind symbol rate and carrier
frequency offset (CFO) estimation, cyclic cumulant (CC) matrix
construction, and convolutional neural network (CNN) classifi-
cation are used to refine the classification into QPSK, 16QAM,
64QAM, and 256QAM. Experiments on the CSPB.ML.2018 and
CSPB.ML.2022 datasets show that compared with the strip
spectral correlation analyzer (SSCA)-based CC method, the
proposed technique retains comparable same-dataset and cross-
dataset accuracy while providing an estimated 7.20x operation
speedup and an approximately 9.52x measured average CPU-
latency speedup under the balanced eight-class setting. Ablation
experiments show that direct eight-class classification using LR
or a Multi-layer Perceptron (MLP) results in lower accuracy.

{% include figure image_path="/assets/images/2026/10/hamc-fig.jpg" caption="" %}
