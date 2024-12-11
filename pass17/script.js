// class:   (ES6 feature) provide a more structured and cleaner way to 
            // work with objectss comparted to traditional constructor function
//          ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`product : ${this.name}`)
        console.log(`price: ${this.price}INR`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price*salesTax)
    }
}

const salesTax = 0.05;

const product1 = new Product('mobile', 39000)
const product2 = new Product('Car',900000)

let total = product1.calculateTotal(salesTax)
console.log(total)

// product1.displayProduct()
// product2.displayProduct()

// static : keyword that defines properties or methoss that belong
//          to a class itself rather than the objects created from that class
//          (class owns anything that is static, while objects don't)

class MathUtils{
    static  PI = 3.14;

    static area(radius){
        return Math.pow(radius,2)*this.PI;
    }
    static getDiameter(radius){
        return 2*radius;
    }
    static getCircumference(radius){
        return 2*this.PI*radius;
    }
}

console.log(MathUtils.PI)
let x = MathUtils.area(10);
let y = MathUtils.getDiameter(10)
let z = MathUtils.getCircumference(10)
console.log(x, y, z);
