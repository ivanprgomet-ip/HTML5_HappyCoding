function init() {
    var sum = 80 + 20;
    var sub = sum - 50;
    var mul = sum * 5;
    var div = sum / 4;
    var mod = sum % 2;
    var inc = ++sum;
    var dec = --sum;


    /*concatenate everytnihn into a stirgn*/
    var str = "sum: " + sum + "<br/> subtraction: " + sub;
    str += "<br/> multiplication: " + mul + " <br/>division: " + div;
    str += "<br/> modulus: " + mod;
    str += "<br/>increment: " + inc + "<br/>decrement: " + dec;


    /*write the stirng into the panel div*/
    document.getElementById("panel").innerHTML = str;
}
window.onload = init;