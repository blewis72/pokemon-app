import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CustomSlider.css';

const CustomSlider = ({ pokemonData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const totalSlides = pokemonData.length;
  const slidesToShow = 3;
 
  


  const nextSlide = () => {
    if (currentSlide < totalSlides - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToShow);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToShow);
    }
  };


  return (
    <div className="custom-slider">
      <div className="slider-container" style={{justifyContent:'center'}}>
      <button onClick={prevSlide}>&#9664;</button>
        {pokemonData.slice(currentSlide, currentSlide + slidesToShow).map((pokemon, index) => (
          <Link key={index} to={`/about/${pokemon.index}`} className="slide">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`}
              alt={pokemon.name}
            />
            <p style={{ color: '#EDCC20' }}>{pokemon.name}</p>
          </Link>
        ))}
        <button onClick={nextSlide}>&#9654;</button>
      </div>
      
    </div>
  );
};

export default CustomSlider;
