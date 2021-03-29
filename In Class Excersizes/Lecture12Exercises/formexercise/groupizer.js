/**
Starter code for Groupizer page to demonstrate different types of events,
 * the module pattern, and DOM manipulation.
 */

(function() {
  "use strict";

  window.addEventListener("load", init);

  // Note: This function is called as soon as the window is loaded (and the browser
  // has created the HTML DOM for the page)
  function init() {

    // 1. Add event listener for clicking the #add-btn
    // let btn = document.getElementById("add-btn");
    // btn.onclick = btnclick;
    //
    // let members = document.querySelectorAll("ul li input");
    //
    // for(let i = 0; i<members.length; i++){
    //   members[i].onclick = btnclick;
    //   if(members[i].innerHTML == null){
    //     members[i].classList.add("invalid-input");
    //   }
    // }


    document.getElementById("add-btn").addEventListener("click", function() {
      let inputs = document.querySelectorAll("ul input");
      let groupname = document.querySelector("label>input");

      if (groupname.value == "") {
        groupname.classList.add("invalid-input");
        groupname.classList.remove("filled");
        groupname.innerHTML = 'Please input group name';
      } else {
        groupname.classList.add("groupname");
      }

      let empty = 0;
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
          inputs[i].classList.add("invalid-input");
          inputs[i].classList.remove("filled");
          inputs[i].innerHTML = 'Please input member name';
          empty++;
        }
      }



      //have the groups report below if empty == 0;


      if(empty == 0 && groupname.value != ""){

        let confirmed = document.createElement("p");
        let confirmedDiv = document.createElement("div");
        let main = document.querySelector("main");

        confirmed.textContent += "Now the group \"" + groupname.value + "\" is formed:";
        // confirmed.innerHTML += '<br>';
        confirmedDiv.appendChild(confirmed);
      //  main.appendChild(confirmedDiv);

        console.log(confirmed);

        for(let i = 0; i<inputs.length; i++){
          let confirmed = document.createElement("p");
          confirmed.textContent += "" + inputs[i].value;
          confirmed.innerHTML += "<br />";
          inputs[i].btnclick;
          confirmedDiv.appendChild(confirmed);
        }
        // main.appendChild(confirmedDiv);
        main.replaceChild(confirmedDiv, main.lastChild);

      }


    });








    let members = document.querySelectorAll("ul li input");



    for (let i = 0; i < members.length; i++) {
      members[i].onclick = btnclick;
    }



    // 2. Add event listener for changing the #member-size dropdown

    let gsize = document.getElementById("group-size");
    // console.log(gsize.value);

    gsize.onchange = changelist;

  }



  // Add the rest of the functions here!


  function btnclick() {
    this.classList.add("filled");
  }

  function changelist() {

    let inputs = document.querySelectorAll("ul li");
    let dif = Math.abs(this.value-inputs.length);


    console.log("requested length is " + this.value);
    console.log("current length is " + inputs.length);
    console.log("difference is " + dif);

    if(inputs.length == this.value){
      return;
    }

    else if(inputs.length > this.value){
      //remove elemnets

      for(let i = 1; i<dif + 1; i++){
        inputs[inputs.length - i].remove();
      }
    }


    else{
      //add elements
      let list = document.getElementById("member-list");

      for(let i =0; i<dif; i++){
        let toAdd = inputs[0].cloneNode(true);
        toAdd.textContent = "Member " + (inputs.length + i + 1);

        let toAddInput = inputs[0].children[0].cloneNode(true);
        toAddInput.value = "";
        toAdd.appendChild(toAddInput);

        list.appendChild(toAdd);
      }


    }




    // let currlist = document.querySelectorAll("this ");
    //
    // for (let i = 0; i < this.value; i++) {
    //   currlist[i].remove();
    // }
    // for (let i = 0; i < this.value; i++) {
    //   let member = document.createElement("li");
    //   member.textContent = "Member" + i;
    //   let memberinput = document.createElement("input");
    //   memberinput.type = "text";
    //   memberinput.size = "40";
    //
    //   member.appendChild(memberinput);
    //   this.appendChild(member);
    //
    //
    // }
  }

})();
