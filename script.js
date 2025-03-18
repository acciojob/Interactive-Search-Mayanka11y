//your JS code here. If required.
// Get references to the search components
const searchDiv = document.querySelector(".search");
const searchInput = document.querySelector(".input");
const searchButton = document.querySelector(".btn");

// Add a click event listener to the button
searchButton.addEventListener("click", () => {
  // Add the 'active' class to the search div
  searchDiv.classList.add("active");

  // Focus the input field
  searchInput.focus();
});