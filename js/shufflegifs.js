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
  var gifWindow = document.createElement("div");
  var gifWinHead = document.createElement("div");
  var gifWinHeadText = document.createElement("a");
  var currentNumber = randomgifs[id].number;
  var gifWindowId = "video" + currentNumber;
  var selector = '#video' + currentNumber;
  
  if (i === gifCount - 1) {
    var vidSelector = '#win' + randomgifs[gifCount - 2].number;
    document.querySelector(vidSelector).classList.add("win-final");
  } else {
  
  function navigate(url) {
    window.location.href = url;
  }
  
  // creation of a window
  gifWindow.classList.add("window", "box-shadow");
  
  gifWinHead.classList.add("window-header");
  gifWindow.appendChild(gifWinHead);
  
  gifWinHeadText.textContent = randomgifs[id].name;
  gifWinHeadText.href = randomgifs[id].link;
  gifWinHead.appendChild(gifWinHeadText);
  
  // fill window with gif (mp4)
  gifWindow.setAttribute("id", "win" + currentNumber); 
  gifWindow.innerHTML += 
  `<video preload="metadata" autoplay loop muted playsinline id="` + gifWindowId + `">
  <source src =` + `../` + randomgifs[id].gif; + `" type="video/mp4">
  </video>`
  document.querySelector("#gif-container").appendChild(gifWindow);
  
  source = document.createElement("source");
  source.src = '../' + randomgifs[id].gif;
  source.type = "video/mp4";
  
  var currentVideo = document.querySelector("#video" + currentNumber);
  currentVideo.appendChild(source);
  currentVideo.load();
  currentVideo.play();
  };
}

var amount = document.querySelectorAll('a').length;
console.log(amount + ' videos loaded')
