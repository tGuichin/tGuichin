function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("game.html", "_self");
    }
}
var redValue;
var greenValue;
var blueValue;
function redColor(value){
    console.log(value);
} 
function greenColor(value){
    console.log(value);
}
function blueColor(value){
    console.log(value);
}
// window.onclick = function (ev){
//     var canvas = document.getElementById("canvasChange");
//     var context = canvas.getContext("2d");
//     var newColor = ev.target || ev.srcElement;
//     var changeColor = getComputedStyle(newColor).backgroundColor;
//     canvas.style.backgroundColor = changeColor;
// }
