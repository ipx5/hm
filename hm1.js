function sumTO(n) {
    var result=n;
    for (i=1; i<n; i++){
        result=n+sumTO(n-1);
    }
    return result; 
}
console.log(sumTO(2));



