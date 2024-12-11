// DOM navigation = the process of navigating through the structure of an HTMl document using js.

// ---->   .firstElementChild
// const element = document.getElementById('fruites')
// const firstChild = element.firstElementChild;
// console.log(firstChild)
// firstChild.style.backgroundColor = "red"
// // or
// const ulElements = document.querySelectorAll('ul')
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow"
// })


// ------------- .lastElementChild --------
// const element  = document.getElementById('fruites');
// const lastChild = element.lastElementChild;
// lastChild.style.color = 'red'

// const ulElements = document.querySelectorAll('ul')
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.color = 'yellow'
// })


// --------------- .nextElementSibling ---------
// const element = document.getElementById('apple')
// const nextSibling = element.nextElementSibling;
// nextSibling.style.color = 'teal'

// ----------  .previousElementSibling ---------
// const element = document.getElementById('organge');
// const prevSibling = element.previousElementSibling;
// prevSibling.style.color = "red"



// -----------  .parentElement -----------
// const element = document.getElementById('apple');
// const parent = element.parentElement;
// parent.style.color = 'blue'


// ----------- .childern --------
const element = document.getElementById('fruites');
const children = element.children;
Array.from(children).forEach(child => {
    child.style.color = "pink"
})

children[0].style.color = 'green'