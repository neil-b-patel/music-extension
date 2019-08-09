document.querySelector("#first").addEventListener("click", () => {
  document.getElementById("first").onclick = setURL(0);
});
document.querySelector("#second").addEventListener("click", () => {
  document.getElementById("second").onclick = setURL(1);
});
document.querySelector("#third").addEventListener("click", () => {
  document.getElementById("third").onclick = setURL(2);
});

function setURL(key) {
  let playlistArray = [
    "37i9dQZF1DX15JKV0q7shD",
    "37i9dQZF1DX3rxVfibe1L0",
    "37i9dQZF1DXaImRpG7HXqp"
  ];

  //finding the playlist according to the key we pass in
  let playlistKey = playlistArray[key];
  let myURL = "https://open.spotify.com/embed/playlist/" + playlistKey;

  //setting the source of the iframe
  document.getElementById("iframe").src = myURL;
}
