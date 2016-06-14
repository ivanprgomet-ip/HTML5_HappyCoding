function init() {
    var panel = document.getElementById('panel');
    var summer = ['june', 'jule', 'august',''];

    for(month in summer)
    {
        if(summer[month] !== '')
        {
            panel.innerHTML += (month + ': ' + summer[month] + '<br/>');
        }
    }

    panel.innerHTML += 'vacation month: ' + summer[1];
}
window.onload = init;