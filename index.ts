#! /usr/bin/env node

// importing Inquirer and Chalk from modules
import inquirer from "inquirer";
import chalk from "chalk";

// Displaying a Colorful Project Name
console.log(chalk.bold.blueBright("\n \t\t\tWords Counter"));
console.log(chalk.whiteBright("=").repeat(65));

// User Input Code
const userInput = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: chalk.bold.green("Enter Your Sentence:"),
  },
]);

// Trimming and Splitting the sentence it into words based on "spaces"
const userOutput = userInput.Sentence.trim().split(" ");

// Displaying the number of words in the sentence
console.log(chalk.bold.blueBright(`\n${userOutput}`));
console.log(chalk.bold.green(`\nNumber of words in your sentence: ${chalk.bold.yellowBright(userOutput.length)}`));
console.log(chalk.whiteBright("=").repeat(65));