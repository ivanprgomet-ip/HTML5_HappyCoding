function car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}
function init() {
    var panel= document.getElementById('panel');
    var myCar = new car('ford', 'focus', 'blue');

    car.prototype.doors = 4;//extending the car object/class by adding a doors property

    //list all initialized properties and methods of the object
    for (property in myCar) {
        if (myCar[property] !== '') {
            panel.innerHTML +=
                (property + ' :' + myCar[property] + '<br/>');
        }
    }
    panel.innerHTML += '<hr/>';

    myCar.make = 'aston martin';
    myCar.model = 'db10';
    myCar.color = 'silver';
    myCar.doors = '2';

    //list all initialized properties and methods of the object
    for (property in myCar) {
        if (myCar[property] !== '') {
            panel.innerHTML +=
                (property + ' :' + myCar[property] + '<br/>');
        }
    }
    panel.innerHTML += '<hr/>';
}
onload = init;