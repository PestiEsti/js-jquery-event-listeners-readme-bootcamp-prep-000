//define functions here
function getIt() {
  alert("Hey!");
}

function frameIt() {
  $('img').addClass("tasty");
}

function pressIt(key) {
  if(key.which == 71){
    alert('hey! You pressed g!')
  }
  
}

$(document).ready(function(){

// call functions here
   {
    $('p').on("click", getIt());
    $('img').on("load", frameIt());
    $('input').on("keydown", pressIt(key));
  }
});

