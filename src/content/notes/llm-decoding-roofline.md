---
title: "A quick model for LLM decoding throughput"
summary: "A simple performance worksheet for separating memory traffic, compute work, and batching effects."
date: 2026-10-12
tags: ["LLM Serving", "GPU", "Performance Modeling"]
draft: false
---

## 1. Start with two hardware bounds

For a simplified dense transformer, the time to generate one decoding step depends on at least two resource constraints:

- **Memory bandwidth:** how quickly weights and activation-related data can move from HBM.
- **Compute throughput:** how quickly the GPU can execute the required arithmetic.

A lower-bound estimate for a decoding step is:

```text
T_step >= max(
    bytes_transferred / effective_memory_bandwidth,
    operations / effective_compute_throughput
)
```

This is a bound, not an exact latency prediction. Kernel overhead, synchronization, cache behavior, attention computation, and communication can add time.

## 2. Batch size changes the regime

With a small batch, dense model weights may be fetched for relatively little useful arithmetic. A larger batch can reuse those weights across more tokens during the same step, increasing arithmetic intensity.

However, a larger batch also consumes more KV-cache capacity and creates additional attention work. The optimal operating point depends on sequence lengths, parallelism, and latency targets.

## 3. Separate prefill from decode

**Prefill** processes prompt tokens and can use substantial matrix-multiplication parallelism. **Decode** generates one next token per active sequence per step and often has a different resource balance.

For capacity planning, report input-token throughput and output-token throughput separately. A single tokens-per-second number hides the workload mix.

## 4. Measure before concluding

An estimate should state its assumptions: model configuration, numerical precision, active batch size, average context length, KV-cache format, tensor parallelism, and effective bandwidth. Then compare the estimate against measured kernel and server-level performance.
