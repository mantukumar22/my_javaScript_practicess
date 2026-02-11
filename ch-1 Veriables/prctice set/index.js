// 1} create a variable of type string and try to add a number to it.
// 2} Use typeof opearator to find the datatype of the string in last question.

// let text = "This is Number: ";
// let Result = text + 10;
// console.log(Result);
// console.log(typeof[text]);

// 3} Create a const object in javascript can you change it to hold a number later.
// 4} Try to add a new key to the const object in problem 3 were you able to do it ? ans in obj content.

const obj = { Msg: "Hello" };

obj.Msg = "Hii Amrit";
obj.Msg = 100; 
// obj = 100; x

obj.Msg = 55 ; 

console.log(obj.Msg);


// 5} Write a Js program to create a word meaning Dictinary of 5 words.

const dictionary = {
  "Eloquent": "Fluent or persuasive in speaking or writing",
  "Serendipity": "The occurrence of events by chance in a happy or beneficial way",
  "Ephemeral": "Lasting for a very short time",
  "Ineffable": "Too great or extreme to be expressed in words",
  "Resilient": "Able to withstand or recover quickly from difficulties"
};

let word = prompt( "Enter a word to search in the dictionary:");

if (dictionary[word]){
    alert(`${word}: ${dictionary[word]}`);
}else {
    alert("Sorry, that word is not in the dicionary.");
}