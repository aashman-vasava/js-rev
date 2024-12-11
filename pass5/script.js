// ternary operator = a shortcut to if{} ans else{} statements
//                     helps to assign a variable based on a condition
                    // condition ? codeTrue : codeFalse;
                
let age = 18;
let message = age>=18?"you can vote":"you cannot vote";
console.log(message)

let isStudent = true;
let message2 = isStudent?"you are student":"you are not student";
console.log(message2)

//find weekday or weekend
// let day = prompt("Enter day number : ");
// let msg = day<6?"weekday":'weekend';
// console.log(msg)
const msg = document.getElementById("myH1");
if(day == 1){
    // console.log("monday")
    msg.textContent = "Monday"
}else if(day == 2){
    // console.log("tuesday")
    msg.textContent = "tuesday"
}else if(day == 3){
    // console.log("wednesday")
    msg.textContent = "wednesday"
    
}else if(day == 4){
    // console.log("thuresday")
    msg.textContent = "thuresday"
}else if(day == 5){
    // console.log("friday")
    msg.textContent = "friday"
}else if(day == 6){
    // console.log('saturday')
    msg.textContent = "saturday"
}else if(day == 7) {
    // console.log('sunday')
    msg.textContent = 'sunday'
}else{
    // console.log("enter valid input")
    msg.textContent = "enter valid input"
}

// switch = can be an efficient replacement to many else if statements

let dayNumber = prompt("enter day num");
switch(dayNumber){
    case 1:
        msg.textContent = "is is Monday"
        break;
    case 2:
        msg.textContent = "is is tuesday"
        break;
    case 3:
            msg.textContent = "is is wedesnday"
            break;
     case 4:
                msg.textContent = "is is thuresday"
                break;
    case 5:
                msg.textContent = "is is friday"
                break;
     case 6:
                msg.textContent = "is is saturday"
                break;
     case 7:
                msg.textContent = "is is Sunday"
                break;
     default:
                msg.textContent = "Enter valid day number"
                break;
        
}
