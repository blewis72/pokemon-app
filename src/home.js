import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

const Home = ({ pokemonProp }) => {
    const sliderRef = useRef(null);
  
    const settings = {
      dots: false,
      infinite: false,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  
    const nextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
  
    const prevSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  
    useEffect(() => {
        // Reinitialize the slider when filtered data changes
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(0); // Go to the first slide
          sliderRef.current.slickPrev(); // Move to the previous slide (to reinitialize)
        }
      }, [pokemonProp]);
  
    return (
      <div>
        <h2>List of Pokemon</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={prevSlide}>&#9664;</button>
          <div style={{ width: '70%' }}>
            <Slider {...settings} ref={sliderRef}>
              {pokemonProp.map((pokemon) => (
                <div key={pokemon.index} style={{ textAlign: 'center' }}>
                  <Link to={`/about/${pokemon.index}`}>
                    <div>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`}
                        alt={pokemon.name}
                      />
                      <p>{pokemon.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <button onClick={nextSlide}>&#9654;</button>
        </div>
      </div>
    );
  };
  
  export default Home;
