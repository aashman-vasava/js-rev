// DOM = document object model
//      object{}  that represents the page you see in the web browser and provides you with an API to interact with it.
//      Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
//      js can access the DOM to dynamically change the content, structure and style of a web page.



// element selectors = methods used to target and manipulate HTML elements.
// That used to select one or multiple HTML element from the DOM 
//
// 1.document.getElementById()  //element or null
const username = 'GoldFish'

const myMsg = document.getElementById('msg')
myMsg.textContent = 'WelCome '

myMsg.textContent  += username==="" ? 'guest': username;
myMsg.style.backgroundColor = 'pink'
myMsg.style.textAlign = 'center'

// 2. document.getElementsClassName() //html collection
const fruites = document.getElementsByClassName('fruites')
console.log(fruites)
fruites[0].style.backgroundColor = 'red'
fruites[1].style.backgroundColor = 'yellow'
fruites[2].style.backgroundColor = 'blue'


// 3. document.getElementsByTagName() //html collection
const h3Elements = document.getElementsByTagName('h3');
const liElements = document.getElementsByTagName('li')

console.log(h3Elements)
for(let element of h3Elements){
    element.style.backgroundColor = 'yellow'
}//or 
Array.from(h3Elements).forEach(h3Element =>{
    h3Element.style.backgroundColor = 'teal'
})


for(let item of liElements){
    item.style.backgroundColor = 'lightgreen'
}




// 4. document.querySelector() //first element or null
const element = document.querySelector('.fruites')
element.style.backgroundColor = 'pink'
element.style.color = 'white'

const h3 = document.querySelector('h3')
h3.style.backgroundColor = 'blue'


// 5.document.querySelectorAll()  //NodeList
const states = document.querySelectorAll('li')
console.log(states)
Array.from(states).forEach(state => {
    state.style.backgroundColor = 'lightBlue'
})
states.forEach(state =>{
    state.style.color ='red'
})

// 8H: 32m