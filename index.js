
let counterEl = document.getElementById("counter");

let messageEl = document.getElementById("message");

let counter = 0;

function onDecCounter(){
    counter = counter-1;

    counterEl.textContent = counter;

    if(counter<0){

        counterEl.style.color="red";

    }
    else if(counter===0){

        counterEl.style.color="black";

    }
    else{
        counterEl.style.color="green";
    }

    messageEl.textContent = "You are Decrementing The Value!!!";
  
}



function onIncCounter(){

    counter = counter+1;

    counterEl.textContent = counter;

    if(counter<0){

        counterEl.style.color="red";
    
    }
    else if(counter===0){
    
        counterEl.style.color="black";
    
    }
    else{
        counterEl.style.color="green";
    }
    messageEl.textContent = "You are Incrementing The Value!!!";
}

