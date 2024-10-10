// function generateRandomNumber(min, max) {
//   return Math.random() * (max - min + 1) + min;
// }
// console.log(generateRandomNumber(1, 100));
const readline = require("readline");

// สร้าง interface เพื่อรับข้อมูลจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// สุ่มเลขระหว่าง 1 ถึง 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;
let maxGuesses = 10;

const askQuestion = () => {
  rl.question("Guess a number between 1 and 100: ", (input) => {
    let userGuess = parseInt(input);
    guesses++;

    if (userGuess > randomNumber) {
      console.log("Too high! Try again.");
    } else if (userGuess < randomNumber) {
      console.log("Too low! Try again.");
    } else {
      console.log(`Correct! You guessed it in ${guesses} tries.`);
      rl.close();
      return;
    }

    if (guesses < maxGuesses) {
      askQuestion();
    } else {
      console.log(
        `You've reached the limit of ${maxGuesses} guesses. The correct number was ${randomNumber}.`
      );
      rl.close();
    }
  });
};

// เริ่มต้นถามคำถาม
askQuestion();
