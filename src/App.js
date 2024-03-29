import './App.css';
import { Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
import About from './About';
import Home from './Home';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [inputSearch, setInputSearch] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

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
    
    <div className='flex px-0 py-5 w-full bg-red-600 rounded-sm shadow-sm max-md:px-5 max-md:max-w-full' >

     <Link to="" ><img style={{marginLeft: '600px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de3c097122ff0c4b54e4dfa20e8cfdda9158c45b60ef0071a5e00e87ac2f619?apiKey=3f24d196149340fe82d51ab9618c65c0&"
        className="max-w-full aspect-[2.94] w-[200px]"
      />
      </Link> 
      
    </div>
   

    <div className='p-6'>
      <div className='flex flex-col items-center'>
       
          <header className='text-3xl text-black-700'>Explore Your Favorite pokemon</header>
         
      </div>
    </div>
    <div className='w- full flex justify-center' style={{height: 70}}>
      <input onChange={(e) => setInputSearch(e.target.value)}
        placeholder='Explore'
        type='text'
        className='mt-3 px-40  py-1 border-blue-500 rounded-3xl border-2'style={{backgroundColor:'#D9D9D9', marginLeft:'80px'}}>
      </input>
    <button style = {{width: 50, height: 50, marginTop: 20, marginLeft: 40}}>  <Link to="/about">
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
                                   
        <div className='footer'>
          <img className='sliding-image' src='stufful.png' alt='stufful'/>
          <img className='sliding-image' src='pikachu.png' alt='pikachu'/>
          <img className='sliding-image' src='squirtle.png' alt='squirtle'/>
          <img className='sliding-image' src='eevee.png' alt='eevee'/>
          <img className='sliding-image' src='charmander.png' alt='charmander'/>
          <img className='sliding-image' src='paras.png' alt='paras'/>
          <img className='sliding-image' src='pidgey.png' alt='pidgey'/>
          <img className='sliding-image' src='rattata.png' alt='rattata'/>
          <img className='sliding-image' src='wartortle.png' alt='wartortle'/>
          <img className='sliding-image' src='ekans.png' alt='ekans'/>
          <img className='sliding-image' src='clefairy.png' alt='clefairy'/>
          <img className='sliding-image' src='ivysaur.png' alt='ivysaur'/>
          <img className='sliding-image' src='slowpoke.png' alt='slowpoke'/>
          <img className='sliding-image' src='caterpie.png' alt='caterpie'/>
          <img className='sliding-image' src='nidoran.png' alt='nidoran'/>
          <img className='sliding-image' src='meowth.png' alt='meowth'/>
          <img className='sliding-image' src='poliwag.png' alt='poliwag'/>
          <img className='sliding-image' src='vulpix.png' alt='vulpix'/>
          <img className='sliding-image' src='oddish.png' alt='oddish'/>
          <img className='sliding-image' src='zubat.png' alt='zubat'/>
          <img className='sliding-image' src='stufful.png' alt='stufful'/>
          <img className='sliding-image' src='pikachu.png' alt='pikachu'/>
          <img className='sliding-image' src='squirtle.png' alt='squirtle'/>
          <img className='sliding-image' src='eevee.png' alt='eevee'/>
          <img className='sliding-image' src='charmander.png' alt='charmander'/>
          <img className='sliding-image' src='paras.png' alt='paras'/>
          <img className='sliding-image' src='pidgey.png' alt='pidgey'/>
          <img className='sliding-image' src='rattata.png' alt='rattata'/>
          <img className='sliding-image' src='wartortle.png' alt='wartortle'/>
          <img className='sliding-image' src='ekans.png' alt='ekans'/>
          <img className='sliding-image' src='clefairy.png' alt='clefairy'/>
          <img className='sliding-image' src='ivysaur.png' alt='ivysaur'/>
          <img className='sliding-image' src='slowpoke.png' alt='slowpoke'/>
          <img className='sliding-image' src='caterpie.png' alt='caterpie'/>
          <img className='sliding-image' src='nidoran.png' alt='nidoran'/>
          <img className='sliding-image' src='meowth.png' alt='meowth'/>
          <img className='sliding-image' src='poliwag.png' alt='poliwag'/>
          <img className='sliding-image' src='vulpix.png' alt='vulpix'/>
          <img className='sliding-image' src='oddish.png' alt='oddish'/>
          <img className='sliding-image' src='zubat.png' alt='zubat'/>
          <img className='sliding-image' src='stufful.png' alt='stufful'/>
          <img className='sliding-image' src='pikachu.png' alt='pikachu'/>
          <img className='sliding-image' src='squirtle.png' alt='squirtle'/>
          <img className='sliding-image' src='eevee.png' alt='eevee'/>
          <img className='sliding-image' src='charmander.png' alt='charmander'/>
        </div>
    </BrowserRouter>
  );
};
export default App;
