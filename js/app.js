import Button from "./button.js";

let myDiv = document.querySelector("#myApp");

let myButton = new Button("click me!");

myDiv.innerHTML = myButton.render();