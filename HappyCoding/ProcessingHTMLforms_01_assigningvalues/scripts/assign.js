function init() {
    var panel = document.getElementById("panel");/*retrieve all text in the panel div*/
    panel.innerHTML += "send book data";/*add some text after the panel div*/

    var form = document.getElementById("book");/*retrieve the form*/
    form.action = "echo.pl";
    form.method = "POST";

    /*populate first text field*/
    var title = document.getElementById("title");
    title.name = "book title";
    title.value = "javascript in easy steps";

    /*populate second text field*/
    var author = document.getElementById("author");
    author.size = "30";
    author.value = "mike mcgrath";


}
onload = init; /*what does the onload do?)*/