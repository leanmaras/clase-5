import Button from "./button.js";
import Img from "./img.js"
import Video from "./video.js"

let myDiv1 = document.querySelector("#myButton");
let myDiv2 = document.querySelector("#myImg");
let myDiv3 = document.querySelector("#myVid");

let myButton = new Button("click me!");
let myImg = new Img("escudo", "./images/river.jpg");
let myVideo = new Video("./vids/GOLPityMartinez.mp4");


myDiv1.innerHTML = myButton.render();
myDiv2.innerHTML = myImg.render();
myDiv3.innerHTML = myVideo.render();
