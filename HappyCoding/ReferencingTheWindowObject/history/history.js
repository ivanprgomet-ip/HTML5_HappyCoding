function init() {
    var panel = document.getElementById('panel');

    //write hyperlinks targeting each html doucment in the panel
    panel.innerHTML += '<a href="history-1.html"> Page1 </a> | ';
    panel.innerHTML += '<a href="history-2.html"> Page2 </a> | ';
    panel.innerHTML += '<a href="history-3.html"> Page3 </a> | ';

    //write browsers history length and current document in the panel
    panel.innerHTML += '<br>histoyry length ' + history.length;
    panel.innerHTML += '<br>current location: ' + location.pathname + '<br>';

    //create buttons that call history methods when pushed
    panel.innerHTML += '<button onclick="history.back()">back</button>';
    panel.innerHTML += '<button onclick="history.forward()">forward</button>';

}
onload = init;