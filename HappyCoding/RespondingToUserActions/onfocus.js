function focusResponse() {
    this.value = 'in focus';
}
function blurResponse() {
    this.value = 'focus lost';
}
function init() {
    var panel = document.getElementById('panel');
    panel.innerHTML += '<input type="text" id="txt1"/>'
    panel.innerHTML += '<input type="text" id="txt2"/>'

    /*nominate event handler functions for the focus and 
    blur events of each text input*/
    var field1 = document.getElementById('txt1');
    field1.onfocus = focusResponse;
    field1.onblur = blurResponse;

    var field2 = document.getElementById('txt2');
    field2.onfocus = focusResponse;
    field2.onblur = blurResponse;

    //set the focus in the first text input field when page loads
    field1.focus();

}
onload = init;


    /*  
    ONFOCUS event fires when the object recieves focus 
    ONBLUR event fires when the object loses focus

    THIS keyword identifies which input field is calling the event handler
    function and sets the value of that field
    */