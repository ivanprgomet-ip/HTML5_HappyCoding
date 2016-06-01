$(document).ready(function () {
    console.log("hello this is a test!");
    draw();
});

function draw() {
    var painting = document.getElementById('mycanvas');
    var context = painting.getContext('2d');
    context.strokeStyle = "#FF0000";
    context.strokeRect(20, 20, 150, 100);


    var gradient = context.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    // Fill with gradient
    context.strokeStyle = gradient;
    context.lineWidth = 5;
    context.strokeRect(20, 20, 150, 100);



    context.font = "30px Verdana";
    // Fill with gradient
    context.strokeStyle = gradient;
    context.strokeText("my name is ivan!", 10, 50);
}