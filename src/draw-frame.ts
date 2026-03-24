import chalk from "chalk";
import { stages } from "./stages";

export function drawFrame(
    stage: number, 
    word: string,
    letters: string[], 
    guesses: Set<string>,
    incorrect: Set<string>,
    ): void {
console.clear();
console.log(stages[stage]);

const display = letters.map((l) => (guesses.has(l) ? l : "_")).join(" ");

console.log(chalk.greenBright(`Guess: ${display}`));
console.log(chalk.blue(`Incorrect: ${[...incorrect].sort().join(" ")}`));

if (stage === stages.length - 1) {
    console.log(chalk.red(`You lose! The word was ${word}`));
    process.exit(0);
} else if (letters.every((l) => guesses.has(l))) {
    console.log(chalk.cyan("You win! 🥳🥇🥳"));
    process.exit(0);
}
}