function keyPress(event){
    var key = event.which || event.charCode || event.keyCode;
    var block = document.getElementById("dabMove");
    if(key === '39'){
        block.style.left += 10 + "px";
        console.log("clicking right" + key);
    }
}
