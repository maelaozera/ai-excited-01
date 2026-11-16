// Entry copier: places the artwork file into the grading output folder.
//
// The picture lives next to this script. This program duplicates it into
// the directory named by MAKEFUN_OUTPUT_DIR, falling back to /output when
// that variable is absent or blank. The entry is one image, so the only job
// here is to deliver that image intact — no rendering, no transformation.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const targetDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const target = join(targetDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`source artwork is missing: ${source}`);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);

const sourceBytes = statSync(source).size;
const copiedBytes = statSync(target).size;

if (copiedBytes !== sourceBytes) {
  throw new Error(
    `copy is incomplete: expected ${sourceBytes} bytes but wrote ${copiedBytes} bytes`,
  );
}

console.log(`Copied entry.png to ${target} (${copiedBytes} bytes verified)`);
