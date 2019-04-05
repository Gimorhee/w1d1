var args = process.argv.slice(2);

console.log(pigLatin(args));


function pigLatin(string){
  var pigWord = " ";

  for(var i = 0; i < string.length ; i++){
    pigWord += string[i].slice(1) + string[i].charAt(0) + "ay ";
  }

  return pigWord;
}

