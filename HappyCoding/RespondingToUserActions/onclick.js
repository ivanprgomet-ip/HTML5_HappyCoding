function clickResponse() {
    this.innerHTML+='click detected<hr>'
}
function dblclickResponse() {
    this.innerHTML += 'doublecclick detected<br>';
}
function mousedownResponse() {
    this.innerHTML += 'Mouse button down<br>';
}

function mouseupResponse() {
    this.innerHTML += 'Mouse button up<br>';
}

function init() {
    var panel = document.getElementById('panel');
    panel.innerHTML = 'click here &gt;<br>';

    //attach event-handler functions to the panel object
    panel.onclick = clickResponse;
    panel.ondblclick = dblclickResponse;
    panel.onmousedown = mousedownResponse;
    panel.onmouseup = mouseupResponse;
}
onload = init;