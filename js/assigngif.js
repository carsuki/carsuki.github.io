// assigngif.js
// second half of randomgif.js
// carsuki '20

// select random gif
var randomset = randomgifs[Math.floor(Math.random() * randomgifs.length)]; 
// force specific gif
// for demo/test purposes (comment out when unneeded)
// var randomset = randomgifs[114];

// assign the selected gif to the image element on the page
document.querySelector("#random > source").setAttribute("src", randomset.gif);
document.querySelector("#random").load();
document.querySelector("#random").play();

// fill in the source text
document.getElementsByClassName("source-label")[0].innerHTML = randomset.name;
document.getElementsByClassName("source-label")[0].href=randomset.link