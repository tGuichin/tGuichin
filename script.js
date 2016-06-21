function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

function pickColor(){
    prompt("Would you like to change color?");
    var color = document.getElementsByClassName("canvasChange");
    newColor = document.getElementById("color");
    color.style.color = newColor.style.color;
    
    
}
