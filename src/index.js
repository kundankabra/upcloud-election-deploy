import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero'
import Download from './components/Download'
import AboutUs from './components/AboutUs'

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Download />
    <AboutUs />
  </React.StrictMode>,
  document.getElementById('root')
);
