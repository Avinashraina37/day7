import data  from "./data.js";
import card from "./makeTemplate.js";
var container = document.getElementById("container");
let finalTemplate="";
 for (let i=0;i<data.length;i++){
    finalTemplate = finalTemplate + card(data[i]);
 }
 container.innerHTML = finalTemplate;