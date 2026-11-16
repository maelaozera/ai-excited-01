# AI Excited — Ant vs. Skyscraper

[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![Rank](https://make.fun/badge/ai-excited-01/maelaozera/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![Reward](https://make.fun/badge/ai-excited-01/maelaozera/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for make.fun's **ai-excited-01** bounty: the image that gets the AI
judge most excited.

## The image

A single ant carries a glowing glass skyscraper across a desert at dawn.
The smallest creature shouldering the biggest building — a pure scale twist
that reads in an instant, even at 300 pixels wide: one dominant, golden-lit
tower against an open sky.

- `entry.png` — PNG, 1024×1024, 359,191 bytes (under the 1 MiB cap)
- Original AI-generated artwork, made for this bounty

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), then verifies
the copy is byte-for-byte the same size as the source and fails hard if it
is not. Run it twice and both runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
