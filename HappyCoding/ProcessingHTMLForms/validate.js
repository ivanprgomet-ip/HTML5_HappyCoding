function validate() {
    if(this.elements['firstname'].value==='')
    {
        alert('please enter your name');
        return false;//return false to prevent form submission
    }
    if((this.elements['email'].value.indexOf('@')===-1) || (this.elements['email'].value.indexOf('.')===-1))
    {
        alert('please enter a valid email adress');
        return false;
    }
}
function init() {
    var panel = document.getElementById('panel');
    panel.innerHTML = 'please enter your name and email address';

    //attach event handler to form object
    var form = document.getElementById('contact');
    form.onsubmit = validate;
}
onload = init;