function init() {
    var panel = document.getElementById('panel');
    var day = 32;

    try {
        if (day > 31) {
            throw new RangeError('day cannot exceed 31')
        }
        if (day < 1) {
            throw 'come on, man';
        }
    }
    catch (err) {
        panel.innerHTML = (err === 'come on, man') ? ('ooops, the day variable has an invalid value of' + day) : (err.name+'exception has occurred: '+err.message);
    }
    finally
    {
        panel.innerHTML += '<br/>the script has ignored the variable and continued...';
    }
}
window.onload = init;