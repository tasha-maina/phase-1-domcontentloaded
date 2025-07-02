
console.log("This logs immediately when index.js is loaded.");

document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded.");
  const paragraph = document.getElementById("text");
  paragraph.textContent = "This is really cool!";
});
