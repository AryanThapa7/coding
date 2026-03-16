// JS Basic questions 

// 1. Create two variables firstName and lastName (String), then print: Hello, <firstName> <lastName>!.
let firstName = "John";
let lastName = "Doe";

console.log("Hello, " + firstName + " " + lastName + "!");

// 2. Create a variable age (Number) and print: I am <age> years old.
let age = 19;

console.log("I am " + age + " years old");

// 3. Declare num1 and num2 (Number), then print their sum, difference, product, and quotient.
let num1 = 10;
let num2 = 5;

console.log("Sum: " + (num1 + num2));
console.log("Difference: " + (num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Quotient: " + (num1 / num2));

// 4. Store a price in itemPrice (Number) and quantity in qty (Number). Print total cost: Total = <value>.

let itemPrice = 25;
let qty = 4;

let total = itemPrice * qty;
console.log("Total = " + total);

/*  5. Create a variable city (String). Print:

Original city name
City name in uppercase
City name in lowercase
*/ 

let city = "Kathmandu";

console.log("Original: " + city);
console.log("Uppercase: " + city.toUpperCase());
console.log("Lowercase: " + city.toLowerCase());

// 6. Create a String variable message = "JavaScript" and print its length.
let message = "JavaScript";

console.log("Length: " + message.length);

/* 7. Create a Number variable marks and print whether it is:

Greater than 50
Equal to 50
Less than 50
*/
let marks = 75;

console.log("Greater than 50: " + (marks > 50));
console.log("Equal to 50: " + (marks == 50));
console.log("Less than 50: " + (marks < 50));

// 8. Store radius (Number) and calculate area of a circle using πr2πr2. Print result up to 2 decimals.
let radius = 7;

let area = Math.PI * radius * radius;
console.log("Area: " + area.toFixed(2));

// 9. Create variables a and b (Number), swap their values using a third variable, and print before/after values.
let a = 10;
let b = 20;

console.log("Before :  a: " + a + ", b: " + b);

let temp = a;
a = b;
b = temp;

console.log("After :  a: " + a + ", b: " + b);

// 10. Create a String fullName = "john doe" and convert it to "John Doe" (capitalize first letter of each word).
let fullName = "john doe";

let capitalized = fullName
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized);

/* 11. Create a Number seconds and convert it into minutes and remaining seconds.
Example: 130 → 2 minutes 10 seconds.
*/ 
let seconds = 130;

let minutes = Math.floor(seconds / 60);
let remainingSeconds = seconds % 60;

console.log(minutes + " minutes " + remainingSeconds + " seconds");

/* 12. Store a String email and print:

First character
Last character
Whether it contains "@".
*/
let email = "hello@example.com";

console.log("First character: " + email[0]);
console.log("Last character: " + email[email.length - 1]);
console.log("Contains @: " + email.includes("@"));
