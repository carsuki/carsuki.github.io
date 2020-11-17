var modal = document.getElementsByClassName('modal');
var btn = document.getElementsByClassName("opener");
var close = document.getElementsByClassName("close");

  btn[0].onclick = function() {
    modal[0].style.display = "flex";
    modal[0].style.position = "fixed";
  }

  close[0].onclick = function() {
      modal[0].style.display = "none";
      modal[0].style.position = "absolute";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          modal.style.position = "absolute";
      }
  }
