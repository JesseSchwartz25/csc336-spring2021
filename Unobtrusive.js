//An example of unobtrusive JS. 
(function() {
    "use strict"; 
    window.onload = function() {
        
/*
        alert("This alert was fired from inside a window.onload handler. All of the javascript files have been run, so let's try to see what x is set to.");

        alert("This is inside the module, so let's check the value of x. x = " + x);

        alert("It should be undefined, because the module has given us a 'private' namespace, where we don't inherit the symbols from the global namespace.");
*/
      let button = document.getElementById("cute");
      let element = document.getElementById('text');
    
      //event handlder, another anonymous function
      button.addEventListener("click",function(){
      element.innerHTML = 'Welcome to my page!';
  

      })



    };
})();
