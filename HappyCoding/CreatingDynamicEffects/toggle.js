var pop;

function showPop() {
    pop.style.visibility = "visible";

}
function hidePop() {
    pop.style.visibility = "hidden";
}

function init() {
    pop = document.getElementById("popupLayer");
    /*hide the pop element at startup of page*/
    pop.style.visibility = "hidden";
    


    var obj = document.getElementById("contentLayer");
    /*attach event-handlers to the first div element*/
    obj.onmouseover = showPop;
    obj.onmouseout = hidePop;

}
onload = init;