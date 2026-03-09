/* let username = "John Doe";
console.log(typeof username);
console.log(username[1]);
console.log(username.charAt(6));
console.log(username.length);
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.lastIndexOf("o"));
console.log(username.lastIndexOf("z"));
console.log(username.includes("Doe"));
console.log(username.includes("."));
console.log(username.slice(0, 4)); // because the end index is exclusive and the start index is inclusive and the end index is 4 so it will return the characters from index 0 to index 3


let email = "susan.shakya@deerwalk.edu.np";

let username = email.slice(0, email.indexOf("."));

console.log(username);

let username = "John Doe";
let email = "john.doe@example.com";
// console.log(email.split(".")[0]); // it will split the email string into an array of three elements and return the first element which is the username part of the email address

let fname = " John ";
let lname = " Doe ";
console.log("My first name is " + fname + " and my last name is " + lname); // it will remove the leading and trailing whitespace from the string
console.log(`My first name is ${fname} and my last name is ${lname}`); // it will remove the leading and trailing whitespace from the string

// TYPE CASTING : 
// implicit type casting : when the javascript engine automatically converts one data type to another data type
// explicit type casting : when the programmer manually converts one data type to another data type

let num1 = 12;
let num2 = "20";
console.log(num1 + num2); // it will concatenate the two values and return "1020" because the + operator is used for both addition and concatenation and when one of the operands is a string, it will convert the other operand to a string and concatenate them


let num1 = 1;
let num2 = "2";
console.log(num1 + Number(num2)); // it will convert the string "2" to a number and return 3

*/

let num1 = 1;
let num2 = "two";
console.log(1 + 2 + "3"); // it will first add the two numbers and return 3 and then it will concatenate the string "3" to the result and return "33"