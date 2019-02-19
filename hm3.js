function pow(x, n) {
  var result=x;
  for (let i=1; i<n; i++){
    result= result*x;
  }
  return result; 
}
console.log(pow(2,5));





