// Error = An Object that is created to represent a problem that  occurs 
//         Occurs often with user input or establishing a connection


console.log("h  j")
// network errors
// promises rejction
// security errors


// an error can stop the execution flow: how to solve
// using
// try{ } = enclosed code that might potentially cause an error
// catch{ } = catch and handle any throuwn Errors from try { }
// finally { } = (optional) Always executes. used mostly for clean up
            // ex. colse files, close connections, release resources.
// 


try{
    console.log(x)
    console.log('hello ')
}catch(error){
    console.error(error)
}
finally{
    console.log('solved problem sucessfully')
}


try {
    const dividend = window.prompt('Enter dividedn')
const divider = window.prompt('enter devider')

if(divider === 0){
    throw new Error('Cannot divide by 0')
}
const result = dividend/divider;
console.lpg(result)
    
} catch (error) {
    console.error(error)
}