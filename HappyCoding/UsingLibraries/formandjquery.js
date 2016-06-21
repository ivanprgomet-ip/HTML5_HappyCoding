function showFormFields() {
    var form = $('exampleForm');
    var message = '';
    var fields = form.getElements();
    for (var x = 0; x < fields.length; x++) {
        message += 'field name: ' + fields[x].name + ' value: ' + fields[x].value + '\n';
    }
    alert(message);
}