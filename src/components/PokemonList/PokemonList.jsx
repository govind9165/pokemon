import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL);
  const [customPokemons, setCustomPokemons] = useState([]);

  useEffect(() => {
  // 👇 Fetch custom Pokémon from your backend
  const fetchCustom = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/pokemons"); // ✅ CORRECT URL
      setCustomPokemons(res.data); // store backend Pokémon
    } catch (err) {
      console.error("Failed to fetch custom Pokémon:", err);
    }
  };
  fetchCustom();
}, []);


  return (
    <div className='pokemon-list-wrapper'>
      <div className='pokemon-list'>
        {/* 👇 Render backend Pokémon first */}
        {customPokemons.map(pokemon => (
          <Pokemon
            name={pokemon.name}
            key={`custom-${pokemon._id}`}
            url={pokemon.image}
            id={`custom-${pokemon._id}`}
          />
        ))}

        {/* 👇 Render external Pokémon */}
        {pokemonListState.pokemonList.map(pokemon => (
          <Pokemon
            name={pokemon.name}
            key={pokemon.id}
            url={pokemon.image}
            id={pokemon.id}
          />
        ))}
      </div>

      <div className='page-controls'>
        <button
          onClick={() =>
            setPokemonListState({
              ...pokemonListState,
              pokedexUrl: pokemonListState.prevUrl,
            })
          }
        >
          Prev
        </button>
        <button
          onClick={() =>
            setPokemonListState({
              ...pokemonListState,
              pokedexUrl: pokemonListState.nextUrl,
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
