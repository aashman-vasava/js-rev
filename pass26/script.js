const box = document.getElementById('box')

let moveAmout = 20;
let x = 0, y=0;
document.addEventListener('keydown', event => {
    console.log(event.key)
    if(event.key.startsWith('Arrow')){
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
        box.style.top = `${y}px;`
        box.style.left = `${x}px;`
        // box.textContent ='hello'
    }
})



// 9H:24m
// hide image.
const mybutton = document.getElementById('myBtn')
const myImg = document.getElementById('myImg')

mybutton.addEventListener('click', event=>{
    if(myImg.style.display ==='none'){    //indtead of display we can use visibility as well
         myImg.style.display = 'block'
         mybutton.textContent = 'Hide'
    }else{

        myImg.style.display = 'none'
        mybutton.textContent = 'Show'
    }
})