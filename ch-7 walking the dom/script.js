/* 1} Create a navbar and change the color of its 
    First element to red.
*/

// document.body.firstElementChild.firstElementChild.style.color = "red";

/* 2} Create a table without t body Now use "View page source" button to check wheather it has a t body or not. 
*/

// let table = document.createElement("table");
// let tr = document.createElement("tr");
// let td1 = document.createElement("td");
// let td2 = document.createElement("td");
// td1.innerText = "Cell 1";
// td2.innerText = "Cell 2";
// tr.appendChild(td1);
// tr.appendChild(td2);
// table.appendChild(tr);
// document.body.appendChild(table);

/* 3} Create an element with 3 children Now change the color of first and 
last element to given
*/
// let div = document.createElement("div");
// div.className = "container";

// let p1 = document.createElement("p");
// p1.innerText = "Hello Amrit";

// let p2 = document.createElement("p");
// p2.innerText = "Kya hal chal";

// let p3 = document.createElement("p");
// p3.innerText = "Okay Bye";

// div.appendChild(p1);
// div.appendChild(p2);
// div.appendChild(p3);

// document.body.appendChild(div);

// div.firstElementChild.style.color = "red";
// div.lastElementChild.style.color = "blue";

/* 4} Write a js code to change background of 
  all <li> tags to green.
*/

document.querySelectorAll("li").forEach((li) => {
  li.style.backgroundColor = "green";
})

