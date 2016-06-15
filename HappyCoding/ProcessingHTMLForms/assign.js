function init() {
    /*so we know what we are retrievening is a form,
    so we also know that the form has an action and method
    attribute, even though theres no intelisense*/
    var form= document.getElementById('book');
    //specifying submission method and server-side script to process the form
    form.action = 'echo.pl';
    form.method= 'post';

    //assigning values to the first input field
    var title = document.getElementById('title');
    title.size = '30';
    title.name = 'book title';
    title.value = 'javascript in easy steps';
    title.focus();//sets focus on the title when page loads

    var author = document.getElementById('author');
    author.size = '30';
    author.name = 'by author';
    author.value = 'mike mcgrath';
}

onload = init;