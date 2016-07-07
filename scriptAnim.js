function keyPress(event){
    var key = event.keyCode;
    var block = document.getElementById("dabMove");
    console.log(event.keyCode);
    console.log(event.keyType);
    console.log(event.keyCode);
    if(key === '39'){
        block.style.left += 10 + "px";
        console.log("clicking right" + key);
    }
}
