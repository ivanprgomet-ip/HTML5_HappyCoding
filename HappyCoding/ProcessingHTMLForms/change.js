var panel, field, saved;

function update() {
    panel.innerHTML = saved+' chaged to: ' + field.value + '<br>';
    saved = field.value;
}
function wipe() {
    panel.innerHTML = '<br>';
}
function init() {
    panel = document.getElementById('panel');
    field = document.getElementById('txt');
    saved = field.value;
    var form = document.getElementById('lang');

    //attaching event handler functions to the form object
    form.onreset = wipe;
    field.onchange = update;

    //then calling an method
    wipe();
}
onload = init;