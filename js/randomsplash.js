// randomsplash.js
// choose random image for site footer
// carsuki '21

// list all splash images
var randomsplash = ["img/splash/original.png", "img/splash/patagonia.png", "img/splash/y2k.png"];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

shuffle(randomsplash);

var splashImage = document.querySelector(".splash img")
splashImage.src = randomsplash[Math.floor(Math.random() * randomsplash.length)];