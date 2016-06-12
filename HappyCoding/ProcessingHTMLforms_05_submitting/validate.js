function validate() {
    if (this.elements["Name"].value === "") {
        alert("Please enter your name");
        return false;
    }

    if ((this.elements["Email"].value.indexOf("@") === -1) || (this.elements["Email"].value.indexOf(".") === -1))
    {
        alert("Please enter a valid email adress");
        return false;
    }
}

function init() {
    var panel = document.getElementById("panel");
    panel.innerHTML = "Please enter your name and email adress";

    var form = document.getElementById("contact");
    /*attaching an event handler function to the form object*/
    form.onsubmit = validate;
}

onload = init;