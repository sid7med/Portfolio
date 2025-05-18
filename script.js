function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to wrap each letter for wavy animation
function wrapLetters(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.textContent = ''; // Clear existing text

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    // Add a class for styling and animation
    span.classList.add('wavy-letter');
    // Add a delay based on the letter's position for the wavy effect
    span.style.animationDelay = `${i * 0.05}s`; // Adjust delay as needed
    element.appendChild(span);
  }
}

// Function to wrap each letter for typing animation
function typeText(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.textContent = ''; // Clear existing text

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    // Add a class for styling and animation
    span.classList.add('typing-letter'); // Use a different class
    // Add a delay based on the letter's position for the typing effect
    span.style.animationDelay = `${i * 0.1}s`; // Adjust delay as needed
    element.appendChild(span);
  }
}

// Array of texts to cycle through
const rotatingTexts = ["Mobile Développeur ", "Web Développeur"];
let currentTextIndex = 0;
const textElement = document.querySelector('.section__text__p2');

// Function to update the text and apply animation
function updateRotatingText() {
  if (!textElement) return;

  // Apply an exit animation (e.g., fade out or scale down)
  textElement.classList.add('text-exit');

  // Wait for the exit animation to complete before changing text
  textElement.addEventListener('animationend', handleExitAnimationEnd, { once: true });
}

function handleExitAnimationEnd() {
  // Remove the exit animation class
  textElement.classList.remove('text-exit');

  // Change the text to the next one in the array
  textElement.textContent = rotatingTexts[currentTextIndex];

  // Apply the wavy animation to the new text
  typeText('.section__text__p2');

  // Apply an entry animation (e.g., fade in or scale up)
  textElement.classList.add('text-entry');
  textElement.addEventListener('animationend', handleEntryAnimationEnd, { once: true });

  // Move to the next text for the next cycle
  currentTextIndex = (currentTextIndex + 1) % rotatingTexts.length;
}

function handleEntryAnimationEnd() {
  // Remove the entry animation class
  textElement.classList.remove('text-entry');
}

// Apply the functions to the target elements
window.addEventListener('load', () => {
  typeText('.title'); // For "Sid'ahmed Khattre Saike" - Typing effect
  // Start the rotating text animation after a delay or immediately
  updateRotatingText();
  // Set an interval to change the text periodically (e.g., every 3 seconds)
  setInterval(updateRotatingText, 3000); // Adjust interval as needed
});
