// Method chaining = Calling one method after another in one continuos line of code


let username = window.prompt("Enter username")
// no method chaining

// let letter = username.charAt(0)
// letter = letter.toUpperCase()
// console.log(letter)
// let extraChars = username.slice(1)
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username)

// wih method chaining..

username = username.trim().charAt(0).toUpperCase()+ username.trim().slice(1).toLowerCase();
console.log(username)
