
/*******************************************************************handling mouse click*******************************************************************/

for (var i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonName = this.innerHTML;
    handleButton(buttonName);
    buttonAnimation(buttonName.toLowerCase());
  });

}

/*******************************************************************handling keyboard press*******************************************************************/

document.addEventListener("keypress", function(event) {

  handleButton(event.key.toUpperCase());
  buttonAnimation(event.key.toLowerCase());

});

/*******************************************************************Function to play the audio files*******************************************************************/

function handleButton(key) {

  switch (key) {
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.preload = "auto";
      tom1.play();
      break;
    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.preload = "auto";
      tom2.play();
      break;
    case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.preload = "auto";
      tom3.play();
      break;
    case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.preload = "auto";
      tom4.play();
      break;
    case "J":
      var crash = new Audio("sounds/crash.mp3");
      crash.preload = "auto";
      crash.play();
      break;
    case "K":
      var snare = new Audio("sounds/snare.mp3");
      snare.preload = "auto";
      snare.play();
      break;
    case "L":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.preload = "auto";
      kick.play();
      break;
    default:
      console.log(key);
      break;
      
  }

}

/*******************************************************************Animated box shadow*******************************************************************/

function buttonAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 200);

}
