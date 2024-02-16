import React from "react";
import {useEffect, useState} from 'react';
import {useParams, Link, useLocation} from 'react-router-dom';

function About (props) {
    let {pokemonId} = useParams();
    const location = useLocation();
    const [pokemon,setPokemon]=useState();

    useEffect(() => {
        if(pokemonId){
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then((res)=>res.json())
            .then((data)=>{
                setPokemon(data);
                console.log(data);

            })
        }   
    },[pokemonId]);
    return(
        < >
       {location.pathname !== '/about/:pokemonId' && (
        <Link to="/">
          <button
            style={{
              position: 'absolute',
              top: '20px',
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

        {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>

          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />

          <h2>Type: {pokemon.types.map((type, index) => (
            <div key={index}>{type.type.name}</div>
          ))}</h2>
          
          <h2>Stats: {pokemon.stats.map((stat, index) => (  
            <div key={index}>{stat.stat.name}: {stat.base_stat}</div>
          ))}</h2>

            
        </div>
      )}
        </>
    )
}
export default About;
