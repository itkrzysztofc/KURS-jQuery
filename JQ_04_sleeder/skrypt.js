var timer1,timer2;
var no = 0;
function zmienNo(no){
    clearTimeout(timer1);
    clearTimeout(timer2);
    wygas();
    timer1 = setTimeout("nowySlajd()", 5000);
}
function wygas(){
    $("#slajder").fadeOut(500);
}
function nowySlajd(){

    if(no>6){
        no=0;
    }
    var plik = '<img src=\"./bond/bond'+no+'.jpg\" />';
    no++;
    document.getElementById("slajder").innerHTML=plik;
    $("#slajder").fadeIn(500);
    timer1 = setTimeout("nowySlajd()", 5000);
    timer2 = setTimeout("wygas()", 4500);
}
window.onload=nowySlajd;