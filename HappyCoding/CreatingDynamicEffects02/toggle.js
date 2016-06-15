var pop;

function showpop() {
    pop.style.visibility = 'visible';
}
function hidepop() {
    pop.style.visibility = 'hidden';
}

function colorchange() {
    this.style.backgroundColor = 'cornflowerblue';
    this.style.border = '2px solid black';
}
function changepop() {
    //contentlayer (obj) is the caller
    //so this refers to the caller contentlayer div
    pop.style.backgroundColor = 'forestgreen';
    pop.style.color = 'white';
    pop.style.border = '2px solid black';
    this.style.color = 'orange';
}

function init()
{
    pop = document.getElementById('popuplayer');

    pop.style.visibility = 'hidden';

    var obj = document.getElementById('contentlayer');

    obj.onmouseover = showpop;
    obj.onmouseout = hidepop;
    obj.onclick = colorchange;
    obj.ondblclick = changepop;


    obj.style.transition = 'all 0.4s ease';

}
onload = init;