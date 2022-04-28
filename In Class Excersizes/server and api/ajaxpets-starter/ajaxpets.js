/**
// jshint esversion: 6
 // * A webpage for fetching cute pet photos. Puppies (the best) or
 // * kitties will be populated on the page after the user selects their desired
 // * pet type.
 // */
(function() {
  "use strict";

  const URL = 'https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php?animal=';

  window.addEventListener("load", initialize);

  /*
   * TODO: What do we need to initialize?
   */
  function initialize() {
    let pets = qsa("input");
    // console.log(pets[0].value);

    for (let i = 0; i < pets.length; i++) {
      pets[i].onclick = makeRequest;
    }
  }

  /*
   * TODO: Fetch data from the CSE 154 ajax pets api!
   */
  function makeRequest() {
    console.log(this.value);

    let url = URL + this.value; // put url string here
    fetch(url, {
        credentials: 'omit'
      }) // include credentials for cloud9
      .then(checkStatus)
      .then(function(responseText) {
        //success: do something with the responseText
        console.log("responseText");

        let responseArr = responseText.split('\n');
        let pics = id('pictures');
        pics.innerHTML = '';


        for(let i = 0; i < responseArr.length; i++){
          console.log(responseArr[i]);
          let img = document.createElement('img');
          img.src = responseArr[i];
          pics.appendChild(img);
          
        }



      })
      .catch(function(error) {
        //error: do something with error
      });

  }

  /**
   * TODO: Implement any other functions you need
   */

  /* ------------------------------ Helper Functions  ------------------------------ */

  /*
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid result text if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
