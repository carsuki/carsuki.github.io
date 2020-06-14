var modal = document.getElementsByClassName('modal');
var openBtn = document.getElementById("modal-open");
var closeBtn = document.getElementsByClassName("modal-close")[0];

openBtn.onclick = function() {
  modal[0].style.display = "block";
}

closeBtn.onclick = function() {
  modal[0].style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
}