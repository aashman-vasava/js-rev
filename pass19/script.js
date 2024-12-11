// getter = special method that mekes a property readable
// setter = special methos that makes a property writeable

// validate and modify a value when reading/writing a property
// 5H: 49m
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;     //_width = private property
        }else{
            console.error(`width must be positive value`)
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;     //_height = private property
        }else{
            console.error(`height must be positive value`)
        }
    }
    get width(){
        return this._width.toFixed(1)
    }
    get height(){
        return this._height.toFixed(1)
    }
    get area(){
        return this._width*this._height
    }
}
const rectangle = new Rectangle(3,4);

rectangle.width = 900
rectangle.height = 9

// console.log(rectangle.width)
// console.log(rectangle.height)
// console.log(rectangle.area)


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === 'string' && newFirstName.length>0){
            this._firstName = newFirstName
        }else{
            console.error(`firstName must be non-empty string`)
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === 'string' && newLastName.length>0){
            this._lastName = newLastName
        }else{
            console.error(`lastName must be non-empty string`)
        }
    }

    set age(newAge){
        if(newAge>0){
            this._age = newAge
        }else{
            console.error(`age must more than 0`)
        }
    }
    get firstName(){
        return this._firstName
    }
    get lastName(){
        return this._lastName
    }
    get age(){
        return this._age
    }
    get fullName(){
        return this._firstName +" "+this._lastName
    }
}

// const person = new Person('aashman', 'vasava', 5959)
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.fullName)

// destructing = extract values from arrays and objects, 
//              then assign them to variables in convenient way
//              [] = to perform array destructring
//              {} = to persom object destructuring

// 6H:1m

// ex1
let a =10, b=99;
[a,b] = [b,a]
// console.log(a,b)
// ex2
const color = ['red','green','blue','black', 'white'];
// [color[0], color[color.length-1]] = [color[color.length-1],color[0]]
// console.log(color)

//ex3: assign array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = color;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors)

// ex4: extract values from object
const person1 = {
    firstName : "john",
    lastName : 'dobe',
    age:499,
    job:'SE'
}

const person2 = {
    firstName : "Alice",
    lastName : 'park',
    age:888
}

const {firstName, lastName, age, job = 'Unempliyed'} = person2;  //job = 'unemployed' is default value

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(job)

// ex5: extract values in function parameters
function displayPerson( {firstName, lastName, age, job = 'Unemployed'}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age : ${age}`)
    console.log(`job : ${job}`)
}

displayPerson(person2)