const {Service} = require("service");

const div = document.createElement("div");
div.innerText = new Service().method();

document.querySelector("body").appendChild(div);