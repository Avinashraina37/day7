import cardData from "./cardData.js";
import card from "./makeTemplate.js";

var container =document.getElementById("container");

let finalTemplate="";
 for (let i=0;i<cardData.length;i++){
    finalTemplate = finalTemplate + card(cardData[i]);
 }
 container.innerHTML = finalTemplate;

 alert("Hello! I am an alert box!!");
