// Succesfully linked the JS_Event.html

/*jshint esversion: 6 */ //added this to stop warning from popping up on "let"




var count = 0;

function moveImage(){


  let redBallimg = document.getElementById("RedBall");




  redBallimg.style.position='relative';
  redBallimg.style.left = '0px';

  if(count == 0){
    redBallimg.style.left = parseInt(redBallimg.style.left) + 50 + 'px';
    count++;
  }else{
    redBallimg.style.left = parseInt(redBallimg.style.left) + 0 + 'px';
    count--;
  }


  return;
}
