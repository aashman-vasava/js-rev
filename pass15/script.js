// arrow function = a concise way to write function expressions
//                  good for simple function that you use only once
// 
// syntax : (parameters) => some code 

const hello = (name) => console.log(`Hello ${name}`)
hello('aashman')

setTimeout(()=> console.log('hello setTimeout'),3000)

const numbers = [1,2,3,4,5,6,7,8,9];

const squares = numbers.map((element) => Math.pow(element,2))
console.log(squares)
const cube = numbers.map((element) => Math.pow(element,3));
console.log(cube)

const evenNums = numbers.filter((element) => element%2 ===0);
console.log(evenNums)
const oddNums = numbers.filter((element) => element%2 !==0);
console.log(oddNums)

const total = numbers.reduce((accmulator, element) => accmulator+element)
console.log(total)