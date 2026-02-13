/*  Create a faulty calculator using JavaScript .
This faulty calculator does following:
1. it takes two numbers as input from the user.
2. It performs wrong opearation as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong opearation 50% of the times.


*/
let random = Math.random()

console.log(random)

let a = prompt("Enter 1st Number")
let c = prompt("Enter Operation")
let b = prompt("Enter 2nd Number")


if (random > 0.5) {
    if (c == "+") {
        console.log(a + b);
    }
    else if (c == "-") {
        console.log(a - b);;
    }
    else if (c == "*") {
        console.log(a * b);
    }
    else if(c == "/"){
        console.log(a / b)
    }
    else{console.log("retry")}
} else {
    
    if (c == "+") {
        console.log(a - b);
    }
    else if (c == "-") {
        console.log(a / b);;
    }
    else if (c == "*") {
        console.log(a + b);
    }
    else if (c == "/"){
        console.log(a ** b);
    }
    else{console.log("retry")}

}