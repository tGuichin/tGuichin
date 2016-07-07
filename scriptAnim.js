function keyPress(event){
    var key = (window.event) ? event.keyCode : event.which;
    var block = document.getElementById("dabMove");
    console.log(String.fromCharCode(key));
    console.log(event.keyCode);
    console.log(event.type);
    console.log(event.charCode);
    // if(key === 39){
    //     block.style.left += 10 + "px";
    //     console.log("clicking right" + key);
    // }
}
