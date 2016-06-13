function init() {
    var state = 7 > 5 ? 'greater' : 'smaller';
    var str = '7 is ' + state + ' than 5';

    var state = 7 > 10 ? 'greater' : 'smaller';
    str += '<br/>7 is ' + state + ' than 10';

    var state = 7 === 8 ? 'equal' : 'not equal';
    str += '<br/>7 is ' + state + ' to 8';

    var state = 7 % 2 ===0 ? 'even' : 'odd';
    str += '<br/>7 is an ' + state + ' number';

    document.getElementById('panel').innerHTML = str;
}
window.onload = init;

