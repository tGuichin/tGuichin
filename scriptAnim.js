function keyPress(event){
    var key = (window.event) ? event.keyCode : event.which;
    var block = document.getElementById("dabMove");
    
    if(event.keyCode == "D"){
        block.style.left += 10 + "px";
        console.log("clicking right" + key);
    }
}
