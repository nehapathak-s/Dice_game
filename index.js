var rannumber = Math.floor(Math.random() * 6) + 1;

var randomdice = "dice" + rannumber + ".png"; //dice4.png

var randomimage = "images/" + randomdice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage);

// second image generate

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomdice2 = "dice" + randomnumber2 + ".png";

var randomimage2 = "images/" + randomdice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimage2);

if (randomimage > randomimage2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins";
//   document.querySelector("h1").style.color = "red";
  document.querySelector("h1").style.fontSize = "100px";


} else if (randomimage2 > randomimage) {
  document.querySelector("h1").innerHTML = "Player2 Wins 🚩";
  document.querySelector("h1").style.fontSize = "90px";
} else {
  document.querySelector("h1").innerHTML = " Tie";
  document.querySelector("h1").style.fontSize = "90px";
}
