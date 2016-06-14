function init() {
    var panel = document.getElementById('panel');
    panel.innerHTML += document.title;

    var pop = open('', '', 'top=200,left=100,width=400,height=100');

    //dynamically write content in the popup window
    pop.document.write('<title>popup window</title>')
    pop.document.write('<img src="4794101_125_z.jpg"/>')
    pop.document.write('dynamic popup content')
    pop.document.close;//closes the writing stream!!!

}
//onload = init;