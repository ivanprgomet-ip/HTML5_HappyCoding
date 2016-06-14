function init() {
    var panel = document.getElementById('panel');
    var s1 = 'javascript', s2 = 'in easy', s3 = 'steps';
    var picName = 'myPic', picFile = '../4794101_102_z.jpg';

    panel.innerHTML = s1.toUpperCase();
    panel.innerHTML += '<br>' + s1.toLowerCase();
    panel.innerHTML += '<br>' + s1.concat(s2, s3) + '<br>';
    panel.innerHTML += s1 + 'has ' + s1.length + ' characters';

    /*writing an image into the panel using subscript notation*/
    panel.innerHTML += '<br/><img id="myPic"/>';
    document.images[picName].src = picFile;
}
onload = init;