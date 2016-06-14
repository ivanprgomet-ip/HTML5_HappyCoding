function init() {
    var panel = document.getElementById('panel');
    panel.innerHTML = 'ceiling: ' + Math.ceil(7.5);
    panel.innerHTML += '<br>floor: ' + Math.floor(7.5);
    panel.innerHTML += '<br>round+: ' + Math.round(7.5);
    panel.innerHTML += '<br>floor-: ' + Math.floor(-7.5);

    panel.innerHTML += '<hr>inprecision: ' + (81.66 * 150);
    panel.innerHTML += '<br>corrected: ' + ((81.66 * 100) * 15) / 100;

    panel.innerHTML += '<hr>float: ' + Math.PI;
    panel.innerHTML += '<br>computed: ' + (Math.round(Math.PI * 100)) / 100;



}
onload = init;