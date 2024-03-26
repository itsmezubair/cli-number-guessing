#! /usr/bin/env node
import inquire from "inquirer";
// 1) computer will generate a random number - Done
// 2) user input for guessig number - Done
// 3) compare user input with computer generted number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquire.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 and 6 : ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number");
}
else {
    console.log("You guessed a wrong number");
}
