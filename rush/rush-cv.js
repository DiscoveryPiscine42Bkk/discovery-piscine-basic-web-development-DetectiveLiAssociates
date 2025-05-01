let carderPosition=1;

carderDisplay(carderPosition);

function nextCarder(n){
    carderDisplay(carderPosition+=n);
}

function carderDisplay(n){
    let carderThis=document.getElementsByClassName("profileCarder");
    if(n>carderThis.length) { 
        carderPosition=1; 
    }
    if(n<1){ 
        carderPosition=carderThis.length; 
    }
    for(let i=0;i<carderThis.length;i++){
        carderThis[i].style.display="none";
    }
    carderThis[carderPosition-1].style.display="block";
}