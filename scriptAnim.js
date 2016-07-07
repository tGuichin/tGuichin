window.onkeypress = function(event){
    var key = event.which;
    var block = document.getElementById("dabMove");
    if(key === '39'){
        block.style.left += 10 + "px";
        requestAnimationFrame(this);
        console.log("clicking right" + block);
    }
}
