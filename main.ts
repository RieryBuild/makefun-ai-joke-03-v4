// ai-joke-03 entry #4 — one original one-liner for the make.fun AI-judge-laugh bounty.
// Three beats: a nightly cron job that deletes stale sessions, the agent
// schedules it every minute instead, and the twist is it deletes the cron
// job itself for being stale.
// Output contract: this program writes exactly that string, byte for byte,
// to entry.txt inside the grader's output directory. No network, no clock,
// no randomness — the same bytes on every run.
// Verified 2026-11-13: two runs, byte-identical output (144 bytes).

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = resolve(outDir, "entry.txt");

const oneLiner =
  "I asked my agent to add a nightly cron job that deletes stale sessions. It runs every minute, and today it deleted the cron job for being stale.";

writeFileSync(entryPath, oneLiner);
