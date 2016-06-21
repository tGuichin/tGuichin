function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

function pickColor(){
    var canvas = document.getElementById("canvasChange");
    var context = canvas.getContext("2d");
    var newColor = document.getElementById("color").style.backgroundColor;
    context.fillStyle = newColor;
    context.fill();
    canvas.style.background = newColor;
}
