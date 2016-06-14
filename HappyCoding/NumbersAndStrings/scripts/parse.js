function init() {
    var panel = document.getElementById('panel');
    var num = '074.5 input';

    panel.innerHTML += 'not a number?' + isNaN(num);
    panel.innerHTML += '<br> this value is a: ' + typeof num;

    //copy integers from start of a stirng using differrent numbering systems
    panel.innerHTML += '<hr> octal: ' + parseInt(num, 8);
    panel.innerHTML += '<hr> decimal: ' + parseInt(num, 10);
    panel.innerHTML += '<hr> hexadecimal: ' + parseInt(num, 16);

    //copy a floating point value from the start of the string
    panel.innerHTML += '<br> float: ' + parseFloat(num);

}
window.onload = init;