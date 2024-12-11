// string methods = allows to manipulate and work with strings

let username = " helloWorld"

// console.log(username.charAt(3));
// username.toLowerCase();
// console.log(username.indexOf('l'))
// console.log(username.length)
// username = username.toLowerCase()
// username = username.toUpperCase()
// username = username.trim()
// username = username.repeat(4)
// let result = username.startsWith(" ")
// result = username.endsWith('d')
// console.log(result)

console.log(username)

let phoneNo = "123-345-987";
// phoneNo = phoneNo.replaceAll("-", "/")
// phoneNo = phoneNo.padStart(10, "1")
phoneNo = phoneNo.padEnd(20, "0")
console.log(phoneNo)

// string slicing = creating a substring from  a portion of another string

// string.sclice(start, end);

const fullName = "aashman vasava"
// let firstName = fullName.slice(0,7)
// console.log(firstName)

// let lastName = fullName.slice(-3)
// console.log(lastName)

let firstName = fullName.slice(0, fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" "))
console.log(firstName+" "+lastName)

let email = "abc@gmail.com"
let myUserName = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@"))
console.log(myUserName+ " "+extension)