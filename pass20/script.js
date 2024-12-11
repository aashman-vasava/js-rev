// nested objects = objects inside of other object
//              Allows you to represent more complex data Structures
//              Child object is enclosed by a parent obj.

//      Person{ Address{}, ContactInfo{}} 
//  ShoppingCart{ Keyboard{}, Mouse{}, Monitor{}}

const person = {
    name: 'Luke Park',
    age:555,
    hobbies:['cricket', 'painting', 'tv shows'],
    address:{
        street: '123 A4 colony',
        city:'Dholakpur',
        country:'Pogo'
    }
}

// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies)
// console.log(person.address)

for(const property in person.address){
    // console.log(person.address[property])
}

class Person {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)

    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person('Bob', 444, '123 Future st.','Delhi','India' );
const person2 = new Person('Naruto', 55, '128 Uzumaki clan', 'Leaf Village', 'Comic')

// console.log(person2.address.city)


// array of objects : 6H:20m
const fruites = [
    {name:'apple', color:'red', calories:55},
    {name:'banana', color:'yellow', calories:42},
    {name:'orange', color:'oragne', calories:101},
    {name:'Pinepple', color:'yellow', calories:62},
]

// console.log(fruites[2].name)
    
fruites.push({name:'grapes', color:'purple', calories:99})
// fruites.pop()
// fruites.splice(1,2) 
// console.log(fruites)

// forEach()
// fruites.forEach(fruit => console.log(fruit.name ))


const fruitNames = fruites.map(fruit => fruit.name)
// console.log(fruitNames)

const fruitYellow = fruites.filter(fruit => fruit.color ==='yellow')
const lowCaloriesFruit = fruites.filter(fruit => fruit.calories < 100);
const highCaloriesFruit = fruites.filter(fruit => fruit.calories > 100)
// console.log(lowCaloriesFruit)
// console.log(highCaloriesFruit)
// console.log(fruitYellow)

const maxFruit = fruites.reduce((max, fruit) => max.calories < fruit.calories ? fruit:max )
// console.log(maxFruit)



// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbs + symbols)

let names = ['cow', 'elephant', 'apple', 'grapes', 'oragne', 'bol']
names.sort()
// console.log(names)
const numbs = [1, 10, 9,8,7,6,3,5,4,2]
numbs.sort((a,b) => a-b)
// console.log(numbs)


// let sort object using some property
const student = [
    {name:'bob', age:22, gpa:3.3},
    {name:'sasuke', age:23, gpa:1.5},
    {name:'luke', age:28, gpa:4.0},
    {name:'akaza', age:19, gpa:2.3},
    {name:'alice', age:21, gpa:3.0},
]

// student.sort( (a, b) => a.age - b.age)
student.sort( (a,b) => a.name.localeCompare(b.name))
console.log(student)