// Succesfully linked
/*jshint esversion: 6 */ //added this to stop warning from popping up on "let"


function ReverseString(num){
  str = "" + num;

  str = str.split("").reverse().join("");



  return str;
}

var num = 1234;

document.write("This button will flip " + num)


function CallReverseString(){
  document.write(ReverseString(num));
}
