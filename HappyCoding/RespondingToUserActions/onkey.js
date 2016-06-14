var panel;

function keydownResponse() {
    panel.innerHTML += '<br>key pressed: ';
}
function keyupResponse() {
    panel.innerHTML += '<br>key released: ';
}
function keypressResponse(e) {
    //testing for the presence of the event object (does the window object have a child named event?)
    var keynum = (window.event) ? event.keyCode : e.which;
    panel.innerHTML += String.fromCharCode(keynum);
}
function init() {
    panel = document.getElementById('panel');
    panel.innerHTML = 'press a key..<b>';

    //attach event-handler functons to teh document object
    document.onkeydown = keydownResponse;
    document.onkeyup = keyupResponse;
    document.onkeypress = keypressResponse;

}
onload = init;