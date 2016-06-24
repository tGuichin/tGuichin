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
    redgb(redValue);
    hexValues();
} 
function greenColor(value){
    greenValue = value;
    console.log(value);
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    greengb(greenValue);
}
function blueColor(value){
    console.log(value);
    blueValue = value;
    canvas.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    bluegb(blueValue);
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
    document.body.style.backgroundColor = backgroundColor;
}
function hexValues(){
    var hexValuesVar = document.getElementById("hexShow");
    var redHex = redValue.toString(16);
    // if((temp = redValue % 16) < 10){
    //     redHex.concat(temp + "");
    // }
    // if((temp = redValue % 16) > 9){
    //     switch(temp){
    //         case 10:
    //                 redHex.concat("A");
    //                 break;
    //         case 11:
    //                 redHex.concat("B");
    //                 break;
    //         case 12:
    //                 redHex.concat("C");
    //                 break;
    //         case 13:
    //                 redHex.concat("D");
    //                 break;
    //         case 14:
    //                 redHex.concat("E");
    //                 break;
    //         case 15:
    //                 redHex.concat("F");
    //                 break;
    //     }
    // }
    console.log(redHex);
    hexValuesVar.innerHTML = redHex;
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
