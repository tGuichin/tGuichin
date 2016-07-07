function keyPress(event){
    var key = String.fromCharCode(event.keyCode);
    var block = document.getElementById("dabMove");
    
    if(key == "d"){
        block.style.left += 10 + "px";
        console.log("clicking right" + key);
    }
}
