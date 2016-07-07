function keyPress(event){
    var key = event.which || event.keyCode;
    var block = document.getElementById("dabMove");
    console.log("clicking right" + key);
    if(key === '39'){
        block.style.left += 10 + "px";
        console.log("clicking right" + key);
    }
}
