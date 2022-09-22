const hover_btn = document.querySelector(".hover-btn"); 
let value;

hover_btn.addEventListener('mouseover', function(){
    
    console.log("hover "+value);

    if(value ==0 ){
        value = 170;
    }

    else{
        value = 0;
    }

    hover_btn.style.transform = 'translateX('+value+'%)';
    //transform: translateX();
})