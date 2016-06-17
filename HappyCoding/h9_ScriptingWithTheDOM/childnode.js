/*function that reads the child nodes of the <ol> element and
returns the total number present in the list*/
function countListItems() {
    var olElement = document.getElementById('todo-list');
    var count = 0;

    //only counting the <li> elements in the <ol> (nodetype==1)
    for (var i = 0; i < olElement.childNodes.length; i++) {
        if (olElement.childNodes[i].nodeType == 1)
            count++;
    }
    alert('the ordered list contains ' + count + ' items');


}
function retrieveNotes() {
    var text = '';
    var pElement = document.getElementById('todo-notes');
    
    for (var i = 0; i < pElement.childNodes.length; i++) {
        if (pElement.childNodes[i].nodeType == 3)
            text += pElement.childNodes[i].nodeValue;
    }
    alert('the note on the page says: ' + text+'and the nodename containing the nodes is: '+pElement.nodeName);
}
function countListItemsTagName() {
    var olElement = document.getElementById('todo-list');
    var elements = olElement.getElementsByTagName('li');
    alert('counting list items using getelementsbytagname: '+elements.length+' items')
}

function allFuncs() {
    countListItems();
    retrieveNotes();
    countListItemsTagName();
}
window.onload = allFuncs;
