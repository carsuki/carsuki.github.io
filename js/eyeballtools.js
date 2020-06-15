// eyeballtools.js
// misc. website functions
// carsuki '20

// eyeballPulsar
function eyeballPulsar() {
  document.getElementsByClassName("header-img")[0].setAttribute("class", "pulsing"); 
}

// eyeballChroma
var clickState = 0;
var chroma = document.getElementById('chroma');
var image = document.getElementById('random');
var source = document.getElementsByClassName("source-label")[0];

chroma.addEventListener('click', function() {

  if (clickState == 0) {
    image.src = 'img/gif/eyeball.gif';
    source.innerHTML = 'Paloma Kop';
    source.href='https://giphy.com/palomakop/';
    document.getElementById('gif-container').style.border = "0px solid #000";
    clickState = 1;
  } else if (clickState == 1) {
    eyeballTV();
    clickState = 2;
  }

});

// eyeballTV
function eyeballTV() {
  image.setAttribute("class", "shutdown");
  setTimeout(() => { document.getElementById('gif-container').style.height = "0px";
    document.getElementById('gif-container').parentNode.removeChild(document.getElementById('gif-container'));
    source.innerHTML = "???";
    source.href = "" }, 1600);
}