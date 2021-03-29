//jshint esversion: 6

(function(){
  "use strict";
  window.onload = function(){

    document.getElementById("compute").onclick = ComputeClick;
    document.getElementById("clear").onclick = ClearClick;




  };


  function ComputeClick(){
    let earned = document.getElementsByClassName("earned");
    let max = document.getElementsByClassName("max");

    let earnedint = 0;
    let maxint = 0;

    for(let i = 0; i < max.length; i++){
      earnedint -= -earned[i].value;
      maxint -= -max[i].value;

      //with +'s it would concatenate. this fixed that. I'm sure theres a better way.

      //console.log(max[i].value + earned[i].value);
    }
    console.log("earned " + earnedint);
    console.log("max " + maxint);
    let score =  100* (earnedint / maxint);
    score = Math.round(score);

    let curve = document.getElementById("curve").checked;

    if(curve){
      score += 5;
    }

    if(score > 100){
      score = 100;
    }

    let scorediv = document.createElement("div");
    scorediv.textContent = score;

    let resultsarea = document.getElementById("resultsarea");

    resultsarea.appendChild(scorediv);


    if(score >= 60){
    //  scorediv.style.backgroundColor = "#ccffcc";
      scorediv.classList.add("pass");
    }
    else{
    //  scorediv.style.backgroundColor = "#ffcccc";
    scorediv.classList.add("fail");
    }


  }



  function ClearClick(){
    let earned = document.getElementsByClassName("earned");
    let max = document.getElementsByClassName("max");

    for(let i = 0; i < earned.length; i++){
      max[i].value = '';
      earned[i].value = '';
    }
  }


})();
