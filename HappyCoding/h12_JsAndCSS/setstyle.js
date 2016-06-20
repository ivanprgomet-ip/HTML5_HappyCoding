function toggle() {
    var myElement = document.getElementById('id1');

    //second time the button is pressed, the backgroundcolor is red, so this block evaluates to true, and therefore 
    //changes backgroundcolor to yellow etc.
    if (myElement.style.backgroundColor == 'red') {
        myElement.style.backgroundColor = 'yellow';
        myElement.style.color = 'black';
    }
    else {
        //on first click the backgroundcolor is not set, so this block runs
        myElement.style.backgroundColor = 'red';
        myElement.style.color = 'white';
    }
}

/*as soon as the DOM has loaded, then the onclick event 
of the button gets assigned the method toggle*/
window.onload = function () {
    document.getElementById('btn1').onclick = toggle;
};