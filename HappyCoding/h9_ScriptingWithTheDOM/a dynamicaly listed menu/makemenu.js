function makeMenu() {
    var h2Headings = document.getElementsByTagName('h2');

    /*create div container to hold the menu, the ul will 
    be inside the div, which will contain the list items*/
    var menu = document.createElement('div');
    var menuUl = document.createElement('ul');
    menu.appendChild(menuUl);

    //cycle through the collection of h2 headings
    for (var i = 0; i < h2Headings.length; i++) {
        //do things for each heading...

        //get text node of h2 element
        var itemText = h2Headings[i].childNodes[0].nodeValue

        //add a list item
        var menuLi = document.createElement('li');

        //add the list item to the menu
        menuUl.appendChild(menuLi);

        //the list item contains a link 
        var menuLiA = document.createElement('a');
        menuLiA = menuLi.appendChild(menuLiA);

        //set the href of the link
        menuLiA.setAttribute('href', '#item' + i)

        //set the text of the link
        var menuText = document.createTextNode(itemText);
        menuLiA.appendChild(menuText);

        //create matching anchor element
        var anc = document.createElement('a');
        anc.setAttribute('name', 'item' + i);

        //add anchor before the heading
        document.body.insertBefore(anc, h2Headings[i]);
    }

    //add menu to the top of the page
    document.body.insertBefore(menu, document.body.firstChild);
}
window.onload = makeMenu;