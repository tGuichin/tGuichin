window.onkeydown = keypress;
function keyPress(event){
    var key = event.keyCode;
    var block = document.getElementById("dabMove");
    var dab = document.getElementById("dabMove").addEventListener("keydown", keyPress,false);
    if(key == 39){
        block.style.left += 10 + "px";
        console.log("clicking right" + key);
    }
}

setInterval(keyPress,1);
