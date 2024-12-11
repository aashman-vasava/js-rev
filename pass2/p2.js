// Math = build-in object that provides a colloection of properties and method

let x =3.99;
let y = 10;
let z;

// z =  Math.round(3.999);
// z = Math.floor(x)
// z = Math.ceil(x)
// z = Math.sin(45)
// z = Math.cos(0)
// z = Math.tan(45)
// z = Math.sqrt(64)
// z = Math.max(8,99)

// z = Math.abs(-9.999 )
// z  = Math.log(10)
// z = Math.log10(10)
// z = Math.sign(-33333)
// z = Math.pow(2,y)
// z = Math.trunc(x)


//generate random number : between min - max
let min = 1, max = 10
z = Math.floor(Math.random()*max) +min

console.log(z)

document.getElementById("myH1").textContent = z;
