function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

function pickColor(){
    var Color = document.getElementsByClassName("canvasChange");
    var newColor = document.getElementById("color");
    Color.style.color = newColor.style.color;
}
