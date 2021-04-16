//jshint esversion: 6
(function() {
  "use strict";

  let gamesplayed = -1;
  let swaps = 0;
  let winkeep = 0;
  let winswap = 0;
  let score = 0;

  let firstSwap = true;

  window.onload = function() {

    let button = document.getElementById("start");
    let end = id("end");
    let stats = id('statsbtn');

    //event handlder, another anonymous function
    button.onclick = startGame;
    end.onclick = endGame;
    stats.onclick = showStats;





  };


  function startGame() {
    gamesplayed++;
    let gameview = id("game-view");
    gameview.classList.remove("hidden");

    let game = id('game');

    let difficulty = id("difficulty");
    difficulty.classList.add("hidden");

    let scoretext = id('score');
    scoretext.textContent = score;

    //clear the board
    game.innerHTML = '';
    firstSwap = true;

    //build the board:
    let numdoors = document.querySelectorAll('input');
    if (numdoors[0].checked) {
      numdoors = 3;
    } else {
      numdoors = 5;
    }
    // console.log(numdoors);

    //input images

    for (let i = 0; i < numdoors; i++) {
      let doorDiv = document.createElement('div');
      let doorImg = document.createElement('img');

      doorImg.src = 'door.jpg';
      doorImg.classList.add('door');
      doorDiv.classList.add('images');
      doorDiv.id = i;

      doorDiv.appendChild(doorImg);
      doorDiv.onclick = doorClicked;
      game.appendChild(doorDiv);
    }


    let randdoor = Math.floor(Math.random() * 3);
    console.log(randdoor);

    game.children[randdoor].classList.add('correct');

    console.log(game.children.length);






  }


  function doorClicked() {

    if(firstSwap){
      console.log('door clicked');
      if (document.getElementsByClassName('selected').length == 0) {
        //this is just making sure only one at a time
        this.classList.add('selected');

        if (this.classList.contains('correct')) {
          console.log('good guess!');
        }
      }
      setTimeout(openDoor, 2000);
      firstSwap = false;
    }
    else{
      console.log('swapped');

      this.classList.add('swapped');

      if(this.classList.contains('correct')){
        this.firstChild.src = 'money.png';
        score++;
        winswap++;
      }
      else{
        this.firstChild.src = 'guessilldie.png';
        score--;
      }

      swaps++;
      setTimeout(startGame, 2000);
        id('keep').remove();
    }


  }

  function openDoor() {
    console.log('opening door');
    let doors = document.getElementsByClassName('images');

    let freedoor = '';

    for (let i = 0; i < doors.length; i++) {
      if (doors[i].classList.contains('correct') || doors[i].classList.contains('selected') || doors[i].classList.contains('opened')) {
        continue;
      }

      freedoor += i;
      doors[i].classList.add('clickable');
      doors[i].onclick = null;

    }

    console.log(freedoor);
    let doorToOpen = Math.floor(Math.random() * freedoor.length);
    doorToOpen = freedoor.charAt(doorToOpen);
    console.log('open door', doorToOpen);

    doors[doorToOpen].firstChild.src = 'guessilldie.png';
    doors[doorToOpen].classList.add('opened');
    doors[doorToOpen].classList.remove('clickable');

    keepOrSwap();

  }

  function keepOrSwap(){
      let keepbtn = document.createElement('button');
      keepbtn.textContent = 'Keep';

      let instructions = document.createElement('p');
      instructions.textContent = 'If you wish to keep your original door, press the \'Keep\' button. You may switch your door if you would like by clicking on another door';
      let gameview = id("game-view");

      let keepDiv = document.createElement('div');

      keepDiv.appendChild(keepbtn);
      keepDiv.appendChild(instructions);
      keepDiv.id = 'keep';

      gameview.appendChild(keepDiv);




      let cdoors = document.getElementsByClassName('clickable');
      // cdoors.onclick = swap;

      for(let i = 0; i < cdoors.length; i++){
        cdoors[i].onclick = swap;
      }

      keepbtn.onclick = keep;
  }

  function swap(){

    console.log('swapped');

    this.classList.add('swapped');

    if(this.classList.contains('correct')){
      this.firstChild.src = 'money.png';
      score++;
      winswap++;
    }
    else{
      this.firstChild.src = 'guessilldie.png';
      score--;
    }

    swaps++;
    setTimeout(startGame, 2000);
      id('keep').remove();
  }

  function keep(){
    let door = document.getElementsByClassName('selected');

    if(door[0].classList.contains('correct')){
      console.log('you win!');
      door[0].firstChild.src = 'money.png';
      score++;
      winkeep++;
    }
    else{
      console.log('maybe next time');
      door[0].firstChild.src = 'guessilldie.png';
      score--;
    }




    setTimeout(startGame, 2000);

    id('keep').remove();
  }



  function endGame() {
    let gameview = id("game-view");
    gameview.classList.toggle("hidden");

    let difficulty = id("difficulty");
    difficulty.classList.toggle("hidden");

    game.innerHTML = '';

    gamesplayed = -1;
    swaps = 0;
    winkeep = 0;
    winswap = 0;
  }

  function showStats() {
    id('stats').classList.toggle("hidden");

    let games = id('games');
    games.textContent = gamesplayed;

    let swapstext = id('swapped');
    swapstext.textContent = swaps;

    let winkeeptext = id('winkeep');
    let winswaptext = id('winswap');

    winkeeptext.textContent = winkeep / (gamesplayed - swaps);
    winswaptext.textContent = winswap / swaps;



  }



  function id(name) {
    return document.getElementById(name);
  }
})();
