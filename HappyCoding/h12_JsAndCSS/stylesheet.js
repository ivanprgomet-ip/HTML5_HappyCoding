var whichsheet = 0;
document.styleSheets[1].disabled = true;

function sheet() {
    document.styleSheets[whichsheet].disabled = true;//disable stylesheet whose index is stored in variable whichsheet
    whichsheet = (whichsheet == 1) ? 0 : 1;//toggle variable whichsheet between 1 and 0
    document.styleSheets[whichsheet].disabled = false;//enable stylesheet corresoponding to the new value of whichsheet
    //the combined effect of these acrivities is to toggle between the two active stylesheets for the page
}
window.onload = function () {
    document.getElementById('btn1').onclick = sheet;
}

