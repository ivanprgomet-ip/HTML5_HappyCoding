function init() {
    var panel = document.getElementById('panel');
    var str = 'javascript in easy steps';

    //search for a substring
    panel.innerHTML = 'script search: ' + str.search('script');
    panel.innerHTML = '<br> script match: ' + str.match('script');

    //search for a character
    panel.innerHTML = '<br> charAt 0: ' + str.charAt(0);
    panel.innerHTML = '<br> charCodeAt 0: ' + str.charCodeAt(0);
    panel.innerHTML = '<br> fromCharCode: ' + String.fromCharCode(74,97,118,97);

    //replace substring with alternative substring
    panel.innerHTML = '<br>replace: ' + str.replace('easy', 'simple');


}
window.onload = init;