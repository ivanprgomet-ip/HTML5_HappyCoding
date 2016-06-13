function init() {
    var msg = "javascript"; msg += "code";
    var flt = 7.5; flt += 2.25;
    var intA = 8; intA -= 4;
    var intB = 24; intB *= intA;
    var intC = 24; intC /= intA;
    var intD = 24; intD %= intA;

    var str = 'add & assign stirng' + msg;
    str += '<br/> add & assign float :' + flt;
    str += '<br/> subtract and assign:' + intA;
    str += '<br/> miltyply and assign:' + intB;
    str += '<br/> divide and assign:' + intC;
    str += '<br/> modulus and assign:' + intD;

    document.getElementById("panel").innerHTML = str;


}
window.onload = init;