function init() {
    var panel = document.getElementById('panel');
    var everything;

    //loop which lists each property within the DOM window object
    for (everything in window)
    {
        if (everything)
        {
            panel.innerHTML += everything + ' , ';
        }
    }
}
window.onload = init;