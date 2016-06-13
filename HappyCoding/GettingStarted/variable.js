function init() {
    /*initialize variables of different data types*/
    var str = "text content in javascript"
    var num = 100;
    var bln = true;
    var fcn = init;
    var obj = document.getElementById("panel");

    /*statements to write the variable values and data types into the panel*/
    obj.innerHTML = str + ": " + typeof str;
    obj.innerHTML += "<br/>"+num+" :"+typeof +num;
    obj.innerHTML += "<br/>" +bln+" :"+typeof bln;
    obj.innerHTML += "<br/>init(): "+typeof fcn;
    obj.innerHTML += "<br/>" + obj + " :" + typeof obj;
}
window.onload = init;//executes right after the document has loaded