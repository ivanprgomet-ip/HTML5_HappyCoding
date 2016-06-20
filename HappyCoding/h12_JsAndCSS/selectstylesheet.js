function ssEnable(mySheet) {
    var change = false;
    var oldSheet = 0;//currently active stylesheet
    
    //cycle through stylesheets array
    for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].disabled == false) {
            oldSheet = i;
        }
        document.styleSheets[i].disabled = true;

        if(document.styleSheets[i].title==mySheet)
        {
            document.styleSheets[i].disabled = false;
            change = true;
        }
    }
    if (!change)
    {
        document.styleSheets[oldSheet].disabled = false;
    }
    return change;
}

function sheet() {
    //prompt the user for a stylesheet name every time the page loads
    var sheetName = prompt('Stylesheet name?');
    if (!ssEnable(sheetName))
    {
        alert('not found - original stylesheet retainer.');
    }
}


window.onload = function () {
    document.getElementById('btn1').onclick = sheet;

}