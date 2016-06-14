function init() {
    var panel = document.getElementById('panel');
    //declare some variables incl. an array variable
    var i, rand, temp, str, nums = [];

    //fill array with numbers
    for (var i = 1; i < 50; i++) {
        nums[i] = i;
    }

    //randomize the numbers
    for (var i = 1; i < 50; i++) {
        rand = Math.ceil(Math.random() * 49);
        temp = nums[i];
        nums[i] = nums[rand];
        nums[rand] = temp;
    }

    str = 'your six lucky numbers:<br/>'
    for (var i = 1; i < 7; i++) {
        str += nums[i];
        if(i!==6)
            str += ' - ';
    }
    panel.innerHTML = str;
}
onload = init;