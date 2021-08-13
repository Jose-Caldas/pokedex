import React, { useEffect, useState } from "react";
import "../src/components/styles.css";
import PokemonCards from "./components/PokemonCards";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(151);
  const [loadMore, setLoadMore] = useState(
  `https://api-pokemons.herokuapp.com/pokemons?_page=${page}&_limit=${perPage}`
  );


  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setPerPage();

    function createPokemonObj(data) {
      data.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    await console.log(allPokemons);
    createPokemonObj(data);

  //   async function getPokemonEvolutions (){
  //    const url = `https://api-pokemons.herokuapp.com/pokemons`
  //    const res = await fetch(url)
  //    const data = await res.json()
  //    console.log(data)
  // }
  
  // getPokemonEvolutions()
  };

  useEffect(() => {
    getAllPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='wrapper'>
      <h1>Pokedex - ({allPokemons.length}) - Pokemons</h1>
      <div className="container">
        {allPokemons.map((pokemon, index) => (
          <PokemonCards
            key={index} 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
          
           
          />
        ))}
      </div>
      <button className='btn' onClick={() => getAllPokemons()}>Load more</button>
    </div>
  );
}

export default App;
