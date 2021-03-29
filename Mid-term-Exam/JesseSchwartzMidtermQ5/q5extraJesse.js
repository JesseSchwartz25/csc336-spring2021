(function(){
  window.onload = function(){

    let bills = document.querySelectorAll("img");
    let amount = 0;
    bills[0].onclick = function(){amount += 1; console.log(amount);addTotal(amount);};
    bills[1].onclick = function(){amount += 2; console.log(amount);addTotal(amount);};
    bills[2].onclick = function(){amount += 5; console.log(amount);addTotal(amount);};
    bills[3].onclick = function(){amount += 10; console.log(amount);addTotal(amount);};


    // console.log(amount);




  };

  function addTotal(amount){
    let amounttext = document.getElementById("total");
    amounttext.textContent = "Total: " + amount;

    let body = document.querySelector("body");

    body.appendChild(amounttext);
  }

})();
