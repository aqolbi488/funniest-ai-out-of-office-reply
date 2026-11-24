// The Funniest AI Out-of-Office Reply — make.fun bounty entry.
//
// Writes exactly one out-of-office auto-reply line (1-160 chars, UTF-8)
// to /output/entry.txt. Deterministic: the same bytes on every run.
// No network, no environment reads, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm on vacation, so your email is now handled by my backup model — it has already replied 'noted' to itself twice and feels great about it.";

// The sealed gate only accepts 1-160 characters, not only whitespace:
// refuse to write anything outside that range rather than ship an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate needs 1-160.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
