async function getData() {
  const req = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=yolk&api_key=2cb62afd1279a0fe57c4b69601ac8aa9&limit=1&nowplaying=true&format=json');
  const { recenttracks } = await req.json();
  console.log(recenttracks);
  console.log("^^^ lol look at how messy this data is ^^^")

  document.getElementById("title").innerHTML = recenttracks["track"][0]["name"];
  document.getElementById("artist").textContent = recenttracks["track"][0]["artist"]["#text"];
  document.getElementById("album").textContent = recenttracks["track"][0]["album"]["#text"];
  document.getElementById("cover").src = recenttracks["track"][0]["image"][2]["#text"];

}
getData();