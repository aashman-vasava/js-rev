//.checked => property that determines the checked state of an 
//            Html checkbox or radio btn element

const myCheckBox = document.getElementById("subscribe")
const visaBtn = document.getElementById("visa")
const masterCard = document.getElementById("masterCard")
const paypal = document.getElementById("paypal")
const SubmitBtn = document.getElementById("btn")
const result = document.getElementById("result")
const paymentResult = document.getElementById("paymentResult")


SubmitBtn.onclick = function(){
    if(myCheckBox.checked){
        result.textContent =" You are Subscribed"
    }else{
        result.textContent= "You are NOT Subscribed"
    }


    if(visaBtn.checked){
        paymentResult.textContent = "Payment using VISA CARD"
    }else if(paypal.checked){
        paymentResult.textContent = "Payment using PAYPAL"
    }else if(masterCard.checked){
        paymentResult.textContent = "Payment using Master Card"
    }else{
        paymentResult.textContent = "Please select Appropriate Payment method"
    }
}


// continue: 1H: 42m