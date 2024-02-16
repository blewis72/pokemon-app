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
        
      <div style={{margin: '50px 70px'}}>
        <h2 style={{backgroundColor:'black', color:'#EDCC20', width: '150px', textAlign:'center'}}>List of Pokemon</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={prevSlide}>&#9664;</button>
          <div style={{ width: '70%', backgroundColor:'black',}}>
            <Slider {...settings} ref={sliderRef}>
              {pokemonProp.map((pokemon) => ( 
                <div key={pokemon.index} >
                  <Link to={`/about/${pokemon.index}`}>
                    <div>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`}
                        alt={pokemon.name}
                      />
                       <p style={{ color: '#EDCC20' }}>{pokemon.name}</p>
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
