function init() {
    var panel = document.getElementById('panel');

    panel.innerHTML = '<a name="frag">fragment anchor</a>';
    
    var jump = confirm('jump to fragment?');
    if(jump)
    {
        location = location.href + '#frag';
    }

    //write each component of the current location adress in the panel
    panel.innerHTML += '<hr>href: ' + location.href;
    panel.innerHTML += '<br>protocol: ' + location.protocol;
    panel.innerHTML += '<br>host: ' + location.host;
    panel.innerHTML += '<br>path: ' + location.pathname;
    panel.innerHTML += '<br>hash: ' + location.hash;

}
onload = init;