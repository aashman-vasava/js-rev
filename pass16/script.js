// Object = A collection of related properties and/or methods
            // object functions are called methods
            // Can represent real world objects (people, products,places)
            // obj-name  = {
            //                  key:value,
                                // function(){} this is method,
            //              }


const person1 = {
    firstName: 'aashman',
    lastName:'vasava',
    age:99,
    isEmployed:false,
    sayHello:function(){
        console.log(`hello aashman`)
    },
    eat:()=>console.log('eating shusi')
}
// console.log(person1.firstName)
// person1.sayHello();

// 5H:3m 
const person2 = {
    firstName:'suraj',
    lastName:'vasava',
    age:299,
    isEmployed:true,
    sayHello:()=>console.log("hey, i'm suraj....."),
    eat:()=>console.log('eating ramen')
}

// person2.sayHello()
// person2.eat()


// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//          it is not work with arrow functions
//          person.name = this.name

const person = {
    name:'tomy',
    favFood:'pizza',
    sayHello:function(){console.log(`hii ${this.name}`)}, 
    eat:function(){console.log(`${this.name} is eating ${this.favFood}`)}

}
// person.sayHello()
// person.eat()

// constructor = special methos for defining the properties and methods of objects
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year, 
    this.color = color, 
    this.drive = function(){console.log(`you drive ${this.model}`)}
}

const car1 = new Car('Ford', 'Mustang',2020,'red')
const car2 = new Car('Alto','charger', 1990,'white')
console.log(car1)
console.log(car2)
car1.drive()