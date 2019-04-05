var args = process.argv.slice(2);
console.log(obfuscate(args[0]));

function obfuscate(string) {
  var newString = '';

  for (var i = 0 ; i < string.length ; i++){
    switch(string[i]) {
      case 'a':
        newString += '4';
        break;
      case 'e':
        newString += '3';
        break;
      case 'o':
        newString += '0';
        break;
      case 'l':
        newString += '1';
        break;
    default:
        newString += string[i];
    }
  }
  return newString;
}

// function obfuscate(string) {
//   var newString = string.split('');

//   for (var i = 0 ; i < newString.length ; i ++){
//     if(newString[i] == 'a'){
//       newString[i] = '4';
//     } else if(newString[i] == 'e'){
//       newString[i] = '3';
//     } else if(newString[i] == 'o'){
//       newString[i] = '0';
//     } else if(newString[i] == 'l'){
//       newString[i] = '1';
//     }
//   }
//   return newString.join('');
// }
