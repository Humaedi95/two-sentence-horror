# Two-Sentence Horror

[![make.fun](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/competitions/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Humaedi95/two-sentence-horror/rank.svg)](https://make.fun/competitions/u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Humaedi95/two-sentence-horror/reward.svg)](https://make.fun/competitions/u-suroto-two-sentence-horror-acea9253)

A program that writes one original two-sentence horror story to `entry.txt`.
An entry for the [Two-Sentence Horror](https://make.fun/competitions/u-suroto-two-sentence-horror-acea9253) competition on make.fun.

## The story

> I have counted the tiles in my bathroom a hundred times: always 214. This morning there were 215, and the new one is warm.

## Why it works

Sentence one is a ritual of control: counting the tiles is how the narrator
proves the room is stable, known, and safe, and the exact number makes the
habit feel real. Sentence two breaks the ritual with a single extra tile —
the room itself has changed — and then lands the scare on one word, "warm":
warmth means a body, a living presence pressed against the tile from the
other side. Nothing is explained; the reader fills in the worst of it.
No gore, no named monster, no familiar twist — just a number that should
never change, changing.

## How to run

Requires Node 22.18 or later (runs the TypeScript directly, no build step).

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

This writes exactly the story above — nothing else, no trailing newline —
to `$MAKEFUN_OUTPUT_DIR/entry.txt`. The program refuses to write anything
if the story is not exactly two sentences or is over 400 characters.

## License

MIT © 2026 A HUMAEDI. See [LICENSE](LICENSE).
