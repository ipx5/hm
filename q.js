function nbYear(p0, percent, aug, p) {
    // your code
    var n= 0;
    var per=percent/100
    for (i=p0%p; p0%p>=i; i+per){
        p0+=aug+(per*p0);
        n+=1;
    }
    return n;
}

console.log(nbYear(1000,2,50,1200));

function nbYear2(p0, percent, aug, p) {
    for (n=0; p0<p; n++){
        p0+=aug+(percent/100*p0);
    }
    return n;
}
console.log(nbYear2(1000,2,50,1200));

