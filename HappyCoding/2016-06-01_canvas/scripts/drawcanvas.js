alert('hello');/*testing to see if we are connected*/

$(document).ready(function () {
    draw();
    drawhej();
    //console.log("ready!");
});
//source: search document ready jquery on google

function draw() {
    var canvas = document.getElementById('myform');/*i put the complete html element in the 'canvas' varaible*/
    var context = canvas.getContext('2d');
    context.fillRect(10, 20,30,200);/*x and y and x and y*/
    

    var jquerycanvas = $('myform'); /*same as above, but now we do it with the förenklade syntaxen that jquery offers*/
    
}

function drawhej() {
    var canvas = document.getElementById('myform');/*i put the complete html element in the 'canvas' varaible*/
    var context = canvas.getContext('2d');
    /*H*/

    context.fillRect(100, 20, 25, 100);/*left staple*/
    context.fillRect(100, 50, 100, 30);/*middle*/
    context.fillRect(200, 20, 25, 100);/*right staple*/

    /*E*/
    context.fillRect(250, 20, 25, 100);/*left staple*/
    context.fillRect(250, 20, 50, 20);/*middle*/
    context.fillRect(250, 60, 50, 20);/*middle*/
    context.fillRect(250, 100, 50, 20);/*middle*/

    /*J*/
    context.fillRect(350, 20, 25, 100);/*left staple*/
    context.fillRect(320, 100, 35, 20);/*middle*/
    context.fillRect(320, 85, 15, 20);/*middle*/

}