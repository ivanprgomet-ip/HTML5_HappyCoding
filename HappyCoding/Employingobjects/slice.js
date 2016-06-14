function init() {
    var panel = window.document.getElementById('panel');
    var seasons = ['spring', 'summer', 'fall', 'winter'];

    /*manipulate the array elements and write the result of each task*/
    panel.innerHTML = 'elements: ' + seasons;
    panel.innerHTML += '<br/>joined: ' + seasons.join(' and ');

    panel.innerHTML += '<hr/>popped: ' + seasons.pop();
    panel.innerHTML += '<br/>elements: ' + seasons;

    panel.innerHTML += '<hr/>pushed: ' + seasons.push('winter');
    panel.innerHTML += '<br/>elements: ' + seasons;

    panel.innerHTML += '<hr/>sliced: ' + seasons.slice(1, 3);
    panel.innerHTML += '<br/>spliced: ' + seasons.splice(2, 1, 'autumn');
    panel.innerHTML += '<br/>elements: ' + seasons;
    }
window.onload = init;