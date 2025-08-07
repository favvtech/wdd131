const mod = new Date(document.lastModified);

// Convert to 12-hour format
let hours = mod.getHours();
const minutes = mod.getMinutes();
const seconds = mod.getSeconds();
const period = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12; // convert 0 to 12 for midnight

const text = "Last Modification: " +
  mod.getDate() + "/" +
  (mod.getMonth() + 1) + "/" +
  mod.getFullYear() + " " +
  hours + ":" +
  minutes + ":" +
  seconds + " " + period;

document.getElementById("lastModified").textContent = text;

// Auto-fill the current year in your copyright
document.getElementById("currentyear").textContent = new Date().getFullYear();