import React, { useEffect, useState } from "react";
import Header from "../header/header"; // Import the Header component
import "./styles.css"; // Ensure your CSS file is correctly linked
import { initializeBookingForm } from "../utils/bookingForm";
import { initializeCostCalculation } from "../utils/calculateCosts";

const IndexPage = () => {
  const [sundayWedding, setSundayWedding] = useState(false);

  useEffect(() => {
    initializeBookingForm();
    initializeCostCalculation();
  }, [sundayWedding]);

  const handleSundayWeddingChange = () => {
    setSundayWedding(!sundayWedding);
  };

  return (
    <main>
      <Header /> {/* Add the Header component here */}
      <div className="form-container">
        <h1>HOC Bridal Calculator</h1>
        <form id="booking-form">
          <div className="form-group">
            <label>Bride</label>
            <div className="dropdown-container">
              <select id="bride-hair" name="bride-hair">
                <option value="" selected>
                  Select hair number
                </option>
              </select>
              <select id="bride-makeup" name="bride-makeup">
                <option value="" selected>
                  Select makeup number
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Bridesmaids</label>
            <div className="dropdown-container">
              <select id="bridesmaids-hair" name="bridesmaids-hair">
                <option value="" selected>
                  Select hair number
                </option>
              </select>
              <select id="bridesmaids-makeup" name="bridesmaids-makeup">
                <option value="" selected>
                  Select makeup number
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Mother of Bride</label>
            <div className="dropdown-container">
              <select id="mother-of-bride-hair" name="mother-of-bride-hair">
                <option value="" selected>
                  Select hair number
                </option>
              </select>
              <select id="mother-of-bride-makeup" name="mother-of-bride-makeup">
                <option value="" selected>
                  Select makeup number
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Mother of Groom</label>
            <div className="dropdown-container">
              <select id="mother-of-groom-hair" name="mother-of-groom-hair">
                <option value="" selected>
                  Select hair number
                </option>
              </select>
              <select id="mother-of-groom-makeup" name="mother-of-groom-makeup">
                <option value="" selected>
                  Select makeup number
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Flower Girls</label>
            <div className="dropdown-container">
              <select id="flower-girls-hair" name="flower-girls-hair">
                <option value="" selected>
                  Select hair number
                </option>
              </select>
              <select id="flower-girls-makeup" name="flower-girls-makeup">
                <option value="" selected>
                  Select makeup number
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Other</label>
            <div className="dropdown-container">
              <select id="other-hair" name="other-hair">
                <option value="" selected>
                  Select hair number
                </option>
              </select>
              <select id="other-makeup" name="other-makeup">
                <option value="" selected>
                  Select makeup number
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="wedding-location">Wedding Location</label>
            <select id="wedding-location" name="wedding-location">
              <option value="" selected>
                Select location
              </option>
              <option value="in-salon">In salon</option>
              <option value="on-location">On location</option>
            </select>
          </div>

          <div className="form-group sunday-group">
            <label htmlFor="sunday-wedding">Sunday Wedding</label>
            <input
              type="checkbox"
              id="sunday-wedding"
              name="sunday-wedding"
              checked={sundayWedding}
              onChange={handleSundayWeddingChange}
            />
          </div>

          <div className="form-group">
            <div className="dropdown-container">
              <select
                id="sunday-options"
                name="sunday-options"
                disabled={!sundayWedding}
              >
                <option value="" selected>
                  Select stylist number (Sunday Only)
                </option>
              </select>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div id="results-container" className="results-container">
        {/* The results will be displayed here */}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>HOC Bridal Calculator</title>;



