let username = "John Doe";
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

