let age = 30 ;
let temperature = 32.14123; 
let amount = 100000;
// console.log(age);
// console.log(temperature);

console.log(temperature.toFixed(2)); // 32.14
console.log(amount.toLocaleString()); // 100,000
console.log(Math.PI); // 3.141592653589793
console.log(Math.floor(temperature)); // 32
console.log(Math.ceil(temperature)); // 33
console.log(Math.random()); // 0.123456789 (random number between 0 and 1)
console.log(Math.floor(Math.random()*10  )); // 1.23456789 (random number between 0 and 10)

let min = 50;
let max = 100;
let random = Math.floor(Math.random() * (max-min)+1)+min; // random number between 50 and 100  
console.log(random);

//for ludo game we need random number between 1 and 6
const MIN = 1 ;
const MAX = 6 ;

let randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; // random number between 1 and 6
console.log(randomNumber);

const Min = 100000 ; 
const Max = 999999 ;

let otp = Math.floor(Math.random() * (Max - Min + 1)) + Min; // random number between 100000 and 999999
console.log(otp);