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

      toggleGame();


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
      let mode = document.querySelectorAll('input');

      let board = new Array([]);
      if (mode[0].checked) {
        //in easy mode
        board = Array(9);
        console.log(board.length);
      } else {
        board = Array(12);
      }

      for (let i = 0; i < board.length; i++) {
        board[i] = buildBoard();
        game.appendChild(board[i]);
        board[i].onclick = select;
      }



      let refresh = document.getElementById('refresh');
      refresh.onclick = refreshBoard;





      let back = document.getElementById('main-btn');
      back.onclick = toggleGame;

    }

    function select() {
      this.classList.toggle('selected');

      let selected = document.getElementsByClassName('selected');
      if (selected.length == 3) {
        checkSet(selected);
      }
    }

    function toggleGame() {
      menu.classList.toggle('hidden');
      gameview.classList.toggle('hidden');
      game.innerHTML = '';

      clearInterval(a);
      seconds = 0;
      minutes = 0;

    }


    function checkSet(selected) {
      console.log('checking for set');


      //putting the cards to string
      let set1 = selected[0].id;
      // console.log(set1);

      let set1arr = set1.split('-');
      // console.log(set1arr);

      let set2 = selected[1].id;
      let set2arr = set2.split('-');

      let set3 = selected[2].id;
      let set3arr = set3.split('-');


      //checking for sets

      let styleset = false;
      let shapeset = false;
      let colorset = false;
      let countset = false;

      //style
      if (set1arr[0] != set2arr[0] && set1arr[0] != set3arr[0] && set3arr[0] != set2arr[0]) {
        console.log('all different style');
        styleset = true;
      }
      if (set1arr[0] == set2arr[0] && set2arr[0] == set3arr[0]) {
        console.log('all same style');
        styleset = true;
      }
      //shape
      if (set1arr[1] != set2arr[1] && set1arr[1] != set3arr[1] && set3arr[1] != set2arr[1]) {
        console.log('all different shape');
        shapeset = true;
      }
      if (set1arr[1] == set2arr[1] && set2arr[1] == set3arr[1]) {
        console.log('all same shape');
        shapeset = true;
      }

      //color
      if (set1arr[2] != set2arr[2] && set1arr[2] != set3arr[2] && set3arr[2] != set2arr[2]) {
        console.log('all different color');
        colorset = true;
      }
      if (set1arr[2] == set2arr[2] && set2arr[2] == set3arr[2]) {
        console.log('all same color');
        colorset = true;
      }

      //count
      if (set1arr[3] != set2arr[3] && set1arr[3] != set3arr[3] && set3arr[3] != set2arr[3]) {
        console.log('all different count');
        countset = true;
      }
      if (set1arr[3] == set2arr[3] && set2arr[3] == set3arr[3]) {
        console.log('all same count');
        countset = true;
      }


      let setsfound = document.getElementById('set-count');

      if (styleset && shapeset && colorset && count) {
        console.log('found a set');
        setsfound.textContent++;

        for (let i = 0; i < 3; i++) {
          let settext = document.createElement('h1');
          settext.textContent = 'SET!';

          for (let j = 0; j < selected[i].children.length; j++) {
            selected[i].removeChild(selected[i].firstChild);
            console.log('removed child from', i);
            console.log('length', selected[i].children.length);
          }
          if (selected[i].children.length == 1) {
            selected[i].removeChild(selected[i].firstChild);
            //dunno why I need this but it helps get rid of all the images
          }
          selected[i].append(settext);


        }

        setTimeout(rebuild, 1000);
      } else {
        //not a set


        let notSet = 'Not a Set :(';
        let card0 = selected[0].innerHTML;
        let card1 = selected[1].innerHTML;
        let card2 = selected[2].innerHTML;

        console.log(card0);


        for (let i = 0; i < 3; i++) {
          let settext = document.createElement('h1');
          settext.textContent = notSet;

          for (let j = 0; j < selected[i].children.length; j++) {
            // selected[i].removeChild(selected[i].firstChild);
            selected[i].innerHTML = '';
            console.log('removed child from', i);
            console.log('length', selected[i].children.length);
          }
          if (selected[i].children.length == 1) {
            //selected[i].removeChild(selected[i].firstChild);
            //dunno why I need this but it helps get rid of all the images
          }
          selected[i].append(settext);
        }

        setTimeout(function(){
          let selected = document.getElementsByClassName('selected');
          // console.log(card0);
          selected[0].innerHTML = card0;
          selected[1].innerHTML = card1;
          selected[2].innerHTML = card2;
          selected[0].classList.toggle('selected');
          selected[1].classList.toggle('selected');
          selected[0].classList.toggle('selected');

            if (timer.value == 'none') {
              seconds += 15;
            }
            else{
              seconds -= 15;
            }



        }, 1000);
      }




    }

    function refreshBoard(){

      game.innerHTML = '';


      let mode = document.querySelectorAll('input');

      let board = new Array([]);
      if (mode[0].checked) {
        //in easy mode
        board = Array(9);
        console.log(board.length);
      } else {
        board = Array(12);
      }

      for (let i = 0; i < board.length; i++) {
        board[i] = buildBoard();
        game.appendChild(board[i]);
        board[i].onclick = select;
      }
    }




    function rebuild() {

      let selected = document.getElementsByClassName('selected');


      for (let i = 0; i < 2; i++) {
        console.log(selected[i]);
        selected[i].removeChild(selected[i].firstChild);
        let newCard = buildBoard();
        newCard.onclick = select;
        selected[i].replaceWith(newCard);

      }
      console.log(selected);
      selected[0].removeChild(selected[0].firstChild);
      let newCard = buildBoard();
      selected[0].replaceWith(newCard);
      newCard.onclick = select;
      //not sure why but this needs to be here otherwise it doesnt work. something I'm missing about how js works with arrays and loops porbably.


    }





    function buildBoard() {
      //style, shape color, count
      let style = ['outline', 'solid', 'striped'];
      let shape = ['diamond', 'oval', 'squiggle'];
      let color = ['green', 'purple', 'red'];
      //count: 1, 2, 3



      let styleRand = Math.floor(Math.random() * 3);
      let shapeRand = Math.floor(Math.random() * 3);
      let colorRand = Math.floor(Math.random() * 3);
      let count = Math.ceil(Math.random() * 3); //because this is real, not an array.



      //accounting for easy mode
      let mode = document.querySelectorAll('input');
      if (mode[0].checked) {
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

      for (let i = 0; i < game.children.length; i++) {
        //  console.log(game.children[i].id);
        if (game.children[i].id == cardDiv.id) {
          console.log("duplicate on " + i);
          console.log("bad: " + cardDiv.id);
          cardDiv = buildBoard();
          console.log("new: " + cardDiv.id);
          return cardDiv;
          //this recursively calls the create function, but it will only add it to the page if it does not alread exist.
          //tbh I'm a little shocked I got this on like the second try.
        }


      }



      for (let i = 0; i < count; i++) {
        cardImg = document.createElement('img');
        cardImg.src = filename;
        cardImg.alt = cardDiv.id;
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


    function toTime(timecount) {
      //for counting up
      if (seconds >= 60) {
        minutes++;
        seconds -= 60;
      }

      //for counting down
      if (seconds < 0) {
        minutes--;
        seconds += 60;
      }

      if (minutes < 0) {
        //end of timer situation
        clearInterval(a);
        alert("Time is up");
        minutes = 0;
        seconds = 0;
        // count(true);

        let refresh = document.getElementById('refresh');
        refresh.onclick = null;
        for (let i =0; i < game.children.length; i++){
              game.children[i].onclick = null;
              // children[i].classList.remove('selected');
        }



      }

      //timer string for html
      let secondsString = '' + seconds;
      if (seconds < 10) {
        secondsString = '0' + secondsString;
      }

      //works for counting up and down.
      let timeDisplay = minutes + ':' + secondsString;
      time.textContent = timeDisplay;
      if (timer.value == 'none') {
        seconds++;
      } else {
        seconds--;
      }
    }

  };
})();
