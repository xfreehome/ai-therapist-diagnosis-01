import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Diagnosis: chronic doomscrolling with acute main-character syndrome. " +
  "Prescription: touch grass twice daily, and stop narrating your life like a movie trailer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
