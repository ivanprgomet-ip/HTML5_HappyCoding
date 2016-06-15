function poll() {
    var i, isOk, summary = '';
    var form = document.getElementById('pizza');
        
    for (var i = 0; i < form.topping.length; i++) {
        if(form.topping[i].checked)
        {
            summary += form.topping[i].value + ' ';
        }
    }
    isOk = confirm('submit these choises?\n' + summary)
    if(isOk)
    {
        form.submit();
    }
    else {
        return false;
    }
}
function init() {
    //retrieving the form by its id, then also retrieving the first checkbox anc checking it
    document.getElementById('pizza').topping[0].checked = true;
    document.getElementById('btn').onclick = poll;
}
onload = init;