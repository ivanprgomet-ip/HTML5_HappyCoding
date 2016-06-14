function init() {
    var panel = document.getElementById('panel');

    //writes a msg in panel only if java support is enabled
    if(navigator.javaEnabled())
    {
        panel.innerHTML = 'java support is enabled';
    }

    if(navigator.plugins.length !== 0)
    {
        panel.innerHTML += '<hr>total plugins: ' + navigator.plugins.length;
        panel.innerHTML += '<br>example: ' + navigator.plugins[15].name;
        panel.innerHTML += ' - ' + navigator.plugins[15].description;
    }

    if(navigator.mimeTypes.length !==0)
    {
        panel.innerHTML += '<hr>total mime types: ' + navigator.mimeTypes.length;
        panel.innerHTML += '<br>example: ' + navigator.mimeTypes[10].type;
        panel.innerHTML += ' - ' + navigator.mimeTypes[10].description;
    }
}
onload = init;