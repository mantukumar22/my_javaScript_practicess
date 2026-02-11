//5} Print "You can Drive " or "You cannot Drive " based on age being greater than 18 using ternary operator.

let age = Number(prompt("Enter Your Real Age"));

let message = (age > 18) ? `You can Drive ` : `You cannot Drive `;
console.log(message);