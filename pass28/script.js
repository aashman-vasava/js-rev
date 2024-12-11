// classList = Element property in js used to interact with an element's list of classes (css classes)
            // Allows you to make reusable classes for many elements across your webpage.
// 

const myButton = document.getElementById('myButton')

// add()
myButton.classList.add('enable')

// remove()
// myButton.classList.remove('enable')

// toggle(Remove if present, Add if not)
myButton.addEventListener('mouseover', event =>{
    event.target.classList.toggle('hover')
})
myButton.addEventListener('mouseout', event =>{
    event.target.classList.toggle('hover')
})

// replace(oldClass, newClass)
// contains()
myButton.addEventListener('click', event =>{
    if(event.target.classList.contains('disable')){
        event.target.textContent +="😉😉"
    }else{
        event.target.classList.replace('enable', 'disable')
    }
})


const myH1 = document.getElementById('myH1')
myH1.classList.add('enable')
myH1.addEventListener('click', event =>{
    if(event.target.classList.contains('disable')){
        event.target.textContent +="😉😉"
    }else{

        event.target.classList.replace('enable', 'disable')
    }
})


// for 1-4 buttons
let myButtons = document.querySelectorAll('.btns')
console.log(myButtons)

myButtons.forEach(button => {
    button.classList.add('enable')
})

myButtons.forEach(button => {
    button.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover')
    })
})
myButtons.forEach(button => {
    button.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover')
    })
})