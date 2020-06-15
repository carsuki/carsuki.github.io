var modal = document.getElementsByClassName('modal');
var btn = document.getElementsByClassName("opener");
var close = document.getElementsByClassName("close");

  btn[0].onclick = function() {
    modal[0].style.display = "block";
  }

  close[0].onclick = function() {
      modal[0].style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
