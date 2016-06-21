$(document).ready(function(){

    $('#animateMe').text('changing shape...').animate(
        {
            width: '400px',
            height: '200px'
        }, 5000, function () {
            //callback function
            $(this).text('fading away...').fadeOut(4000);
        }
    );
});