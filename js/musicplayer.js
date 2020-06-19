async function getData() {
  const req = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=carsuki&api_key=105e1ad969864b7e7b019bd0bcdf2fc1&limit=1&nowplaying=true&format=json');
  const { recenttracks } = await req.json();
  console.log(recenttracks);

  document.getElementById("title").innerHTML = recenttracks["track"][0]["name"];
  document.getElementById("artist").textContent = recenttracks["track"][0]["artist"]["#text"];
  document.getElementById("album").textContent = recenttracks["track"][0]["album"]["#text"];
  document.getElementById("cover").src = recenttracks["track"][0]["image"][3]["#text"];

}
getData();