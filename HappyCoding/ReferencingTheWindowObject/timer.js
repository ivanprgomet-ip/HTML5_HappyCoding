var counter = 0;
function init() {
    var timerId, panel = document.getElementById('panel');
    counter++;//for every new iteration of the init method, the global value gets incremented by 1

    //writes the counter out in the panel for every iteration, also added some inline styling
    panel.innerHTML += '<span style="background:black;color:white;margin:2px;">' + counter + '</span>';

    
    if(counter > 19)
    {
        //terminate the loop when counter value reaches 20
        window.clearTimeout();
    }
    else
    {
        /*repeat if less than 20. 
        
        recursion, if counter is less than 20, the init function 
        will run again with 1000ms between, every iteration writes out the 
        counter to the panel.*/
        timerId = window.setTimeout(init, 1000);
    }
}
window.onload = init;