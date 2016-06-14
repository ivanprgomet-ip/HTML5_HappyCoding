function init() {
    var panel = document.getElementById('panel');
    var item2 = document.getElementById('item2');
    var elems = document.getElementsByTagName("li");
    var item4 = elems[3];


    panel.innerHTML += 'total no. of list items ' + elems.length;
    panel.innerHTML += '<br>specific item two: ' + item2.innerHTML;
    panel.innerHTML += '<br>specific item four: ' + item4.innerHTML;
}
onload = init;