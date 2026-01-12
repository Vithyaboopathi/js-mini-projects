// Task 1: Welcome message on load
window.onload = function () {
  document.getElementById("welcome").innerText =
    "Welcome to JavaScript Practice!";
};

// Task 2: Change text color
function changeColor() {
  document.getElementById("colorText").style.color = "red";
}

// Task 3: Clear input field
function clearInput() {
  document.getElementById("textInput").value = "";
}

// Task 4: Show current year
document.getElementById("year").innerText = new Date().getFullYear();

// Task 5: Hide paragraph
function hideParagraph() {
  document.getElementById("hideMe").style.display = "none";
}

// Task 6: Increase div width
let width = 100;
function increaseWidth() {
  width += 20;
  document.getElementById("box").style.width = width + "px";
}
