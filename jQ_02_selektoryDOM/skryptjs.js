$(function(){
    $('p').click(function(){
        document.getElementById("wynik").innerHTML="jQuery is OK";
    });
});

$(function(){
    $('#linia').click(function(){
        $('td').css('background', '#ff0000');
    });
});
$(function(){
    $('#kolor').mouseover(function(){
        $('td').css('background', '#00ff00');
    });
});
$(function(){
    $('#kolor2').mouseout(function(){
        $('td').css('background', '#0000ff');
    });
});
$(function(){
    $('tr').click(function(){
        $(this).toggle(1000);
    });
});
$(function(){
    $('.kolor3')
    .mouseover(function(){
        $('td').css('background', '#0ff0f0');
    })
    .mouseout(function(){
        $('td').css('background', '#ff0ff0');
    });
});