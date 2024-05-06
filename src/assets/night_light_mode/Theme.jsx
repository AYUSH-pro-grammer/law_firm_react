import React, { useState } from "react";
import "./Theme.css";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <section className={`theme_cont ${isDarkMode ? "dark" : "light"}`}>
        <div className="there_icon">
          <button className="toggle-btn" onClick={toggleTheme}>
            <span className="material-symbols-outlined">
              {isDarkMode ? "dark_mode" : "brightness_6"}
            </span>
          </button>
          <span className={`material-symbols-outlined ${isDarkMode ? "icon_theme_main_dark" : "icon_theme_main_light"}`}>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Theme;
