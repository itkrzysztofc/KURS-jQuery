$(function(){
    $("button").click(function(){
        $("#wynik")
        .animate({
            left: '100px',
            bottom: '40px'
        })
        .hide(1000)
        .show(1000)
        .animate({
            left:'150px',
            top:'250px'
        });
    });
});
