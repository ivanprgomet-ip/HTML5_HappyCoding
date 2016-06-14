var panel, flag;

function mousemoveResponse() {
    var x, y;
    if(window.event)
    {
        x = event.x;
        y = event.y;
    }
    else if (e)
    {
        x = e.pageX;
        y = e.pageY;
    }
    if(flag)
    {
        panel.innerHTML = 'mouse is at X: ' + x + ', Y: ' + y;
    }
}
function mouseoverResponse() {
    flag = false;
    panel.innerHTML = 'mouse is over';
}
function mouseoutResponse() {
    flag = true;
}

function init() {
    panel = document.getElementById('panel');
    flag = true;
    panel.innerHTML = 'move the moouse...';

    document.onmousemove = mousemoveResponse;
    panel.onmouseover = mouseoverResponse;
    panel.onmouseout = mouseoutResponse;
}
onload = init;