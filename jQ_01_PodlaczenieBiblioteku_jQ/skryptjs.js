$(document).ready(function(){
    alert("jQuery działa");
});
$(function(){
    alert("jQuery 2 też działa");
});
//click w <p>
$(function(){
    $('p').click(function(){
        alert("jQuery 3 też działa");
    });
});
//click w <li>
$(function(){
    $('li').click(function(){
        alert("jQuery 4 też działa");
    });
});
