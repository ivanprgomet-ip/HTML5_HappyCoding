function add() {
    var text = document.getElementById("text").value;/*value retrieves whatever is in the textarea form*/
    document.getElementById("panel").innerHTML = text;
}

function init() {
    var btn= document.getElementById("btn");
    btn.style.backgroundColor = "honeydew";//give btn some color at startup
}
window.onload = init;