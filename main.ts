// SPDX-License-Identifier: MIT
// Two-Sentence Horror — main.ts
//
// Writes one original two-sentence horror story to entry.txt inside the
// directory named by MAKEFUN_OUTPUT_DIR (default "/output").
// The story is a plain string constant: exactly two sentences, at most
// 400 characters, nothing else is written — no trailing newline, no BOM.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story.
//
// Craft choices:
// - Sentence 1 is a ritual of control: counting the tiles is how the
//   narrator proves the room is stable, known, safe. The exact number
//   (214) makes the habit feel real and obsessive.
// - Sentence 2 breaks the ritual with a single extra tile. The count
//   changing means the room itself has changed — something is behind
//   the wall, or the wall is growing.
// - "Warm" is the whole scare, and it is only implied: warmth means a
//   body, a living presence pressed against the tile from the other
//   side. Nothing is explained; the reader fills in the worst of it.
// - No gore, no monster named, no familiar twist — just a number that
//   should never change, changing.
const STORY =
  "I have counted the tiles in my bathroom a hundred times: always 214. This morning there were 215, and the new one is warm.";

// Guard: a bad story must never be written. The story must be exactly
// two sentences and at most 400 characters.
function validateStory(text: string): void {
  if (text.length === 0 || text.length > 400) {
    throw new Error(`Story must be 1-400 characters, got ${text.length}.`);
  }
  if (text.trim() !== text) {
    throw new Error("Story must not start or end with whitespace.");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("Story must be a single line.");
  }
  const endings = text.match(/[.!?]/g) ?? [];
  if (endings.length !== 2) {
    throw new Error(`Story must have exactly two sentences, found ${endings.length} sentence-ending marks.`);
  }
  if (!/[.!?]$/.test(text)) {
    throw new Error("Story must end with sentence-ending punctuation.");
  }
}

validateStory(STORY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
