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

shuffle(randomgifs);

for (let step = 1; step < 78; step++) {
  var contain = document.getElementById("container")
  var containLink = document.createElement("a");
  contain.appendChild(containLink);

  var gif = document.createElement("img");
  gif.setAttribute("id", step); 
  containLink.appendChild(gif)

  var child = document.getElementById(step);
  var id = step - 1;

  child.src = '../' + randomgifs[id].gif;

  child.parentElement.href = randomgifs[id].link;

  var cap = document.createElement("p");
  cap.className = "caption";

  cap.innerHTML = randomgifs[id].name;

  child.parentElement.appendChild(cap);
}

var amount = document.querySelectorAll('a').length;
console.log(amount + ' images loaded')
