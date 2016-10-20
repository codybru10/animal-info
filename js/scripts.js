$(document).ready(function() {

  var animal = prompt("Pick one: snake, turtle, dog");

  if (animal === "snake") {
    $(".snakes").show();
  } else if (animal === "turtle" ) {
    $(".turtles").show();
  } else if (animal === "dog") {
    $(".dogs").show();
  } else {
    alert("Invalid choice");
  };

});
