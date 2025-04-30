import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set initial theme based on localStorage or default to 'light'
const savedTheme = localStorage.getItem("theme") || "light";
document.body.className = savedTheme;

function Root() {
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.className = newTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      {/* Theme toggle button */}
      <button className="toggle-btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button><hr/>

      {/* Render the main App component */}
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// Report web vitals if needed
reportWebVitals();
