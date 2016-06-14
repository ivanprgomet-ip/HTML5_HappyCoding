function init() {
    var panel = document.getElementById('panel');

    //crearing an expired date and an escaped value, 
    //and storing them in a cookien named mydata
    var user = escape('ivan prgomet, 920320');
    var expiry = new Date();
    expiry.setTime(expiry.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = 'myData=' + user + ';' + 'expires=' + expiry.toGMTString() + ';';

    if(document.cookie)
    {
        var cookiestring = unescape(document.cookie);
        var list = cookiestring.split('=');
        if(list[0] === 'myData')
        {
            var data = list[1].split(',');
            var userName = data[0];
            var userAcct = data[1];
        }
    }

    //write the cookie values in the panel div
    panel.innerHTML += 'cookie string: ' + cookiestring;
    panel.innerHTML += '<br>split list: ' + list;
    panel.innerHTML += '<br>user name: ' + userName;
    panel.innerHTML += '<br>user account: ' + userAcct;


}
onload = init;