// spread operator = ... 
//                  allows an iterable such as an arry or string to be expanded into seperate elements
//                  (unpacks the elements)

let nums = [1,2,3,45,6];
let maximum = Math.max(...nums)

console.log(maximum)

let username = "helloworld"
let letters = [...username].join('-');
console.log(letters)

let fruits = ["banana","apple", "orange"]
let vagetables = ['carrots', 'potatoes', 'tomatos']

let food = [...fruits, ...vagetables, "chocolates"]
console.log(food)



// rest parameters = (...rest)
                    // allows a function work with a variable number of aruments by bundling them into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

function openFridge(...foods){
    console.log(foods)
}

const food1 = "pizza"
const food2 = 'hamburger'
const food3 = 'hotdog'
const food4 = 'sushi'

openFridge(food1, food2, food3, food4)

function sum(...numbers){
    let result = 0;
    for(let num of numbers){
        result+=num;
    }
    return result;
}

const x = sum(1,2,3,4,5,6,7,8,9,0,20)
console.log(x)

function combineStrings(...strs){
    let ans = [...strs]
    return ans.join(' ')
}

const result = combineStrings('hello', 'world', 'learning','js')
console.log(result)