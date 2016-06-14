function init() {
    var panel = document.getElementById('panel');
    var sentence = 'javascript is the origianl dialect of the ecmascript standard language wereas jscript is the dialect developed later by microsoft'

    panel.innerHTML = sentence.slice(0, 26);
    panel.innerHTML += sentence.slice(61, 70) + '<br>';

    panel.innerHTML += sentence.split(' ', 4) + '<br>';//splits the first 4 words

    panel.innerHTML += sentence.substring(79, 94);
    panel.innerHTML += sentence.substring(121, 130);

    panel.innerHTML += sentence.substr(61, 10);


}
window.onload = init;