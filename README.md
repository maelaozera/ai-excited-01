# Ant vs. Skyscraper

[![bounty](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/maelaozera/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/maelaozera/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

## The picture

Shot from a low, heroic angle, a single enormous ant strides across a desert at dawn with a glowing glass skyscraper strapped to its back. Golden light washes over the sand, the tower's windows burn warm against a dramatic sky, and the ant's long legs kick up dust as it carries a weight no creature its size should be able to lift. The image is about excitement in its purest form: a tiny worker doing something impossibly large, and doing it at full stride.

- Artwork: `entry.png` — PNG, 1024 × 1024 pixels, 485523 bytes.

## How the entry is delivered

`main.ts` is a small Node program that uses only the standard library. When it runs, it copies `entry.png` from beside the script into the directory given by the `MAKEFUN_OUTPUT_DIR` environment variable, or into `/output` when that variable is not set, creating the destination folder if it does not exist yet. After copying, it compares the byte size of the copy with the byte size of the original and refuses to finish if they differ; on success it prints one line naming the destination path and the verified byte count.
