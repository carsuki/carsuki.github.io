// assigngif.js
// second half of randomgif.js
// carsuki '20

// select random gif
var randomset = randomgifs[Math.floor(Math.random() * randomgifs.length)];
console.log(randomset); 

// assign the selected gif to the image element on the page
document.querySelector('#random').src = randomset.gif;

// fill in the source text
document.getElementsByClassName("source-label")[0].innerHTML = randomset.name;
document.getElementsByClassName("source-label")[0].href=randomset.link