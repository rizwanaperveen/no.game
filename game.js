#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 5);
const answers = await inquirer.prompt([
    {
        name: "userGuessNmber",
        type: "number",
        message: "please guess a number between 1 to 5:",
    }
]);
if (answers.userGuessNmber == randomNumber) {
    console.log(chalk.green.italic("Congratulations!you guess right no."));
}
else {
    console.log(chalk.red.bold("You guessed wrong number,"));
}
