function init() {
    var panel = document.getElementById('panel');
    panel.innerHTML = 'regular information in the main window';

    //atempt to open up a popup window
    var winObject = window.open('pop.html', 'windowName', 'top=200,left=100,width=400,height=200,status=yes');
}
window.onload = init;