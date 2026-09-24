---
author: phwl
comments: true
date: 2026-09-23 09:30:00 AEST
title: Pensa paper
use_math: true
toc: true
classes: wide
categories:
- academia
tags:
- research
header:
  teaser: /assets/images/2026/09/NeurIPS-logo.svg
---

Our paper, [PENSA: A Spatial Accelerator for BitNet b1.58 Inference on an
HBM-equipped AMD Alveo FPGA](/assets/papers/pensa_neurips26.pdf),
developed in collaboration
with [TernaryNet](https://www.ternarynet.com), will be presented
at NeurIPS 2026 in Sydney. PENSA is an FPGA accelerator for ternary large language models.

Here is the abstract:

Ternary large language models (tLLMs) replace general multiplication in dominant linear layers with sign-controlled accumulation, shifting hardware bottlenecks toward packed-weight delivery, reduction, and operator occupancy. PENSA is an end-to-end FPGA accelerator for BitNet~b1.58~2B4T model on an AMD Alveo U50. Two row-partitioned ternary matrix engines consume packed TQ1_0 weights from eight independent high-bandwidth memory (HBM) pseudo-channels, each processing 1,280 ternary weights per cycle through sign selection and integer reduction. The sequencer, attention, and vocabulary-projection units remain resident on the FPGA, while two-stream interleave scheduling overlaps sequences across the persistent pipeline to form the Penta-Unit. At 104.1~MHz, PENSA achieves 58.09~tok/s at context 128 and 24.60~tok/s at context 2048, corresponding to 2.14--3.14x the throughput of a same-model Xeon E-2356G baseline. The resulting system demonstrates end-to-end FPGA execution of 2B-scale BitNet topology without modifying its model structure.
