var args = process.argv.slice(2);

for (var i = 0 ; i < args.length ; i ++){
  console.log(reverse(args[i]));
}

function reverse (string) {

  var newString = '';

  for (var i = string.length-1 ; i >= 0 ; i--){
    newString+= string[i];
  }

  return newString;
}