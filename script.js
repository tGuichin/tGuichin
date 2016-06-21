function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

window.onclick = function (ev){
    var canvas = document.getElementById("canvasChange");
    var context = canvas.getContext("2d");
    var newColor = ev.srcElement.backgroundColor;
    var changeColor = newColor;
    canvas.style.background = newColor;
}
