function rStr(str) {
    let newStr = '';
    for ( var i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
} console.log(rStr('hello'));

function reverse(str){
    let reversed='';
    for(let char of str){
      reversed = char + reversed;
    }
    return reversed;
  }
console.log(reverse('hello'));


function reverse2(str){
    return str.split("").reverse().join("");
  }
console.log(reverse2('hello'));


function reverse3(str){
    return str.split("").reduce((rev, char)=> char + rev); 
  }
  console.log(reverse3('hello'));

  function reverse4(params) {
      return str.split('').reduce(function(rev,char){return char+ rev})

  }
  console.log(reverse4);
