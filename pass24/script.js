// synchronous = executes line by line consecutively in a sequential manner.
                // code that waits for an operation to complete.

// asynchronous = allows multiple operations to be performed concureently without watiting.
                // doesn't block the execution flow and allows the program to continue.
                // (I/O operations, netweork req, fetching data)
                // Handled wih : callbacks, promises, async/await.
// 
// console.log('hello world')

function fun1(callback){

    setTimeout(() => {
        console.log('task 1')
        callback()

    }, 3000);
}

function fun2(){
    console.log('task 2')
console.log('task 3')
console.log('task 4')
}

fun1(fun2)


