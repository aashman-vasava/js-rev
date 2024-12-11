//accept use inputs
//1. easy way: window prompt
// let userName;
// userName = window.prompt("Enter username : ");
// console.log(userName)

//2. professional way = html textbox
// let userName;
// document.getElementById("myBtn").onclick = function(){
    // userName = document.getElementById("myText").value
    // alert('your username is '+userName)
    // document.getElementById('myH1').textContent = `your username is ${userName}`
// }


//typeconversion: change one type to another.
//why? --> diff datatypes behave differently.
//string: "4"+"3" = 43; while nums: 4+3=7

// let age = window.prompt("Enter your age ")
// age = Number(age)
// console.log(age)


// let x="aashman"
// let y = "aashman"
// let z = "aashman"

// x = Number(x)
// y = String(y)
// z = Boolean(z)

// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)

//calculating area of circle
let radius, area;
const PI = 3.14;
document.getElementById("calArea").onclick = function(){
    radius = document.getElementById("myText").value 
    radius = Number(radius);
    area = PI*radius*radius

    document.getElementById("myH2").textContent = `area is : ${area}`
}