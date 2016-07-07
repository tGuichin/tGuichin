function keyPress(event){
    var key = eventCode;
    var block = document.getElementById("dabMove");
    console.log(key)
    if(key === '39'){
        block.style.left += 10 + "px";
        console.log("clicking right" + key);
    }
}
