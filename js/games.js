document.getElementsByTagName("button")[0].addEventListener("mousedown",()=> {
    const inputs = document.getElementsByTagName("input");
    if(inputs[1].value!="" && inputs[2].value!="") {
        alert("Information submited. Thank you for signing up!");
        document.getElementsByTagName("form")[0].reset();
    }else{
        alert("Please answer all fields before submitting");
    }
});