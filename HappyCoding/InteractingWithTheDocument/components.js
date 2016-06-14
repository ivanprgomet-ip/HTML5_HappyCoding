function init() {
    var panel = document.getElementById('panel');

    panel.innerHTML = 'document components...';
    panel.innerHTML += '<br>no. forms: ' + document.forms.length;
    panel.innerHTML += '<br>no. links: ' + document.links.length;
    panel.innerHTML += '<br>no. anchors: ' + document.anchors.length;
    panel.innerHTML += '<br>no. images: ' + document.images.length;
    panel.innerHTML += '<br>no. images: ' + document.images[0].src;//url of first image

}
onload = init;