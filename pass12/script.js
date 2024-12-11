// callback = a function that passed as an argument to another function

// used to handle asynchrounous operations:
// 1. reading a file 
// 2. network requests
// 3. interacting with databases

// 'hey, when you're done, call this next.

{
hello(wait)
goodBye()


    function hello(callback){
        // setTimeout(function(){
            console.log('hello')
            // },3000)
            callback();
        }
        
        function goodBye(){
            console.log('good bye!')
        }
        
        function wait(){
            console.log('waiting...')
        }
        
}
// ex2
sum(displayPage, 11,20)

function sum(callback, x,y){
    let result = x+y;
    callback(result)
}
function displayResult(result){
    console.log(result)
}

function displayPage(result){
    document.getElementById('myH1').textContent = result;
}

// note here whenever we pass call back it has no ()