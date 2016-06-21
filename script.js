function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

window.onclick = function (ev){
    var canvas = document.getElementById("canvasChange");
    var context = canvas.getContext("2d");
    var newColor = ev.target || ev.srcElement;
    var changeColor = newColor.background;
    canvas.style.background = changeColor;
}
