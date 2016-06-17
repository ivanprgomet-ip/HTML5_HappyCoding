function replaceHeading() {

    var newH2 = document.createElement('h2');
    var newH2Text = document.createTextNode('Greetings!');
    newH2.appendChild(newH2Text);

    /*replace unwanted child node of the <div> element with 
    the new one created above*/
    var myDiv = document.getElementById('id1');
    var oldP = document.getElementById('para2');
    myDiv.replaceChild(newH2, oldP);


}
window.onload = function () {
    document.getElementById('btn').onclick = replaceHeading;
}

