window.onload = function () {
    document.getElementById('btn1').onclick = function () {
        document.getElementById('div1').style.background = 'radial-gradient(at top left, white, #6699cc';
        document.getElementById('div2').style.boxShadow= '10px 10px 10px #808080';
    }
    document.getElementById('btn2').onclick = function () {
        document.getElementById('div1').style.background = 'radial-gradient(at top right, white, #6699cc';
        document.getElementById('div2').style.boxShadow = '-10px 10px 10px #808080';
    }
    document.getElementById('btn3').onclick = function () {
        document.getElementById('div1').style.background = 'radial-gradient(at bottom, white, #6699cc';
        document.getElementById('div2').style.boxShadow = '0px -10px 10px #808080';
    }


}