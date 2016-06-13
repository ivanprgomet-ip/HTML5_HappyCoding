function addToCart(productid) {

    var productname= document.getElementById(productid).getElementsByTagName("legend")[0].innerHTML;
    var productquantity = document.getElementById(productid).getElementsByTagName("input")[0].value;
    var msg = document.getElementById("displayer");
    msg.innerHTML = productquantity + " piece(s) of " + productname + " added to bag";

    sessionStorage.setItem(productname, productquantity);

    msg.style.color = "forestgreen";
    msg.style.fontWeight = "bold";


    
}


function RetrieveCart() {
    var allitems = document.getElementById("receipt-info");


    for (var i in window.sessionStorage) {
        allitems.innerHTML += sessionStorage.getItem(i);
    }
}