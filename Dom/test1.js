// step 1 : create the element
const newH1 = document.createElement('h1');

// step 2 : add attributes/ properties
newH1.textContent = "Hello world"
newH1.id = 'myH1';
newH1.style.color = 'blue'
newH1.style.textAlign = 'center'


// step 3 : append element to DOM

// document.body.append(newH1)
// document.body.prepend(newH1)
// document.getElementById('box1').append(newH1)
document.getElementById('box1').prepend(newH1)

// const box2 = document.getElementById('box2')
// document.body.insertBefore(newH1,box2)

// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1, boxes[1])


// remove html element
// document.body.removeChild(newH1)
// document.getElementById('box1').removeChild(newH1)


// ---ol list ------
// create li item
const listItem = document.createElement('li')

// add attributes/ properties
listItem.textContent = "laptop"
listItem.id = 'laptop'
listItem.style.backgroundColor = 'teal'


// add in dom
// document.body.prepend(listItem)
document.getElementById('fruites').prepend(listItem)