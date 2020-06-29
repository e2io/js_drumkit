for (var i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonName = this.innerHTML;
    handleButton(buttonName);
    buttonAnimation(buttonName.toLowerCase());
  });

}

document.addEventListener("keypress", function(event) {

  handleButton(event.key.toUpperCase());
      buttonAnimation(event.key.toLowerCase());

});


function handleButton(key) {

  switch (key) {
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "A":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "S":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "D":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    case "J":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "K":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "L":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;

    default:
      console.log(key);
      break;

  }

}

function buttonAnimation(key){
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");
  },200);

}
