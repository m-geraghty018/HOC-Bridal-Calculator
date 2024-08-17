export const initializeCostCalculation = () => {
    const setupCalculation = () => {
      // Grab all the necessary elements
      const brideHair = document.getElementById("bride-hair");
      const brideMakeup = document.getElementById("bride-makeup");
      const bridesmaidsHair = document.getElementById("bridesmaids-hair");
      const bridesmaidsMakeup = document.getElementById("bridesmaids-makeup");
      const motherOfBrideHair = document.getElementById("mother-of-bride-hair");
      const motherOfBrideMakeup = document.getElementById("mother-of-bride-makeup");
      const motherOfGroomHair = document.getElementById("mother-of-groom-hair");
      const motherOfGroomMakeup = document.getElementById("mother-of-groom-makeup");
      const flowerGirlsHair = document.getElementById("flower-girls-hair");
      const flowerGirlsMakeup = document.getElementById("flower-girls-makeup");
      const otherHair = document.getElementById("other-hair");
      const otherMakeup = document.getElementById("other-makeup");
      const sundayOptions = document.getElementById("sunday-options");
      const form = document.getElementById("booking-form");
      const resultsContainer = document.getElementById("results-container");
      const weddingLocation = document.getElementById("wedding-location");
      const sundayWeddingCheckbox = document.getElementById("sunday-wedding");
  
      // Cost variables
      const costs = {
        bride: { hair: 150, makeup: 150 },
        bridesmaids: { hair: 100, makeup: 125 },
        motherOfBride: { hair: 100, makeup: 125 },
        motherOfGroom: { hair: 100, makeup: 125 },
        flowerGirls: { hair: 65, makeup: 35 },
        other: { hair: 100, makeup: 125 },
        sunday: { stylist: 200 },
      };
  
      function calculateTotalCosts() {
        const brideHairCost = costs.bride.hair * (parseInt(brideHair.value) || 0);
        const brideMakeupCost = costs.bride.makeup * (parseInt(brideMakeup.value) || 0);
  
        const bridesmaidsHairCost = costs.bridesmaids.hair * (parseInt(bridesmaidsHair.value) || 0);
        const bridesmaidsMakeupCost = costs.bridesmaids.makeup * (parseInt(bridesmaidsMakeup.value) || 0);
  
        const motherOfBrideHairCost = costs.motherOfBride.hair * (parseInt(motherOfBrideHair.value) || 0);
        const motherOfBrideMakeupCost = costs.motherOfBride.makeup * (parseInt(motherOfBrideMakeup.value) || 0);
  
        const motherOfGroomHairCost = costs.motherOfGroom.hair * (parseInt(motherOfGroomHair.value) || 0);
        const motherOfGroomMakeupCost = costs.motherOfGroom.makeup * (parseInt(motherOfGroomMakeup.value) || 0);
  
        const flowerGirlsHairCost = costs.flowerGirls.hair * (parseInt(flowerGirlsHair.value) || 0);
        const flowerGirlsMakeupCost = costs.flowerGirls.makeup * (parseInt(flowerGirlsMakeup.value) || 0);
  
        const otherHairCost = costs.other.hair * (parseInt(otherHair.value) || 0);
        const otherMakeupCost = costs.other.makeup * (parseInt(otherMakeup.value) || 0);
  
        const sundayStylistCost = costs.sunday.stylist * (parseInt(sundayOptions.value) || 0);
  
        const totalHairServices =
          (parseInt(brideHair.value) || 0) +
          (parseInt(bridesmaidsHair.value) || 0) +
          (parseInt(motherOfBrideHair.value) || 0) +
          (parseInt(motherOfGroomHair.value) || 0) +
          (parseInt(flowerGirlsHair.value) || 0) +
          (parseInt(otherHair.value) || 0);
  
        const totalMakeupServices =
          (parseInt(brideMakeup.value) || 0) +
          (parseInt(bridesmaidsMakeup.value) || 0) +
          (parseInt(motherOfBrideMakeup.value) || 0) +
          (parseInt(motherOfGroomMakeup.value) || 0) +
          (parseInt(flowerGirlsMakeup.value) || 0) +
          (parseInt(otherMakeup.value) || 0);
  
        const totalServiceCost =
          brideHairCost +
          brideMakeupCost +
          bridesmaidsHairCost +
          bridesmaidsMakeupCost +
          motherOfBrideHairCost +
          motherOfBrideMakeupCost +
          motherOfGroomHairCost +
          motherOfGroomMakeupCost +
          flowerGirlsHairCost +
          flowerGirlsMakeupCost +
          otherHairCost +
          otherMakeupCost;
  
        // Calculate Gratuity and Deposit (20% of the service cost excluding Sunday fee)
        const gratuity = totalServiceCost * 0.2;
        const deposit = gratuity;
  
        // Initial total cost including gratuity and Sunday fee (if applicable)
        let totalCost = totalServiceCost + sundayStylistCost + gratuity;
  
        // Check if the wedding is In-Salon and not on a Sunday, then subtract the deposit
        if (weddingLocation.value === "in-salon" && !sundayWeddingCheckbox.checked) {
          totalCost -= deposit;
        }
  
        // Show the results container
        resultsContainer.style.display = "block";
  
        let resultsHTML = `
              <div class="results-content" id="results-content">
                  <p><strong>Total Hair: ${totalHairServices} | Total Makeup: ${totalMakeupServices}</strong></p>
          `;
  
        if (brideHairCost > 0) {
          resultsHTML += `<p>Bride Hair: $${brideHairCost}</p>`;
        }
        if (brideMakeupCost > 0) {
          resultsHTML += `<p>Bride Makeup: $${brideMakeupCost}</p>`;
        }
  
        if (bridesmaidsHairCost > 0) {
          resultsHTML += `<p>Bridesmaids Hair: $${bridesmaidsHairCost}</p>`;
        }
        if (bridesmaidsMakeupCost > 0) {
          resultsHTML += `<p>Bridesmaids Makeup: $${bridesmaidsMakeupCost}</p>`;
        }
  
        if (motherOfBrideHairCost > 0) {
          resultsHTML += `<p>Mother of Bride Hair: $${motherOfBrideHairCost}</p>`;
        }
        if (motherOfBrideMakeupCost > 0) {
          resultsHTML += `<p>Mother of Bride Makeup: $${motherOfBrideMakeupCost}</p>`;
        }
  
        if (motherOfGroomHairCost > 0) {
          resultsHTML += `<p>Mother of Groom Hair: $${motherOfGroomHairCost}</p>`;
        }
        if (motherOfGroomMakeupCost > 0) {
          resultsHTML += `<p>Mother of Groom Makeup: $${motherOfGroomMakeupCost}</p>`;
        }
  
        if (flowerGirlsHairCost > 0) {
          resultsHTML += `<p>Flower Girls Hair: $${flowerGirlsHairCost}</p>`;
        }
        if (flowerGirlsMakeupCost > 0) {
          resultsHTML += `<p>Flower Girls Makeup: $${flowerGirlsMakeupCost}</p>`;
        }
  
        if (otherHairCost > 0) {
          resultsHTML += `<p>Other Hair: $${otherHairCost}</p>`;
        }
        if (otherMakeupCost > 0) {
          resultsHTML += `<p>Other Makeup: $${otherMakeupCost}</p>`;
        }
  
        if (gratuity > 0) {
          resultsHTML += `<br><p>Gratuity (20%): $${gratuity.toFixed(2)}</p>`;
        }
  
        if (deposit > 0) {
          resultsHTML += `<p>Deposit (Due Now): $${deposit.toFixed(2)}</p>`;
        }
  
        if (sundayStylistCost > 0) {
          resultsHTML += `<p>Sunday Fee: $${sundayStylistCost}</p>`;
        }
  
        if (totalCost > 0) {
          resultsHTML += `<h3>Total: $${totalCost.toFixed(2)} (Due Day of Wedding, Cash/Check Only)</h3>`;
        }
  
        resultsHTML += `
              <button id="copy-results" class="copy-button">Copy Results</button>
              </div>
          `;
  
        resultsContainer.innerHTML = resultsHTML;
  
        // Add event listener to copy results to clipboard
        const copyButton = document.getElementById("copy-results");
        copyButton.addEventListener("click", function () {
          let resultsText = "";
  
          if (brideHairCost > 0) {
            resultsText += `Bride Hair: $${brideHairCost}\n`;
          }
          if (brideMakeupCost > 0) {
            resultsText += `Bride Makeup: $${brideMakeupCost}\n`;
          }
  
          if (bridesmaidsHairCost > 0) {
            resultsText += `Bridesmaids Hair: $${bridesmaidsHairCost}\n`;
          }
          if (bridesmaidsMakeupCost > 0) {
            resultsText += `Bridesmaids Makeup: $${bridesmaidsMakeupCost}\n`;
          }
  
          if (motherOfBrideHairCost > 0) {
            resultsText += `Mother of Bride Hair: $${motherOfBrideHairCost}\n`;
          }
          if (motherOfBrideMakeupCost > 0) {
            resultsText += `Mother of Bride Makeup: $${motherOfBrideMakeupCost}\n`;
          }
  
          if (motherOfGroomHairCost > 0) {
            resultsText += `Mother of Groom Hair: $${motherOfGroomHairCost}\n`;
          }
          if (motherOfGroomMakeupCost > 0) {
            resultsText += `Mother of Groom Makeup: $${motherOfGroomMakeupCost}\n`;
          }
  
          if (flowerGirlsHairCost > 0) {
            resultsText += `Flower Girls Hair: $${flowerGirlsHairCost}\n`;
          }
          if (flowerGirlsMakeupCost > 0) {
            resultsText += `Flower Girls Makeup: $${flowerGirlsMakeupCost}\n`;
          }
  
          if (otherHairCost > 0) {
            resultsText += `Other Hair: $${otherHairCost}\n`;
          }
          if (otherMakeupCost > 0) {
            resultsText += `Other Makeup: $${otherMakeupCost}\n`;
          }
  
          if (gratuity > 0) {
            resultsText += `\nGratuity (20%): $${gratuity.toFixed(2)}\n`;
          }
  
          if (deposit > 0) {
            resultsText += `Deposit (Due Now): $${deposit.toFixed(2)}\n`;
          }
  
          if (sundayStylistCost > 0) {
            resultsText += `Sunday Fee: $${sundayStylistCost}\n`;
          }
  
          if (totalCost > 0) {
            resultsText += `\nTotal: $${totalCost.toFixed(2)} (Due Day of Wedding, Cash/Check Only)\n`;
          }
  
          navigator.clipboard
            .writeText(resultsText)
            .then(function () {
              console.log("Results copied to clipboard!");
            })
            .catch(function (err) {
              console.log("Failed to copy results: ", err);
            });
        });
      }
  
      // Add event listener to form submission
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
        calculateTotalCosts(); // Perform the calculation and display the results
      });
    };
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setupCalculation);
    } else {
      setupCalculation();
    }
  };
  