function plus(n) {
    var cena=document.getElementById("cena_"+n);
    var col=document.getElementById("col_"+n);
    var itog=document.getElementById("itog");

    col.innerHTML=1+Number(col.innerHTML);
    itog.innerHTML=Number(itog.innerHTML)+Number(cena.innerHTML);
}

function minus(n) {
    var cena=document.getElementById("cena_"+n);
    var col=document.getElementById("col_"+n);
    var itog=document.getElementById("itog");

    if(col.innerHTML!=="0") {
        col.innerHTML=Number(col.innerHTML)-1;
        itog.innerHTML=Number(itog.innerHTML)-Number(cena.innerHTML);
    }
}

var tds = document.getElementsByTagName('td').length;

function cl() {
    for (var n=1; n<tds+1; n++) {
        var col = document.getElementById("col_" + n);
        col.innerHTML="0"
    }
    var itog=document.getElementById("itog");
    itog.innerHTML="0";

}