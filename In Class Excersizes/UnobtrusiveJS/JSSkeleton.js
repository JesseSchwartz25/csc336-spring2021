//An example of unobtrusive JS.

//jshint esversion: 6
(function() {
  "use strict";
    window.onload = function() {
        //your code goes here.

        let btn = document.getElementById("ok");
        btn.onclick = okayClick;

        let rndm = document.getElementById("number");
        rndm.onclick = playrandom;

        let sta = document.getElementById("sta");
        sta.onclick = stringToArray;



      };

      function okayClick(){
        alert("Booyah");
      }

      function playrandom(){
        let randint = Math.ceil(Math.random() * 10);
        let userguess = prompt("Guess a number between 1 and 10");

        if(randint == userguess){
          alert("You guessed correctly!");
        }
        else{
          alert("The correct answer was " + randint);
        }
      }

      function stringToArray(){
        let str = prompt("Please input a sentence");
        let arr = str.split(' ');
        alert("\"" + arr.join("\", \"")+ "\"");
        console.log(arr);



      }

})();
