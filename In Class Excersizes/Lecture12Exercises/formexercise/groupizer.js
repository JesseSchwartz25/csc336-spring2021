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
    let btn = document.getElementById("add-btn");
    btn.onclick = btnclick;

    


    // 2. Add event listener for changing the #member-size dropdown




  }

  function btnclick(){
    this.style.backgroundColor = "yellow";
  }

  // Add the rest of the functions here!

})();
