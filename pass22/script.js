// setTimeout() = function in js that allows you to schedule.
                // the execution of a function after an amout of time (ms)
                // Times are approximate (varies based on the workload of the js runtime env.)

                // setTimeout(callback, delay);

function sayHello(){
    window.alert('hello')
}

// setTimeout(sayHello, 3000)
// setTimeout(function(){window.alert('hello user')}, 3000)

// clearTimeOUt(timeoutId) = can cancel a timeout before it triggers

// const timeoutId = setTimeout(()=>window.alert('hello ooo'), 3000)
// clearTimeout(timeoutId)

let timeoutId;
function startTimer(){
    timeoutId = setTimeout(()=>window.alert('hello'),3000)
    console.log('STARTER')
}

function clearTimer(){
    clearTimeout(timeoutId)
    console.log('CLEARED')
}
