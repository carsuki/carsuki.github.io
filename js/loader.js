// sleep function
const delay = ms => new Promise(res => setTimeout(res, ms));

window.onload = function() {
  document.getElementById("loading").style.display = "none";
};

const loadTimeout = async () => {
  await delay(10000);
  document.getElementById("loading").style.display = "none";
};

loadTimeout();