function stringify(argA, argB, argC, argD) {
    var str = argA + " " + argB + " " + argC + " " + argD + "<br/> ";
    return str;
}

function init() {
    /*2 statements that call another user-defined function and passes it 4 argument values
    and stores the returned value in the panel*/
    document.getElementById("panel").innerHTML = stringify("Javascript", "In", "Easy", "Steps");

    document.getElementById("panel").innerHTML += stringify("Written", "By", "Mike", "McGrath");
}
window.onload = init;

