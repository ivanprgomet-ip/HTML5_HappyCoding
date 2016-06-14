function accelerate() {
    return '<br/>Vrooooom!';
}
//lets create an object!
function car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.accelerate = accelerate;
}
function init() {
    var panel = document.getElementById("panel");
    var myCar = new car(' dodge ', 'viper ', 'red');

    panel.innerHTML = myCar.color + myCar.make + myCar.model;
    panel.innerHTML += myCar.accelerate();
}
window.onload = init;