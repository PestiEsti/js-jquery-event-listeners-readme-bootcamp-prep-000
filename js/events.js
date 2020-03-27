//define functions here
function getIt() {
  alert("Hey!");
}

function frameIt() {
  $('img').addClass("tasty");
}

function pressIt() {
  alert('hey! You pressed g!')
}

$(document).ready(function(){

// call functions here
   {
    $('p').on("click", getIt());
    $('img').on("load", frameIt());
    $('input').on("keydown", function(key) {
      
    })
  }
});

