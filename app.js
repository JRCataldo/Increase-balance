// grab html elements
var htmlSaldo = document.getElementById('saldo'); 
var htmlUserInput = document.getElementById('enterNumber');
var htmlResultaat = document.getElementById('result');
var htmlButton = document.getElementById('add');
var htmlReset = document.getElementById('reset');

// assign value to variables
var beginSaldo = 0;

// assign static values to elements
htmlSaldo.innerHTML = 0;

// eventListener style 1
htmlButton.addEventListener("click", saveNumber);

// eventListener style 2 with function
htmlReset.onclick = function reset(){beginSaldo = 0,  htmlResultaat.innerHTML = 0};

// Functions
function saveNumber() {

  var gebruikersInput = htmlUserInput.value;

  beginSaldo = beginSaldo + +gebruikersInput;

  htmlResultaat.innerHTML = beginSaldo;
}
