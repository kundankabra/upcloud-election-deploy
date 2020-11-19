import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero'
import Download from './components/Download'
import Slider from './components/Slider'

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Download />
    <Slider />
  </React.StrictMode>,
  document.getElementById('root')
);
