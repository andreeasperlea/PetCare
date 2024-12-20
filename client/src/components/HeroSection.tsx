import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


import backgroundPetCare from '../assets/backgroundPetCare.jpg';

function HeroSection() {
  return (
      <div className='hero-container'>
          {/*<img src="/backgroundPetCare.jpg" alt="Pet Care Background" className="hero-image"/>*/}
          <h1>Care for your pet</h1>
          <div className='hero-btns'>
              <Button buttonStyle='btn--outline' buttonSize='btn--large'>
                  Get Started
              </Button>
          </div>
      </div>
  );
}

export default HeroSection;
