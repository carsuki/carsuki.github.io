const sleep = ms => new Promise(r => setTimeout(r, ms));

window.onload = function() {
  document.getElementById("loading").style.display = "none";
};

async function fallbackLoad() {
  await sleep(20000);
  document.getElementById("loading").style.display = "none";
}

fallbackLoad();