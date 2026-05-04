// 3} write a program to print "try again" untill the user enters the correct numbers.

let correctNumber = 5;
let guess;

while (guess !== correctNumber) {
    guess = Number(prompt("Enter the correct number:"));

    if(guess !== correctNumber){
        console.log("try again");
    }
}

console.log("Correct! you guesssed the number.");

