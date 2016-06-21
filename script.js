function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}

function pickColor(){
    var Color = document.getElementById("container");
    var newColor = document.getElementById("color").style.backgroundColor;
    Color.style.background = newColor;
}
