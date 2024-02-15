import React from 'react';
import './App.css';
import About from './about';
import Home from './home';
import { Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [inputSearch, setInputSearch] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  
  //clear search and refresh the page
  

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemonDetails, index) => {
          return { ...pokemonDetails, index: index + 1 };
        });

        setPokemonData({ ...data, results })

      })
  }, []);

  useEffect(() => {
  
    setFilteredPokemon(() =>
      pokemonData.results?.filter((pokemon) => pokemon.name.includes(inputSearch)))
  }, [pokemonData.results, inputSearch]);
  return (
    <BrowserRouter>
    

      <div className='flex justify-center items-center px-16 py-5 w-full bg-red-600 rounded-sm shadow-sm max-md:px-5 max-md:max-w-full'>
       <Link to="" ><img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&"
          className="max-w-full aspect-[2.94] w-[200px]"
        />
        </Link> 
      </div>
     

      <div className='p-6'>
        <div className='flex flex-col items-center'>
         
            <header className='text-4xl text-black-700'> Choose your favorite pokemon</header>
           
        </div>
      </div>
      <div className='w- full flex justify-center'>
        <input onChange={(e) => setInputSearch(e.target.value)}
          placeholder='Explore'
          type='text'
          className='mt-3 px-60  py-1 border-blue-500 rounded-3xl border-2'>
        </input>
      <button>  <Link to="/about">
        <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/743c724135eb977a5c23d69aafb605ff51649dc8b4cfa5a229dafc0c7ef0efb9?apiKey=3f24d196149340fe82d51ab9618c65c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/743c724135eb977a5c23d69aafb605ff51649dc8b4cfa5a229dafc0c7ef0efb9?apiKey=3f24d196149340fe82d51ab9618c65c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/743c724135eb977a5c23d69aafb605ff51649dc8b4cfa5a229dafc0c7ef0efb9?apiKey=3f24d196149340fe82d51ab9618c65c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/743c724135eb977a5c23d69aafb605ff51649dc8b4cfa5a229dafc0c7ef0efb9?apiKey=3f24d196149340fe82d51ab9618c65c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/743c724135eb977a5c23d69aafb605ff51649dc8b4cfa5a229dafc0c7ef0efb9?apiKey=3f24d196149340fe82d51ab9618c65c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/743c724135eb977a5c23d69aafb605ff51649dc8b4cfa5a229dafc0c7ef0efb9?apiKey=3f24d196149340fe82d51ab9618c65c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/743c724135eb977a5c23d69aafb605ff51649dc8b4cfa5a229dafc0c7ef0efb9?apiKey=3f24d196149340fe82d51ab9618c65c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/743c724135eb977a5c23d69aafb605ff51649dc8b4cfa5a229dafc0c7ef0efb9?apiKey=3f24d196149340fe82d51ab9618c65c0&"
      className="self-center aspect-[1.02] w-[82px]"
    />
     </Link>
    </button>
   
      </div>

      <Routes>
        <Route path="/about/:pokemonId" element={<About />} >
        </Route>
        {filteredPokemon &&
          <Route path="/" element={<Home pokemonProp={filteredPokemon} />}> </Route>
        }
      </Routes>
    </BrowserRouter>
  );
};
export default App;

