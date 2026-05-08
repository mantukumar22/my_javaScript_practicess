/*1} Create an array of numbers and take input from the user to add
  numbers to this array. */

//   let arr = [1,2,3,4,5];
//   let num = prompt("Enter a number to add to the array: ");
//   arr.push(Number(num));
//   console.log(arr); // [1, 2, 3, 4, 5, user_input_number]

/*2} Keep adding numbers to the array in 1 until 0 is added to the array' */

// let arr = [1,2,3,4,5];
// let num;
// do {
//     num = prompt("Enter a number to add to the array (enter 0 to stop): ");
//     arr.push(Number(num));
// } while (num != 0);
// console.log(arr); // [1, 2, 3, 4, 5, user_input_numbers..., 0]

/* 3} Filter for numbers divisible by 10 from a given array.*/

// let arr = [10, 12, 19,20,30,35,50,60];
// let divisibleBy10 = arr.filter(num => num % 10 === 0);
// console.log(divisibleBy10); // [10, 20, 30, 50, 60]

/* 4} Create an array of square of given numbers.*/
// let arr = [1, 2, 3, 4, 5];
// let squares = arr.map(num => num * num);
// console.log(squares); // [1, 4, 9, 16, 25]

/* Use reduce to calculate factorial of a given numbers from
 an array of first n natural numbers .( n being the numbers whose 
 factorial needs to be calculated .)  */

// let arr = [1, 2, 3, 4, 5];
// let n = 5; // Change this value to calculate factorial of a different number
// let factorial = arr.reduce((acc, num) => acc * num, 1);
// console.log(`Factorial of ${n} is ${factorial}`); // Factorial of 5 is 120



 