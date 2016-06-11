function init() {
    var panel = document.getElementById("panel");
    var list = document.getElementById("citylist");

    var elem = list.options.selectedIndex;
    panel.innerHTML += "Selected: " + city + " - Index: " + elem;
}
onload = init;
