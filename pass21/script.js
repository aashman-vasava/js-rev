// Date Objects: Objects that contain values that represent dates and times.
//              These date objects can be changed and formatted

// Date(year, month, day, hours, min, sec, ms)
// const date = new Date(2024,0,1,2,3,4,5)
// const date = new Date(858588)
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours()
const min = date.getMinutes()
const sec = date.getSeconds();
const dayOfWeek = date.getDay()


// console.log(year)

date.setFullYear(2024)
date.setMonth(7)
date.setDate(12)
date.setHours(3)
date.setMinutes(11);
date.setSeconds(53)
// console.log(date)

const date1 = new Date('2024-12-31');
const date2 = new Date('2025-01-01');
if(date2>date1){
    // console.log('HAPPY NEW YEAR')
}


// closure = A function defined inside of another function, 
            // the inner finction has access to the variables
            // and scope of the outer function.
            // Allow for private variables and state maintenance
            // used frrequently in js framworks: React, Vue, Angular
function outer(){
    let message = "hello"
    function inner(){
        console.log(message);
    }
    inner()
}
// outer()


function createCounter(){

    let count = 0;
    function increment(){
        count++;
        console.log(`incremented by ${count}`)
    }

    function getCount(){
        return count
    }

    return {increment, getCount}  //return type object and return function as property

}

const counter = createCounter();
counter.increment()
counter.increment()
counter.increment()

// counter.count = 0;
// console.log(counter.count)

// console.log(`current count value is : ${counter.getCount()}`)


function createGame(){

    let score = 0;
    
    function increaseScore(point){
        score += point;
        console.log(`+${point}pts`)
    }
    function decreaseScore(point){
        score -= point;
        console.log(`-${point}pts`)
    }
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

const play =  createGame()
play.increaseScore(5)
play.increaseScore(5)
play.increaseScore(5)
play.decreaseScore(9)
play.decreaseScore(2)
play.score = 1000;
console.log(play.score)
console.log(`final score is ${play.getScore()}pts`)


            


// 6H:48m


