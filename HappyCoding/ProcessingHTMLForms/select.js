function changecolor() {
    var list = document.getElementById('citylist').style.backgroundColor = 'cornflowerblue';
}
function makeabtn() {
    this.style.color = 'orange';
    this.style.cursor = 'pointer';
}
function createoption(){
    var list = document.getElementById("citylist");
    var option = document.createElement("option");
    option.text = "zagreb";
    list.add(option);
}
function init() {
    var panel = document.getElementById('panel');
    var list = document.getElementById('citylist');

    //write indx number and value of currently selected option in the panel
    var elem = list.options.selectedIndex;//retrieve the INDEX of currently selected option
    var city = list.options[elem].value;//retrieve the VALUE by using the index of currentrly selected option
    panel.innerHTML += 'selected: ' + city + ' -index: ' + elem;

    changecolor();
    panel.onclick = makeabtn;
    createoption();//creates another option in the list
    
}
onload = init;