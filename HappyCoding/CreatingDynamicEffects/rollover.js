var obj;

/*the actual event-handler definitions responding to mouse actions*/
function over() {
    obj.style.background = "yellow";
}
function down() {
    obj.style.background = "lime";
}
function up() {
    obj.style.background = "yellow";
}
function out() {
    obj.style.background = "aqua";
}

function init() {
    obj = document.getElementById("active");

    /*statements dynamicaly styling the div object so it looks like a button*/
    obj.style.width = "100px";
    obj.style.background = "aqua";
    obj.style.padding = "5px";
    obj.style.border = "2px solid black";
    obj.style.textAlign = "center";

    /*some extra*/
    obj.style.cursor = "pointer";
    
    /*statements attaching event-handler functions to the div object*/
    obj.onmouseover = over;
    obj.onmousedown = down;
    obj.onmouseup = up;
    obj.onmouseout = out;
}
onload = init;