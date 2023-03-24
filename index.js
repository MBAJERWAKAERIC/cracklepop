/*c onsole.log(" I love Yvette!");
console.log(" with my heart!");


let firstName = "Bro" //string
let age;
age = 21; //number
let student = true; //booleans

console.log("Hello", firstName);
console.log("you are ", age, "years old");
console.log("enroled:", student);

document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p2").innerHTML = "you are" + age + " years old";
document.getElementById("p3").innerHTML = "enroled: " + student;

let students = 20;
students = students - 1;
console.log(students);
let username = window.prompt("what is your username?");
console.log(username);*/
let username

document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;

}