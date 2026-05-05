//1} What will the following print in javaScript ?
console.log ("har\"".lenght)
//4
// 2} Explore the includes , startsWith & endsWith functions of a string' 

let str = "Im Amrit Guru";

console.log(str.includes("Guru"));
console.log(str.includes("Hero"));

console.log(str.startsWith("Im"));
console.log(str.startsWith("Hero"));

console.log(str.endsWith("Guru"));
console.log(str.endsWith("Hero"));

//3} Write a program to convert a given string to lower case & uppercase.

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.length)

//4} Extract the amount out of this string "Please give Rs 1000"

let string ="Please give Rs 1000";
let amount = string.split(" ")[3];
amount = Number(amount);
console.log(amount);

//5} Try to change 4th character of a given string were you able to do it?
 let strt="Amritguru";
 let newstrt= strt.substring(0,4) + "G" + strt.substring(6,9);

 console.log(newstrt);