// NodeList = static collection of HTML elements by (id, class, element)
            // Can be created by using querySelectorAll()
            //  Similare to an array but no (map, filter, reduce) but has forEach()
            //  NodeList won't update to automatically reflect changes.
// 

let buttons = document.querySelectorAll('.myButtons')
console.log(buttons)

// add html/css properties
 buttons.forEach(button => {
    button.style.backgroundColor = 'pink'
    button.textContent +="😒"
 })

//  click event listener
buttons.forEach(button => {
    button.addEventListener('click', event =>{
        event.target.style.backgroundColor ='tomato'
    })
})

// mouse over 
buttons.forEach(button =>{
    button.addEventListener('mouseover', event=>{
        event.target.textContent ="Ouch ❤️"
    })
   
})

buttons.forEach(button => {
    button.addEventListener('mouseout', event=>{
        event.target.textContent = 'Help'
        event.target.style.backgroundColor ='teal'
    })
})

// add element

const newButton = document.createElement('button');
newButton.textContent = 'Button 5'
newButton.classList = 'myButtons'
document.body.appendChild(newButton)

buttons = document.querySelectorAll('.myButtons');
buttons.forEach(button => {
    button.addEventListener('click', event =>{
        event.target.style.backgroundColor ='tomato'
    })
})

// remove element
buttons.forEach(button =>{
    button.addEventListener('click', event=>{
        event.target.remove()
        buttons = document.querySelectorAll('.myButtons');
        console.log(buttons)
    })
})