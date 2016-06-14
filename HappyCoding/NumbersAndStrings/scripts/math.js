function initializer() {
    var panel = document.getElementById('panel');

    var sq = Math.pow(5, 2);
    var cb = Math.pow(4, 3);

    panel.innerHTML = 'largest positive: ' + Math.max(sq, cb);
    panel.innerHTML += '<br>smallest positive: ' + Math.min(sq, cb);
    panel.innerHTML += '<br>smallest negative: ' + Math.max(-5, -4.15);

}
window.onload = initializer;