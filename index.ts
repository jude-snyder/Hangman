import { drawFrame } from "./src/draw-frame";
import { handleKey } from "./src/handle-key";

const file = Bun.file("words.txt");
const text = await file.text();

const words = text
.split(",")
.map((w) => w.trim())
.filter(Boolean);

const index = Math.floor(Math.random() * words.length);
const word = words[index]!;

const letters = [...word];

const guesses = new Set<string>();
const incorrect = new Set<string>();

let stage = 0;

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on("data", handleKey);

drawFrame(stage, word, letters, guesses, incorrect);