/* 1} Write a program using prompt funtion to take
input of age as a value from the user
and use lert to tell him if he can drive !.
*/

/* 2} in q1 use confirm to ask the user if he wants to see the 
prompt again
*/

/* 3} In the privious question use console error to log the error if the user
enters a negative value for age 
*/

// function drivingAge() {
//     let age = prompt("Enter your Age");

//     if (age >= 18) {
//         alert("You can Drive bro!")
//     }
//     else if (age < 0) {
//         console.error("This is an invalid age")
//         alert
//     }
//     else (alert("You cannot Drive bro!"))


//     let tryAgain = confirm("You want to Enter again")
//     if (tryAgain) {
//         drivingAge();
//     } else {
//         alert("Okay , stay safe!")
//     }
// }
// drivingAge();

/* 4} write a program to change the URL to google.com (redirection) if user 
enters a number greater than 4 .
*/

// let num = prompt("Enter a number");
// if (num > 4) {
//     window.location.href = "https://www.google.com"
// } else {
//     alert("You entered a number less than or equal to 4")
// }

/* 
5} write a program to change the background color of the page to yellow,red
based on user input using prompt .
*/

let color = prompt("Enter a Color(`yellow` or `red`):");
if (color === "yellow" || color === "red") {
    document.body.style.backgroundColor = color;
} else {
    alert("Color not recognized. Please enter 'yellow' or 'red'.");
}