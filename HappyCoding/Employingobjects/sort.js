function sortNums(x, y) {
    return (x - y);
}
function init() {
    var panel = document.getElementById('panel');
    var hues = ['Red', 'RED', 'red', 'Green', 'Blue'];
    var nums = [1, 20, 3, 45, 44, 0.5];

    panel.innerHTML = 'colors: ' + hues;
    panel.innerHTML += '<br/>dictionary sort: ' + hues.sort();
    panel.innerHTML += '<br/>numbers: ' + nums;
    panel.innerHTML += '<br/>dictionary sort: ' + nums.sort();
    panel.innerHTML += '<br/>numerical sort: ' + nums.sort(sortNums);
    panel.innerHTML += '<br/>reversed: ' + nums.reverse();

}
window.onload = init;