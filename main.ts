// Two Robots in an Elevator — make.fun entry.
// Writes one line of awkward robot-to-robot elevator small talk to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a diagnostic on my small-talk module. Error 404: personality not found. So... nice weather protocol?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
