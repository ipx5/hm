function makeBuffer() {
    var text = '';
  
    return function(str) {
      if (arguments.length === 0) { // вызов без аргументов
        return text;
      }
      text += str;
    }
  }
  
  var buffer = makeBuffer();
  
  // добавить значения к буферу
  buffer('Замыкания');
  buffer(' Использовать');
  buffer(' Нужно!');
// 'Замыкания Использовать Нужно!'
  
  var buffer2 = makeBuffer();
  buffer2(0);
  buffer2(1);
  buffer2(3);
  
console.log(buffer() );
console.log(buffer2() );

// function makeBuffer() {
//     var text = '';
  
//     function buffer(piece) {
//       if (arguments.length == 0) { // вызов без аргументов
//         return text;
//       }
//       text += piece;
//     };
  
//     buffer.clear = function() {
//       text = "";
//     }
  
//     return buffer;
//   };
  
//   var buffer = makeBuffer();
  
//   buffer("Тест");
//   buffer(" тебя не съест ");
//   alert( buffer() ); // Тест тебя не съест
  
//   buffer.clear();
  
//   alert( buffer() ); // ""
