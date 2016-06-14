function init() {
    var i, panel = document.getElementById('panel');


    //write some numbers in the panel to make the window content overflow for demo purposes
    for (var i = 1; i < 5001; i++)
    {
        panel.innerHTML += i + ' ';
    }

    window.scrollBy();
    window.moveTo(0, 0);
}
