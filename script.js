function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}
var redValue = 0;
var greenValue = 0;
var blueValue = 0;

var canvas = document.getElementById("canvasChange");
canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
function redColor(value){
    console.log(value);
    redValue = value;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
} 
function greenColor(value){
    greenValue = value;
    console.log(value);
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}
function blueColor(value){
    console.log(value);
    blueValue = value;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}
// window.onclick = function (ev){
//     var canvas = document.getElementById("canvasChange");
//     var context = canvas.getContext("2d");
//     var newColor = ev.target || ev.srcElement;
//     var changeColor = getComputedStyle(newColor).backgroundColor;
//     canvas.style.backgroundColor = changeColor;
// }
