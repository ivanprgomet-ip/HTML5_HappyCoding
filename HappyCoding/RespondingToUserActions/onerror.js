function errorhandler(msg,url,ln)
{
    alert('error: ' + msg + '\nln file: ' + url + '\nAt line: ' + ln);

    //tells the browser that an error has indeed been handled:
    return true;
}
onerror = errorhandler;

function init() {
    var panel = document.getElementById('panel');
    panel.innerHTML = 'handling an error...';

    //atempts to reference an object that doesnt exist
    document.getElementById('btn').value = "myButton";
}
onload = init;