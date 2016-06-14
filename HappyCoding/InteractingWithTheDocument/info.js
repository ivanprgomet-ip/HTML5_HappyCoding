function init()
{
    var panel = document.getElementById('panel');

    panel.innerHTML += 'linked from ' + document.referrer;
    panel.innerHTML += '<br>title: ' + document.title;
    panel.innerHTML += '<br>URL: ' + document.URL;
    panel.innerHTML += '<br>Domain: ' + document.domain;
    panel.innerHTML += '<br>LAst modified: ' + document.lastModified;

}
