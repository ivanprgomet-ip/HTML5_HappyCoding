var global = "this is worldwide global news <hr/>";

function us(obj) {
    var local = "*** this is the united states local news***<br/>"
    obj.innerHTML += local;
    obj.innerHTML += global;
}
function eu(obj) {
    var local = "--- this is the european local news---<br/>"
    obj.innerHTML += local;
    obj.innerHTML += global;
}

function init() {
    var obj = document.getElementById("panel");
    obj.innerHTML = global;//write the global value in the panel

    us(obj);
    eu(obj);
}
window.onload = init;