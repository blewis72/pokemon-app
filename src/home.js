import React from 'react';
import './CustomSlider.css';
import CustomSlider from './CustomSlider';

const Home = ({ pokemonProp }) => {
    return (
      <div style={{ margin: '50px 70px' }}>
        <h2 style={{ backgroundColor: '#44423B', color: '#EDCC20', width: '150px', textAlign: 'center', marginLeft: '70px', padding: '5px' }}>List of Pokemon</h2>
        <CustomSlider pokemonData={pokemonProp} />
      </div>
    );
  };
  
  export default Home;
