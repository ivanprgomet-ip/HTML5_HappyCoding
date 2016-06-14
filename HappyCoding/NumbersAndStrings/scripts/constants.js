function init() {
    var panel = document.getElementById('panel');
    var rad = 4;

    var area = Math.PI * (rad * rad);
    var circ = 2 * (Math.PI * rad);

    panel.innerHTML = 'circle radius: ' + rad + ' feet';
    panel.innerHTML += '<br/>area: ' + area + ' square feet';
    panel.innerHTML += '<br/>circumference: ' + circ+ ' feet';
}
window.onload= init;