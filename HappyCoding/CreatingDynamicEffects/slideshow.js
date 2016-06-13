/*three global variables acting as counter, an array of image urls,
and a reference to the image element object*/
var i, imgs, pic;

function rotate() {
    pic.src = imgs[i];//assign an image url
    (i === (imgs.length - 1)) ? i = 0 : i++;//change counter
    setTimeout(rotate, 1000);
}

function init() {
    /*rference to the image element object*/
    pic = document.getElementById("pic");

    /*array of image file URLs*/
    imgs = ["images/56315_beach_tropical_paradise_beach.jpg", "images/mMEd3ZS.jpeg", "images/tropical-paradise-4-wallpaper-1080p-HD.jpeg"]

    /*a preload routine to load image files into the browsers cache*/
    var preload = new Array();
    for(i=0;i<imgs.length;i++)
    {
        preload[i] = new image();
        preload[i].src = imgs[i];
    }

    /*reseting counter to zero and calling function to start the slideshow sequence*/
    i = 0;
    rotate();
}
onload = init;
