function show(){
    if(prompt("Would you like to play a game?") === "yes"){
        window.open("colorPicker.html", "_self");
    }
}
var redValue = 0;
var greenValue = 0;
var blueValue = 0;

var redDrag = document.getElementById("redDrag").value = 0;
var greenDrag = document.getElementById("greenDrag").value = 0;
var blueDrag = document.getElementById("blueDrag").value = 0;


var canvas = document.getElementById("canvasChange");
canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
function redColor(value){
    console.log(value);
    var redText = document.getElementById("redUserText").value = value;
    redValue = value;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    redgb(redValue);
    hexValues(redValue,greenValue, blueValue);
} 
function greenColor(value){
    console.log(value);
    var greenText = document.getElementById("greenUserText").value = value;
    greenValue = value;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    greengb(greenValue);
    hexValues(redValue,greenValue, blueValue);
}
function blueColor(value){
    console.log(value);
    var blueText = document.getElementById("blueUserText").value = value;
    blueValue = value;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    bluegb(blueValue);
    hexValues(redValue,greenValue, blueValue);
}
function redgb(value){
    var rgbText = document.getElementById("redgb");
    rgbText.innerHTML = value; 
}
function greengb(value){
    var rgbText = document.getElementById("greengb");
    rgbText.innerHTML = value;
}
function bluegb(value){
    var rgbText = document.getElementById("bluegb");
    rgbText.innerHTML = value;
}
function changeBackground(){
    var backgroundColor = canvas.style.backgroundColor;
    document.body.style.backgroundImage = null;
    document.body.style.backgroundColor = backgroundColor;
}
function hexValues(valueR,valueG,valueB){
    var hexValuesVar = document.getElementById("hexShow");
    hexValuesVar.innerHTML = "#" + parseInt(valueR).toString(16).toUpperCase() + parseInt(valueG).toString(16).toUpperCase()
    + parseInt(valueB).toString(16).toUpperCase();
}
function userInputRed(val){
    var drag = document.getElementById("redDrag");
    drag.value = val;
    redValue = val;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    redgb(redValue);
    hexValues(redValue,greenValue, blueValue);
}
function userInputGreen(val){
    greenValue = val;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    greengb(redValue);
    hexValues(redValue,greenValue, blueValue);
}
function userInputBlue(val){
    blueValue = val;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    bluegb(redValue);
    hexValues(redValue,greenValue, blueValue);
}
function linearGradient(){
    var direction = document.getElementById("direction").value;
    if(direction.length > 0){
        document.body.style.backgroundImage = "-webkit-linear-gradient(" + direction + ", " + "rgb(" + redValue + ", " + greenValue + ", " + blueValue +
        ")" + ", rgb(" + greenValue + ", " + redValue + ", " + blueValue + "))";
    }else{
        popup("Please enter a direction(left, right, top, bottom");
    }
}


// document.getElementById("redDrag").onscroll = function(){
//     redValue = document.getElementById("redDrag").value;
//     canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
//     redgb(redValue);
// }
// window.onscroll = function(){
//     redValue = document.getElementById("redDrag").value;
//     canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
//     redgb(redValue);
// }
// function hecColor(){
//     var hexText = document.getElementById("hecColor");
//     hexText.value = "hex";
// }
// window.onclick = function (ev){
//     var canvas = document.getElementById("canvasChange");
//     var context = canvas.getContext("2d");
//     var newColor = ev.target || ev.srcElement;
//     var changeColor = getComputedStyle(newColor).backgroundColor;
//     canvas.style.backgroundColor = changeColor;
// }
