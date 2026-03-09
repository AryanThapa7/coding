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
*/
let username = "John Doe";
let email = "john.doe@example.com";
// console.log(email.split(".")[0]); // it will split the email string into an array of three elements and return the first element which is the username part of the email address

let fname = " John ";
let lname = " Doe ";
console.log("My first name is " + fname + " and my last name is " + lname); // it will remove the leading and trailing whitespace from the string
console.log(`My first name is ${fname} and my last name is ${lname}`); // it will remove the leading and trailing whitespace from the string
