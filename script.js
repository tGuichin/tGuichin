function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

function pickColor(ev){
    var canvas = document.getElementById("canvasChange");
    var context = canvas.getContext("2d");
    var newColor = ev.target.className;
    var changeColor = newColor.className;
    canvas.style.background = changeColor;
}
