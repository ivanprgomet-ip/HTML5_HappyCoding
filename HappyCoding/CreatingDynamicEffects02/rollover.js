var obj;


function over() {
    obj.style.backgroundColor = 'yellow';
}
function down() {
    obj.style.backgroundColor = 'green';
}
function up() {
    obj.style.backgroundColor = 'yellow';
}
function out() {
    obj.style.backgroundColor = 'brown';
}

function color() {
    obj2.style.backgroundColor = 'brown';
    for (var i = 0; i < 20; i++) {
    }
}
function init() {
    obj = document.getElementById('active');

    //add style to the object
    obj.style.width = '100px';
    obj.style.background= 'aqua';
    obj.style.padding= '5px';
    obj.style.border= '2px solid black';
    obj.style.textAlign= 'center';

    //attach event handler functions to the objec
    obj.onmouseover = over;
    obj.onmousedown = down;
    obj.onmouseup = up;
    obj.onmouseout = out;



}
onload = init;