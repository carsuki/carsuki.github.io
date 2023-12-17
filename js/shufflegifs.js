function shuffle (array) {
    var j, x, index;
    for (index = array.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = array[index];
        array[index] = array[j];
        array[j] = x;
    }
    return array;
}

shuffle(randomgifs);

for (let i = 1; i < gifCount; i++) {
  
  var id = i;
  
  function navigate(url) {
    window.location.href = url;
  }
  
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
  gifWinImg.href = randomgifs[id].gif;
  
  gifWindow.appendChild(gifWinImg)
  
  document.getElementsByClassName("fakebody")[0].append(gifWindow);
}

var amount = document.querySelectorAll('a').length;
console.log(amount + ' images loaded')
