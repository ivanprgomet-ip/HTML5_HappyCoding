function init() {
    var panel = document.getElementById("panel");
    var i;
    var arr = [];//later becomes an array of bools

    panel.innerHTML = 'fill elements...';
    for (i = 1; i < 11; i++)
    {
        arr[i] = (i % 2 === 0) ? true : false;
        panel.innerHTML += '<br/>element ' + i + ' : ' + arr[i];
    }

    
    panel.innerHTML += '<hr/>read elements...<br/> true: ';
    for (i = 1; i < arr.length; i++) {
        if(arr[i])
        {
            panel.innerHTML += i + ' ';
        }
    }

    panel.innerHTML += '<hr/>read elements...<br/> false: ';
    for (i = 1; i < arr.length; i++) {
        if (!arr[i]) {
            panel.innerHTML += i + ' ';
        }
    }
}
window.onload = init;