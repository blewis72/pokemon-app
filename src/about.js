import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from 'react-router-dom';
import styles from "./pokemon.module.css";

const PokemonLoader = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Fetch Pokemon data from API
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(error => console.error('Error fetching Pokemon:', error));
  }, []);

  const renderLoadingBar = (statName, statValue) => {
    const maxStatValue = 200; // Assuming max stat value is 200
    const width = (statValue / maxStatValue) * 100 + '%';
    return (
      <div style={{ margin: '10px 0' }}>
        <div style={{ backgroundColor: 'lightgray', height: '20px', width: '100%' }}>
          <div style={{ backgroundColor: 'green', height: '100%', width: width }}></div>
        </div>
        <p>{statName} : {statValue} </p>
      </div>
    );
  };

  return (
    <div className={styles.PokemonStats}>
      <h1>Pokémon Stats</h1>
      {pokemonData && (
        <div>
          {pokemonData.stats.map(stat => (
            renderLoadingBar(stat.stat.name, stat.base_stat)
          ))}
        </div>
      )}
    </div>
  );
};

const About = (props) => {
  const { pokemonId } = useParams();
  const location = useLocation();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    if (pokemonId) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
          console.log(data);
        });
    }
  }, [pokemonId]);

  return (
    <div className={styles.PokemonPage}>
      {pokemon && (
        <>
          <div className={styles.PokemonCard}>
            <div className={styles.PokemonImage}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>

            <div className={styles.PokemonBody}>
              <h1>{pokemon.name}</h1>
            </div>

            <div className={styles.PokemonInfoItem}>
              <h2>Type:</h2>
              {pokemon.types.map((type, index) => (
                <p key={index}>{type.type.name} </p>
              ))}
            </div>
          </div>

          <div className={styles.PokemonInfo}>
            <div className={styles.PokemonStats}>
              <PokemonLoader />
            </div>
          </div>
        </>
      )}

      {location.pathname !== `/about/${pokemonId}` && (
        <Link to="/">
          <button
            style={{
              position: 'absolute',
              top: '100px',
              left: '20px',
              backgroundColor: '#0F53A3',
              color: '#EDCC20',
              paddingLeft: '20px',
              paddingRight: '20px',
              paddingTop: '5px',
              paddingBottom: '5px',
              borderRadius: '5px',
              marginLeft: '60px',
              marginTop: '20px',
            }}
          >
            Back
          </button>
        </Link>
      )}
    </div>
  );
};

export default About;
