var obj, w, goRight;

function takeOff() {
    //get the div elements current position
    var pos = parseInt(obj.style.left, 10);

    //increment of decrement the current position according to the direction of movement
    (goRight) ? pos++ : pos--;
    obj.style.left = pos + 'px';

    if(pos>(w+40))
    {
        obj.style.background = 'url(airplane-png-image-9-300x230.png)';
        goRight = false;
    }
    if (pos < -140) {
        obj.style.background = 'url(airplane-png-image-9-300x230.png)';
        goRight = true;
    }
    //recursive timer specifiyng the movement interval
    setTimeout(takeOff, 10);
}
function init() {
    var preload = new image();
    preload.src = 'airplane-png-image-9-300x230.png';

    obj = document.getElementById('airplane');//reference to div object
    w = document.body.clientWidth;//width of the browser
    goRight: true;//boolean value to determine the direction of the movement

    //initial position of the div element
    obj.style.position = 'absolute';
    obj.style.left = '-120px';

    takeOff();
}
onload = init;