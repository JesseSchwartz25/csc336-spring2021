//jshint esversion: 6

(function() {
  "use strict";
  window.onload = function() {
    document.getElementById("add").onclick = addItem;


    let removebtn = document.createElement("button");
    removebtn.innerHTML = 'remove';
    let btndiv = document.querySelector("div");
    btndiv.appendChild(removebtn);

    removebtn.onclick = removeItem;
  };

  function addItem() {
    // your code goes here

    let list = document.getElementById("list");
    let input = document.getElementById("item").value;

    console.log(input);

    let toAdd = document.createElement("li");
    toAdd.textContent = input;

    list.appendChild(toAdd);
    document.getElementById("item").value = '';
    setColors();
  }

  function removeItem() {
    let list = document.getElementById("list");
    let input = document.getElementById("item").value;

    for (let i = 0; i < list.children.length; i++) {

      console.log("input is " + input);
      console.log("child[" + i + "] is " + list.children[i].textContent);

      if (input.toLowerCase() === list.children[i].textContent.toLowerCase()) {
        console.log("input is " + input.toLowerCase());
        console.log("child[" + i + "] is " + list.children[i].textContent.toLowerCase());
        list.removeChild(list.children[i]);
        document.getElementById("item").value = '';
        setColors();
        return;
      }
    }

  }

  function setColors(){
    let list = document.getElementById("list");

    for(let i = 0; i<list.children.length; i++){
      if(i % 2 === 1){
        list.children[i].style.backgroundColor = "yellow";
      }
      else{
          list.children[i].style.backgroundColor = "white";
      }
    }
  }

})();
