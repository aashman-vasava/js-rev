// function declaration = define a reusable block of code that performs a specific task
function helloWorld(){
    console.log('hllo world')
}
// helloWorld()

// function expressions = a way to define functions as values or variables
//      1. callbacks is asynchronous operations
//      2. Higher-Order Functions
//      3.Closures
//      4. Event Listerns




const hello = function(){
    console.log('hello aashman')
}

// hello()

// setTimeout(callback, 3000);
// setTimeout(hello, 3000);
setTimeout(function(){
    console.log('Good Bye ')
}, 2000)


const nums = [1,2,3,4,5,6,7,8];
const squares = nums.map(function(element){
    return Math.pow(element, 2)
})
console.log(squares)

const cube = nums.map(function(element){
    return Math.pow(element,3)
})
console.log(cube)

const evenNums = squares.filter(function(element){
    return element%2===0;
})

console.log(evenNums)

const oddNums = squares.filter(function(element){
    return element%2 !==0
})
console.log(oddNums)

const total = nums.reduce(function(accumulator, element){
    return accumulator+element;
})
console.log(total)

const numbers = [];
for(let i=1; i<=100; i++){
    numbers[i] = i;
}
console.log(numbers)



