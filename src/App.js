import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LazyComponent from './components/Image';
import LazyIframe from './components/Iframe';



function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=799&offset=100');

      if(data.results){
        const pokemons = data.results.map((pokemon, index) => ({
          name: pokemon.name,
          id: index + 100,
        }));
        setAllPokemons(pokemons);
      }
    })()
  }, [])

  return (
    <div className="App">
        {allPokemons.map(({ name, id}, index) => {
          if(index === 25){
            return(
              <>
                <LazyIframe 
                  key='rocket'
                  src="https://giphy.com/embed/3o7btL0Rxvh0YkpNXS"
                  title='rocket'
                  width="100%"
                  height="500px"
                /> 
              </>
            )
          }

          return(
            <div key={name}>
              <h2>{name}</h2>
              <LazyComponent 
                data-src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                alt={name} 
              />
            </div>
          )
        })}
    </div>
  );
}

export default App;
