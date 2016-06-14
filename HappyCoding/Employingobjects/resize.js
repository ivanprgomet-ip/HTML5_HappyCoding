function init() {
    var panel = document.getElementById("panel");


    var week = ['mon', 'tue', 'wed', 'thu', 'fri'];
    var weekend = ['sat', 'sun'];

    panel.innerHTML = 'week: ' + week;
    panel.innerHTML += '<hr/>weekend days: ' + weekend;

    for (var i = 0; i < weekend.length; i++)
    {
        week[week.length] = weekend[i];
    }

    panel.innerHTML += '<hr/><strong>increased with weekend days</strong>: ' + week;

    week.length -= 2;
    
    panel.innerHTML += '<hr/><strong>reduced back to weekdays</strong>: ' + week;
}
window.onload = init;