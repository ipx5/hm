function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
  }
  
console.log( pow(2, 3) );

function pow2(x,n){
    if (n===1) return x;
    return x* pow2(x, n-1);
}

console.log(pow2(2,4));



