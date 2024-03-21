#!/usr/bin/env node

// my first project is simple calculator


// printing a Welcome Message
// console.log ("\n\tWelcome To \ 'codewithnida\' - CLI simple calculator\n");

// Asking Question from users through inquirer

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await  inquirer.prompt([
{ message: chalk.red.bold("Enter first number"), type: "number", name: "firstNumber" },
{ message: chalk.red.bold("Enter second number"), type: "number", name: "secondNumber" },
{
message: chalk.blue("Select one of the operators to perform operation"),
type: "list",
name: "operator",
choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
]);

//console.log(answer)

//conditional statement

if (answer.operator === "Addition") {
console.log(chalk.green.bold(answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "Subtraction") {
console.log(chalk.green.bold(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
console.log(chalk.green.bold(answer.firstNumber * answer.secondNumber));
} else if (answer.operator === "Division") {
console.log(chalk.green.bold(answer.firstNumber / answer.secondNumber));
} else {
console.log("Please select a valid operator");
}

