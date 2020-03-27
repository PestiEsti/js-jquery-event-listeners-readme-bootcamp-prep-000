//define functions here
function getIt() {
  alert("Hey!");
}

function frameIt() {
  $('img').addClass("tasty");
}
$(document).ready(function(){

// call functions here
   {
    $('p').on("click", getIt());
    $('img').on("load", frameIt());
  }
});

