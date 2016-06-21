function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

function pickColor(){
    var Color = document.getElementById("canvasChange");
    var can = Color.getContext("2d");
    var newColor = document.getElementById("color").style.backgroundColor;
    can.fillStyle = newColor;
    
}
