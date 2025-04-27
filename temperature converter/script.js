function convert(){
    const valuele=document.querySelector(".takevalue").value;
    const radio=document.querySelector("#radio");
    const radio1=document.querySelector("#radio1");
    const result=document.querySelector(".result");
    if(radio.checked){
        let cal=(valuele*1.8)+32;
        result.textContent=`${cal} ºF`;
        

    }
    else if(radio1.checked){
        let cal=(valuele-32)*5/9;
        result.textContent=`${cal} ºC`;
    }
    else{
                result.textContent="Select any option";
    }
}
