function init() {
    var panel = document.getElementById('panel');
    window.alert('heres a simple message');
    panel.innerHTML = 'confirm: ' + window.confirm('go or stop?');
    panel.innerHTML += '<br> prompt: ' + window.prompt("yes or No?", 'yes');
}
onload = init;