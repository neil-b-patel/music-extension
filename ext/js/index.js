document.querySelector("#first").addEventListener("click", () => {
  document.getElementById("first").onclick = setURL(0);
});
document.querySelector("#second").addEventListener("click", () => {
  document.getElementById("second").onclick = setURL(1);
});
document.querySelector("#third").addEventListener("click", () => {
  document.getElementById("third").onclick = setURL(2);
});
document.querySelector("#fourth").addEventListener("click", () => {
    document.getElementById("fourth").onclick = setURL(3);
  });
  document.querySelector("#fifth").addEventListener("click", () => {
    document.getElementById("fifth").onclick = setURL(4);
  });
  document.querySelector("#sixth").addEventListener("click", () => {
    document.getElementById("sixth").onclick = setURL(5);
  });

function setURL(key) {
  let playlistArray = [
    "2fDXhjGxJyqNKgtFjLYU9g",
    "5cKMbIaHWm4wfqS9VJKRTC",
    "6DvrtXhvFiNqrF0yH0MuMO",
    "1J39VFdQRL2jY0MwXBcWPC",
    "7zbe9S22Nc6NgYsOtvOcUo",
    "40vgXoIeOyVMZ7rLUPl5Pv"

  ];

  //finding the playlist according to the key we pass in
  let playlistKey = playlistArray[key];
  let myURL = "https://open.spotify.com/embed/playlist/" + playlistKey;

  //setting the source of the iframe
  document.getElementById("iframe").src = myURL;
}
//party playlist: 40vgXoIeOyVMZ7rLUPl5Pv
//angry playlist: 6DvrtXhvFiNqrF0yH0MuMO
//sad playlist: 5cKMbIaHWm4wfqS9VJKRTC
//happy playlist: 2fDXhjGxJyqNKgtFjLYU9
//chill playlist: 1vp84EbvVfAQMKpUzmoJiD
//love playlist: 1J39VFdQRL2jY0MwXBcWPC
//sleep playlist: 7zbe9S22Nc6NgYsOtvOcUo
