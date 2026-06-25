import memory1 from "../assets/memories/memory-1.jpg";
import memory2 from "../assets/memories/memory-2.jpg";
import memory3 from "../assets/memories/memory-3.jpg";
import memory4 from "../assets/memories/memory-4.jpg";
import memory5 from "../assets/memories/memory-5.jpg";
import memory6 from "../assets/memories/memory-6.jpg";
import memory7 from "../assets/memories/memory-7.jpg";
import memory8 from "../assets/memories/memory-8.jpg";
import memory9 from "../assets/memories/memory-9.jpg";
import memory10 from "../assets/memories/memory-10.jpg";

// ─── Customize everything about your story here ───────────────────────────

export const HER_NAME = "Dorsa";

// The day we became official (22 Mehr 1403 → Oct 13, 2024). Drives the "Days Together" counter.
export const START_DATE = "2024-10-13";

export const STATS = [
  { label: "Days Together", end: 0, computeFromStartDate: true, suffix: "" },
  { label: "Memories Created", end: 482, suffix: "+" },
  { label: "Smiles Generated", end: 9999, suffix: "+" },
  { label: "Adventures Completed", end: 27, suffix: "" },
];

export interface TimelineEvent {
  hash: string;
  title: string;
  message: string;
  date: string;
  branch?: string;
}

export const TIMELINE: TimelineEvent[] = [
  {
    hash: "a1b2c3d",
    title: "First Meeting",
    message: "init: two strangers cross paths for the first time",
    date: "2024-05-21",
    branch: "main",
  },
  {
    hash: "e4f5g6h",
    title: "First Conversation",
    message: "feat: exchanged first words, instantly felt different",
    date: "2024-09-22",
    branch: "main",
  },
  {
    hash: "f5g6h7i",
    title: "We Made It Official",
    message: "feat: said yes, became us",
    date: "2024-10-13",
    branch: "main",
  },
  {
    hash: "i7j8k9l",
    title: "First Date",
    message: "feat: nervous laughs, long talks, no awkward silences",
    date: "2024-11-22",
    branch: "main",
  },
  {
    hash: "m1n2o3p",
    title: "Favorite Person — Achievement Unlocked",
    message: "milestone: officially became my favorite person",
    date: "2026-02-02",
    branch: "main",
  },
  {
    hash: "q4r5s6t",
    title: "Today",
    message: "feat: still choosing you, every single day",
    date: "now",
    branch: "HEAD",
  },
];

export interface MemoryPhoto {
  src: string;
  caption: string;
}

export const MEMORIES: MemoryPhoto[] = [
  { src: memory1, caption: "That golden afternoon" },
  { src: memory2, caption: "Flowers just because" },
  { src: memory3, caption: "Caught making memories" },
  { src: memory4, caption: "Matching hoodies, matching hearts" },
  { src: memory5, caption: "Quiet hugs" },
  { src: memory6, caption: "Just us, anywhere" },
  { src: memory7, caption: "Lost in thought" },
  { src: memory8, caption: "Sunny days together" },
  { src: memory9, caption: "Late night laughs" },
  { src: memory10, caption: "Stealing a moment" },
];

export interface Reason {
  icon: string;
  title: string;
  description: string;
}

export const REASONS: Reason[] = [
  { icon: "smile", title: "Your Smile", description: "It rewrites my entire mood in half a second." },
  { icon: "heart", title: "Your Kindness", description: "The way you care for everyone, quietly, without asking for credit." },
  { icon: "shield", title: "Your Support", description: "You believe in me even on the days I don't believe in myself." },
  { icon: "sparkles", title: "Your Personality", description: "Funny, sharp, warm — somehow exactly what I needed." },
  { icon: "laugh", title: "Your Laugh", description: "Loud, real, contagious. My favorite sound." },
  { icon: "infinity", title: "Everything About You", description: "There isn't a single part of you I'd want to change." },
];
