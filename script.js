function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

function pickColor(){
    prompt("Would you like to change color?");
    var Color = document.getElementsByClassName("canvasChange");
    var newColor = document.getElementById("color");
    Color.style.color = newColor.style.color;
    
    
}
