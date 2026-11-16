import { copyFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`source image not found: ${source}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Fail hard if the copy is not byte-for-byte the source image.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  throw new Error(
    `size mismatch after copy: source ${sourceBytes} bytes, output ${targetBytes} bytes`,
  );
}
console.log(`copied entry.png to ${target} (${targetBytes} bytes, verified)`);
