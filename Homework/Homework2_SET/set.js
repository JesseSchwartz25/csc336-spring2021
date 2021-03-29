//jshint esversion: 6

(function() {
  "use strict";
  window.onload = function() {

    /*
            alert("This alert was fired from inside a window.onload handler. All of the javascript files have been run, so let's try to see what x is set to.");

            alert("This is inside the module, so let's check the value of x. x = " + x);

            alert("It should be undefined, because the module has given us a 'private' namespace, where we don't inherit the symbols from the global namespace.");
    */
    let start = document.getElementById("start");
    let setcount = document.getElementById('set-count');
    let timer = document.querySelector('select');
    let time = document.getElementById('time');
    let gameview = document.getElementById('game-view');
    let menu = document.getElementById('menu-view');
    let game = document.getElementById('game');

    let minutes = 0;
    let seconds = 0;
    let a = null;
    start.onclick = startGame;
    // start.addEventListener("click",function(){
    //starting the game


    // })


    function startGame() {

      //CSS
      menu.classList.add('hidden');
      gameview.classList.remove('hidden');

      //Timer
      setcount.textContent = 0;
      time.textContent = timer.value;
      if (timer.value == 'none') {
        //count up
        // let minutes = 0;
        count();

      } else if (timer.value == '60') {
        //give 1 minute
        minutes = 1;
        count();

      } else if (timer.value == '180') {
        //3 minutes
        minutes = 3;
        count();

      } else {
        //5 minutes
        minutes = 5;
        count();
      }


      //Building the board
      let board = new Array(12);
      for(let i=0; i < 12; i++){
        board[i] = buildBoard();
        game.appendChild(board[i]);
      }

    }


    function buildBoard(){
      //style, shape color, count
      let style =  ['outline', 'solid', 'striped'];
      let shape = ['diamond', 'oval', 'squiggle'];
      let color = ['green', 'purple', 'red'];
      //count: 1, 2, 3



      let styleRand = Math.floor(Math.random() * 3);
      let shapeRand = Math.floor(Math.random() * 3);
      let colorRand = Math.floor(Math.random() * 3);
      let count     = Math.ceil(Math.random() * 3); //because this is real, not an array.



      //accounting for easy mode
      let mode = document.querySelectorAll('input');
      if(mode[0].checked){
        //in easy mode
        styleRand = 1;
        //solid
      }

      //build the card
      let filename = 'img/' + style[styleRand] + '-' + shape[shapeRand] + '-' + color[colorRand] + '.png';







      //console.log(filename);

      let cardDiv = document.createElement('div');
      let cardImg = document.createElement('img');

      cardDiv.id = 'img/' + style[styleRand] + '-' + shape[shapeRand] + '-' + color[colorRand] + '-' + count;
      //console.log(cardImg.id);

      cardImg.src = filename;
      cardDiv.classList.add('card');


      //testing for duplicates;;

          for(let i = 0; i < game.children.length; i++){
            //  console.log(game.children[i].id);
              if(game.children[i].id == cardDiv.id){
                console.log("duplicate on " + i);
                console.log("bad: " + cardDiv.id)
                cardDiv = buildBoard();
                console.log("new: " + cardDiv.id)
                return cardDiv;
                //this recursively calls the create function, but it will only add it to the page if it does not alread exist.
                //tbh I'm a little shocked I got this on like the second try.
              }


          }



      for(let i=0; i<count; i++){
        cardImg = document.createElement('img');
        cardImg.src = filename;
        cardDiv.appendChild(cardImg);
        //console.log('added 1 to ' + filename);
        //console.log(cardDiv.children[count-1]);
      }

      return cardDiv;


    }

    function count(end) {
      //sure theres a better way to do this but this works
      a = setInterval(toTime, 1000);

    }


    function toTime(timecount){
      //for counting up
      if(seconds ==60){
        minutes++;
        seconds = 0;
      }

      //for counting down
      if(seconds < 0){
        minutes--;
        seconds = 59;
      }

      if(minutes < 0){
        //end of timer situation
        clearInterval(a);
        alert("Time is up");
        minutes = 0;
        seconds = 0;
        // count(true);
      }

      //timer string for html
      let secondsString = '' + seconds;
      if(seconds < 10){
        secondsString = '0' + secondsString;
      }

      //works for counting up and down.
      let timeDisplay = minutes + ':' + secondsString;
      time.textContent = timeDisplay;
      if(timer.value == 'none'){
        seconds++;
      }
      else{
        seconds--;
      }
    }

  };
})();
