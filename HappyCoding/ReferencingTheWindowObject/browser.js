function init() {
    var panel = document.getElementById('panel');

    //write some browser properties
    panel.innerHTML += 'browser: ' + navigator.appName;
    panel.innerHTML += '<br>code anme: ' + navigator.appCodeName;
    panel.innerHTML += '<br>version: ' + navigator.appVersion;
    panel.innerHTML += '<br>platform: ' + navigator.platform;

    //write a msg in panel if a modern dom method is detected
    if(document.getElementById)//querying if the browser supports the useful getelementbyid method.
    {
        panel.innerHTML += ' this is a modern dom browser';
    }
}
onload = init;