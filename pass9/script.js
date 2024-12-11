//function = A section of reusable code.
        //   Declare code once, use it whenver you want. 
        // call the function to execute that code.

function happyBirthday(name, age){          // parameters here
    console.log('heppy birthday')
    console.log('heppy birthday')
    console.log(`happy birthday dear ${name}`)
    console.log(`you are ${age} years old`)
}

// happyBirthday("aashman", 89);   //arguments here

function add(x,y){
    // let result = x+y;
    // console.log(result);
    // return result;
    return x+y;
}
// console.log(add(5,5))


function isEven(number){
    // if(number%2 === 0){
    //     return true;
    // }else{
    //     return false;
    // }
    return number%2===0?true:false;
}

console.log(isEven(20));

