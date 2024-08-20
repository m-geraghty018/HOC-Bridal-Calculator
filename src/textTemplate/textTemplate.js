import React, { useState } from 'react';
import Header from '../header/header';
import './textTemplate.css';

const TextTemplate = () => {
  const [clientName, setClientName] = useState('');
  const [services, setServices] = useState('');
  const [apptDate, setApptDate] = useState('');
  const [apptTime, setApptTime] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year.slice(-2)}`;
  };

  const formatTime = (time) => {
    let [hour, minute] = time.split(':');
    const period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${period}`;
  };

  const handleGenerateMessage = () => {
    const formattedDate = formatDate(apptDate);
    const formattedTime = formatTime(apptTime);
    
    const message = `Hello ${clientName},

This is Michael from House of Clarity. I'm reaching out to confirm your appointment on ${formattedDate} at ${formattedTime} for ${services}. If you need to make any changes or have any questions, please let us know.
Looking forward to seeing you.

Best regards,
House of Clarity
215-587-2120
mail@houseofclarity.com`;

    setGeneratedMessage(message);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    alert('Message copied to clipboard');
  };

  return (
    <main>
      <Header />
      <div className="form-container">
        <h1>Appointment Confirmation Template</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerateMessage();
          }}
        >
          <div className="form-group">
            <label htmlFor="clientName">Client Name:</label>
            <input
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="services">Services:</label>
            <input
              type="text"
              id="services"
              value={services}
              onChange={(e) => setServices(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="apptDate">Appointment Date:</label>
            <input
              type="date"
              id="apptDate"
              value={apptDate}
              onChange={(e) => setApptDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="apptTime">Appointment Time:</label>
            <input
              type="time"
              id="apptTime"
              value={apptTime}
              onChange={(e) => setApptTime(e.target.value)}
              required
            />
          </div>

          <button type="submit">Generate Message</button>
        </form>

        {generatedMessage && (
          <div className="message-container">
            <h2>Generated Message:</h2>
            <textarea
              readOnly
              value={generatedMessage}
              className="generated-message"
            />
            <button onClick={handleCopy} className="copy-button">Copy Message</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default TextTemplate;

export const Head = () => <title>Text Template</title>;


