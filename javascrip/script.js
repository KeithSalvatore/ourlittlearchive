/* =========================================
   OUR LITTLE ARCHIVE
   Landing Page JavaScript
   ========================================= */

// ---------- ENTER BUTTON ----------
const enterButton = document.getElementById("enterButton");
const transitionScreen = document.getElementById("transitionScreen");

enterButton.addEventListener("click", () => {
  // Show transition screen
  transitionScreen.classList.add("active");

  // Go to the next page after the animation
  setTimeout(() => {
    window.location.href = "story.html";
  }, 1800);
});

// ---------- RANDOM HEART DECORATIONS ----------
function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  // Random position
  heart.style.left = Math.random() * 100 + "%";
  heart.style.bottom = "-40px";

  // Random size
  const size = Math.random() * 15 + 12;
  heart.style.fontSize = size + "px";

  // Random animation duration
  const duration = Math.random() * 5 + 6;
  heart.style.animationDuration = duration + "s";

  // Add to page
  document.querySelector(".background-decor").appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Create a new floating heart every few seconds
setInterval(createFloatingHeart, 1800);