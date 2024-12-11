// eventListener = listen for specific events to create interactive web pages 
//                  events : click, mouseover, mouseout

//   .addEventListener(event, callback)


const myBox  = document.getElementById('myBox')
const myBtn = document.getElementById('myBtn')


function chnageColor(event){
    // console.log(event)
    myBox.style.backgroundColor = 'yellow'
    myBox.textContent = 'On 🤦‍♂️'
}
myBtn.addEventListener('click', chnageColor)

myBtn.addEventListener('mouseover', event => {
    myBox.textContent = "It's Heavy Move off🪨🪨"
    myBox.style.chnageColor = 'blue'
    myBox.style.backgroundColor = 'pink'
 })

 myBtn.addEventListener('mouseout', function(event){
    myBox.textContent = "thank you "
    myBox.style.backgroundColor ='red'
 })

//  9H:13m

// event: keydown, keyup
const box = document.getElementById('box');
const myP = document.getElementById('myP')

let moveAmout = 10;
// cordinates
let x = 0;
let y = 0;
document.addEventListener('keydown',(event) => {
    // console.log(event)
    console.log(`key down : ${event.key}` , typeof event.key);
    // myP.style.backgroundColor = 'black'
//    myP.textContent = `${event.key}`

    // box.textContent = "😒"
    // box.style.backgroundColor = 'yellow'

    // position the box
    if(event.key){
        switch(event.key){
            case 'ArrowUp':
                y -= moveAmout;
                break;
            case 'ArrowDown':
                y += moveAmout;
                break;
            case 'ArrowLeft':
                x -=moveAmout;
                break;
            case 'ArrowRight':
                x+=moveAmout;
                break;    
        }
        myBox.style.top = `${y}px;`
        myBox.style.left = `${x}px;`
    }
    

})

document.addEventListener('keyup', (event) => {
    // console.log(`key up : ${event.key}`)
    //    box.textContent = "😊"
    // box.style.backgroundColor = 'teal'

})