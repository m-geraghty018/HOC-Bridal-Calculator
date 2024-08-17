export const initializeBookingForm = () => {
  const initialize = () => {
    const selectElements = document.querySelectorAll("select");
    const weddingLocationDropdown = document.getElementById("wedding-location");
    const sundayWeddingCheckbox = document.getElementById("sunday-wedding");
    const sundayOptionsDropdown = document.getElementById("sunday-options");

    // Create options from 1 to 50
    const options = [];
    for (let i = 1; i <= 50; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      options.push(option);
    }

    // Append options to each select element without overriding the initial placeholder option
    selectElements.forEach((select) => {
      if (select !== weddingLocationDropdown) {
        // Retain the placeholder option and append the generated options
        options.forEach((option) => {
          select.appendChild(option.cloneNode(true));
        });
      }
    });

    // Toggle Sunday Options dropdown based on checkbox status
    if (sundayWeddingCheckbox) {
      sundayWeddingCheckbox.addEventListener("change", function () {
        sundayOptionsDropdown.disabled = !this.checked;
        if (!this.checked) {
          sundayOptionsDropdown.value = ""; // Reset to default option
        }
      });
    }
  };

  // Ensure the function is called after the DOM is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
};
