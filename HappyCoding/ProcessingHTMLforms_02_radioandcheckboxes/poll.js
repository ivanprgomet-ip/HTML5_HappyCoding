function poll() {
    var i, isOk, summary = "";
    var form = document.getElementById("pizza");

    /*loop through all buttons*/
    for(i =0; i<form.topping.length;i++)
    {
        /*check if a button is checked, and if it is, its 
        value (or text) is added to the summary string*/
        if(form.topping[i].checked)
            summary += form.topping[i].value + " ";
    }
    /*runs the confirm method, if it is true (if user presses ok) 
    then the form gets submitted by running the submit method, and else
    nothing happens*/
    isOk = confirm("Submit these choices?\n" + summary);
    if (isOk)
        form.submit();
    /*this else is not a must?*/
    else
        return false;
}


function init() {
    /*initialized the first checkbutton as checked*/
    document.getElementById("pizza").topping[0].checked = true;
    /*inits the button to run the poll function above when it is 
    clicked*/
    document.getElementById("btn").onclick = poll;
    /*recap: so when the btn gets onclicked , the poll function runs*/

}
onload=init;