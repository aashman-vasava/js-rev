// inheritance = allows a new class to inherit properties and methods
//              from an existing class (parent -> child)
//              helps with code reusability


class Mobile{
    os = "no specified";
    constructor(name, price, storage){
        this.name = name
        this.price = price
        this.storage = storage
    }

    call(){
        console.log(`${this.name} is calling`)
    }
    getSpecification(){
        console.log(`name : ${this.name}`)
        console.log(`price : ${this.price}INR`)
        console.log(`storage : ${this.storage}GB`)
        console.log(`os : ${this.os}`)
    }
}

class Iphone extends Mobile{
    os = 'ios'
    

}
class Android extends Mobile{
    os = 'android'
}

const realme = new Android('realme7', 15000, 64);
realme.os = 'undefined----'
// console.log(realme.os)
// realme.getSpecification()

const iphone = new Iphone('iphone6', 45000, 265)
// iphone.getSpecification()



// super = keyword is used in classes to call the constructor or access 
//          the properties and methods of a parent (superclass)
//  this = this object
// super = the parent class

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getDetails(){
        console.log(`name : ${this.name}`)
        console.log(`age : ${this.age}`)
    }
    
}

class Horse extends Animal{
    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age)
        this.swimSpeed = swimSpeed
    }
    getDetails(){
        super.getDetails()
        console.log(`swinspeed : ${this.swimSpeed}`)
    }
}

class Bird extends Animal{
    constructor(name, age, fleySpeed){
        super(name, age)
        this.fleySpeed = fleySpeed
    }
}

const horse = new Horse('alex',14, 20);
const fish = new Fish('nimo', 1,13);
const crow = new Bird('COCO',1.3, 10)

fish.getDetails()

crow.getDetails()


