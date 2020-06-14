var modal = document.getElementsByClassName('modal');
var btn = document.getElementsByClassName("opener");
var close = document.getElementsByClassName("close");

var node = document.createElement("A");
var textnode = document.createTextNode("a");
var label = document.getElementsByClassName('source-label');
node.appendChild(textnode)
document.getElementById("label-span").appendChild(node);
node.setAttribute("id", "opener2");
node.classList.add("opener");
node.innerHTML = "";

// document.getElementById('opener3').parentNode.removeChild(document.getElementById('opener3'));

function eyeballModal() {
  btn[0].onclick = function() {
    modal[0].style.display = "block";
  }

  btn[1].onclick = function() {
      modal[1].style.display = "block";
  }

  close[0].onclick = function() {
      modal[0].style.display = "none";
  }

  close[1].onclick = function() {
      modal[1].style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

eyeballModal();
