/**
 * Fetches trivia about a number a user inputs (or random if they click the "Fetch Random
 * Number Fact!" button) and displays the trivia on the page.
 */
"use strict";
(function() {
    const URL = "http://numbersapi.com/";

    window.addEventListener("load", init);

    /**
     * Sets up event listeners for fetching number trivia.
     * first get the number from user input
     */
    function init() {
      id("fetch-num").addEventListener("click", function() {
          // your code here
          let numberValue = id('num-box').value;
          fetchNum(numberValue);
        });
      id('fetch-random-num').addEventListener("click", function() {
        fetchNum('random');
      });

      }

      /**
       * Fetches trivia data about the given numberValue and displays it on the page if
       * successful, logging an error to the console if an error occurred during the request.
       * @param {int} numberValue - value of number to request trivia for.
       */
      function fetchNum(numberValue) {
        // URL with the specified number
        let url = URL + numberValue;
        // your code here with fetch with Ajax

        fetch(url, {credentials: 'omit'})
           .then(checkStatus)
           // .then(resp => resp.json())
           .then(function(responseText) {
                //success: do something with the responseTex


                //For the life of me I couldnt figure this out because I was recieving a cors object rather than a promise or JSON. I ended up switching the helper method for checkStatus() from the included one to the JSSkeleton one and it worked perfectly almost immediately

                showTriviaResult(responseText);
            })
           .catch(function(error) {
               //error: do something with error
               console.log(error)
           });




      }


      /**
       * Displays the trivia result response to the #output paragraph.
       * @param {string} response - response string from Numbers API request
       */
      function showTriviaResult(response) {
        let output = id('output');
        // response = JSON.parse(response);
        console.log(response);
        output.textContent = response;
      }

      /* ------------------------------ Helper Functions  ------------------------------ */

      /**
       * Helper function to return the response's result text if successful, otherwise
       * returns the rejected Promise result with an error status and corresponding text
       * @param {object} response - response to check for success/error
       * @return {object} - valid response if response was successful, otherwise rejected
       *                    Promise result
       */
      // function checkStatus(response) {
      //   if (!response.ok) {
      //     throw Error("Error in request: " + response.statusText);
      //   }
      //   return response; // a Response object
      // }


      function checkStatus(response) {
          if (response.status >= 200 && response.status < 300) {
              return response.text();
          } else {
              return Promise.reject(new Error(response.status+": "+response.statusText));
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
    })();
