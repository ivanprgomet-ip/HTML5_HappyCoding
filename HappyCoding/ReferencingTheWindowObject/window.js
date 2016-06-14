function init() {
    var panel = document.getElementById('panel');
    var width, height, avWidth, avHeight, colors;

    //assign screen properties to variables
    width = window.screen.width;
    height = window.screen.height;
    avWidth = window.screen.availWidth;
    avHeight= window.screen.availHeight;

    switch (window.screen.colorDepth)
    {
        case 8: colors = 'low color'; break;
        case 16: colors = 'high color'; break;
        case 32: colors = 'true color'; break;
        default: colors = 'unknown';
    }

    panel.innerHTML =
        'screen resolution: ' + width + ' x ' + height + ' <br> ';
    panel.innerHTML +=
        'avaliable screen size: ' + avWidth + ' x ' + avHeight;
    panel.innerHTML += '<br> color capability: ' + colors;

    window.defaultStatus = 'screen data by javascript';
}
window.onload = init;