// forEach() = method used to iterate over the elements
// of an array and apply a specified function (callback) to each element

// array.forEach(callback)


let nums = [1,2,3,4,5]

// nums.forEach(double)
// nums.forEach(display)
nums.forEach(squre)
// nums.forEach(display)

function display(element){
    console.log(element)
}

// element, index, array are provided. and order matters
function double(element, index, array){
    array[index] = element*2
}

function squre(element, index, array){
    array[index] = Math.pow(element,2)
}

// ex2
let fruits = ['apple', 'banana', 'cherry', 'watermelon', 'avocado','greps']
fruits.forEach(upperCase)
// fruits.forEach(displayFruits)

function displayFruits(element){
    console.log(element)
}

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }


// .map() = accepts a callback and applies that function to each element of an array,
//          then return a new array

const numbers = [1,2,3,4,5];
const result = numbers.map(cube)

// console.log(numbers)
// console.log(result)

function cube(element){
    return Math.pow(element,3)
}

// ex2
const student = [
    'aashman', 'archit', 'ashish'
]

const ans = student.map(capitalize)
// console.log(student)    //here we don't loose original array
// console.log(ans)

function upperCase(element){
    return element.toUpperCase()
}

function capitalize(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}

// ex3: formate dates
const dates = ['2002-12-31','2020-8-21', '2024-2-20'];
const z = dates.map(formateDate)
// console.log(z)

function formateDate(element){
    const parts = element.split('-')
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}


// 4h:33m -
// .filter() : creates a new array by filtering out elememts

let num = [1,2,3,4,5,6,7,8,9];
let evenNums = num.filter(isEven);
console.log(evenNums)//
let oddNums = num.filter(isOdd)
console.log(oddNums)

function isEven(element){
    return element%2 === 0;
}

function isOdd(element){
    return element%2 !== 0;
}

// ex2: filter by ages whether the person is adult or not
let ages = [16,14,20,18,12,33,72,11];
let adults = ages.filter(isAdult)
console.log(adults)
let child = ages.filter(isChild)
console.log(child)
function isAdult(element){
    return element>=18;
}
function isChild(element){
    return element<18;
}

// .reduce() =reduce the elements of an array to a single value

const prices = [10, 20, 5, 50, 30, 5];
const total = prices.reduce(sum);
console.log(`₨${total.toFixed(2)}`)

function sum(accumulator, element){
    return accumulator+element;
}
// ex2:find max grade
const grades = [90, 98, 74, 13, 53,22, 44, 58];
const topper = grades.reduce(findMax);
console.log(`top grade is ${topper}`)

function findMax(accumulator, element){
    return Math.max(accumulator, element)
}