function init() {
    var panel = document.getElementById('panel');

    //writes a msg in panel only if java support is enabled
    if(navigator.javaEnabled())
    {
        panel.innerHTML = 'java support is enabled';
    }

    if(navigator.plugins.length !== 0)
    {

    }
}
onload = init;