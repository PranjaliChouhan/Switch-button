import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css'; 
import clickSound from './assets/audio.mp3';

const App = () => {
  return (
    <ThemeProvider>
      
      <BodyContent />
    </ThemeProvider>
  );
};

const ToggleSlider = () => {
  const { isLightTheme, setIsLightTheme } = useTheme();
 
  



  const handleChange = () => {
    setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
    playClickSound(); 
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isLightTheme}
        onChange={handleChange}
      />
      <div class="button">
    <div class="light"></div>
    <div class="dots"></div>
    <div class="characters"></div>
    <div class="shine"></div>
    <div class="shadow"></div>
  </div>
      
    </label>
  );
};

const BodyContent = () => {
  const { isLightTheme } = useTheme();

  return (
    <div className={`body-content ${isLightTheme ? 'light' : 'dark'}`}>
      <ToggleSlider />
    </div>
  );
};

const playClickSound = () => {
  const audio = new Audio(clickSound);
  audio.play();
};

export default App;
