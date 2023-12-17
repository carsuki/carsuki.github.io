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

for (let i = 1; i < gifCount; i++) {
  
  var id = i;
  
  // creation of a window
  var gifWindow = document.createElement("div");
  gifWindow.classList.add("window", "box-shadow");
  
  var gifWinHead = document.createElement("div");
  gifWinHead.classList.add("window-header");
  gifWindow.appendChild(gifWinHead);
  
  var gifWinHeadText = document.createElement("a");
  gifWinHeadText.textContent = randomgifs[id].name;
  gifWinHeadText.href = randomgifs[id].link;
  gifWinHead.appendChild(gifWinHeadText);
  
  // fill window with gif
  gifWindow.setAttribute("id", i); 
  
  var gifWinImg = document.createElement("img");
  gifWinImg.src = '../' + randomgifs[id].gif;
  
  gifWindow.appendChild(gifWinImg)
  
  document.getElementsByClassName("fakebody")[0].append(gifWindow);
}

var amount = document.querySelectorAll('a').length;
console.log(amount + ' images loaded')
