//1} write a program to print the marks of a student in an object using for loop
// obj = { harry : 98, rohan : 70 , aakash :7}

let obj = {
  harry: 98,
  rohan: 70,
  aakash: 77
};

let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    let student = keys[i];
    let marks = obj[student];
    console.log(student + " scored " + marks);
}










// 2} make Que 1 in for in loop .
// let obj = {
//     harry : 98,
//     rohan : 70, 
//     aakash :77
// };

// for (let student in obj) {
//    console.log(student + " scored " + obj[student]);
// }