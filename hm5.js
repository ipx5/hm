function sumTO(n) {
    var sum = 0;
    for (let i=1; 1<=n; i++);
    sum+=1;
    return sum; 
}
console.log(sumTO(4));


function sumTo1(n) {
    if (n == 1) return 1;
    return n+ sumTo1(n-1);
}
console.log(sumTo1(4));

function sumTo2(n){
    return n +(n+1) / 2;
}





