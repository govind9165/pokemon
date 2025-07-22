// 📁 PokemonDetails.jsx
import './PokemonDetails.css';
import { Link } from 'react-router-dom';
import usePokemon from '../../hooks/usePokemon';
import Pokemon from '../Pokemon/Pokemon';

// 🧠 Utility to generate dynamic bio
function generatePokemonBio(pokemon) {
    if (!pokemon) return "";

    const name = pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1);
    const types = Array.isArray(pokemon.types)
        ? typeof pokemon.types[0] === "string"
            ? pokemon.types.join(" and ") // backend format
            : pokemon.types.map(t => t.type.name).join(" and ") // PokéAPI format
        : "unknown";

    const height = pokemon.height || "unknown";
    const weight = pokemon.weight || "unknown";

    return `${name}, the ${types}-type Pokémon, is known for its unique abilities and traits. Standing at ${height} decimetres tall and weighing around ${weight} hectograms, ${name} plays an impressive role in battles. It often showcases ${types}-based powers, making it a valuable member of any trainer's team.`;
}

function getBackgroundByType(type) {
    const backgrounds = {
        fire: "linear-gradient(135deg, #ff512f, #dd2476), url('/images/bg_fire.jpg')",
        water: "linear-gradient(135deg, #2980b9, #6dd5fa), url('/images/bg_water.jpg')",
        grass: "linear-gradient(135deg, #56ab2f, #a8e063), url('/images/bg_grass.jpg')",
        electric: "linear-gradient(135deg, #f7971e, #ffd200), url('/images/bg_electric.jpg')",
        psychic: "linear-gradient(135deg, #b24592, #f15f79), url('/images/bg_psychic.jpg')",
        rock: "linear-gradient(135deg, #3E5151, #DECBA4), url('/images/bg_rock.jpg')",
        ghost: "linear-gradient(135deg, #232526, #414345), url('/images/bg_ghost.jpg')",
        dragon: "linear-gradient(135deg, #1e3c72, #2a5298), url('/images/bg_dragon.jpg')",
        dark: "linear-gradient(135deg, #0f2027, #203a43, #2c5364), url('/images/bg_dark.jpg')",
        default: "linear-gradient(135deg, #bdc3c7, #2c3e50), url('/images/bg_default.jpg')"
    };

    return backgrounds[type] || backgrounds.default;
}

function PokemonDetails({ pokemonName }) {
    const [pokemon, { pokemonList, isLoading, error }] = usePokemon(pokemonName);

    // Support both types of format for main type
    const mainType = Array.isArray(pokemon?.types)
        ? typeof pokemon.types[0] === "string"
            ? pokemon.types[0]
            : pokemon.types[0]?.type?.name
        : 'default';

    const background = getBackgroundByType(mainType);

    return (
        <>
            <h1 className='pokedex-redirect'>
                <Link to="/">Pokedex</Link>
            </h1>

            {isLoading && <p className="loading">Loading Pokémon details...</p>}

            {error ? (
                <div className="error-message">
                    <h2>{error}</h2>
                    <Link to="/" className="back-link">🔙 Back to Home</Link>
                </div>
            ) : pokemon ? (
                <div
                    className='pokemon-details-wrapper'
                    style={{
                        backgroundImage: background,
                        backgroundSize: 'cover',
                        backgroundBlendMode: 'overlay',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='pokemon-detail-name'>{pokemon.name}</div>
                    <div className='pokemon-image'>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div className='pokemon-attr'>
                        <div>Height: {pokemon.height}</div>
                        <div>Weight: {pokemon.weight}</div>
                    </div>
                    <div className='pokemon-types'>
                        <h1>Type:</h1>
                        {Array.isArray(pokemon.types) && (
                            typeof pokemon.types[0] === "string"
                                ? pokemon.types.map(type => (
                                    <span className='type' key={type}>{type}</span>
                                ))
                                : pokemon.types.map(t => (
                                    <span className='type' key={t.type.name}>{t.type.name}</span>
                                ))
                        )}
                    </div>

                    <div className="pokemon-bio">
                        <p>{generatePokemonBio(pokemon)}</p>
                    </div>
                </div>
            ) : (
                !isLoading && (
                    <p className="fallback-message">
                        No data available. Try searching a valid Pokémon.
                    </p>
                )
            )}

            {/* 🔁 Related Pokémons */}
            {pokemonList.length > 0 && (
                <div className='similar-pokemons'>
                    <h2>Similar Pokémons</h2>
                    <div className='pokemon-similar-boxes'>
                        {pokemonList.map(pokemon => (
                            <Pokemon
                                name={pokemon.name}
                                key={pokemon.id}
                                url={pokemon.image}
                                id={pokemon.id}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default PokemonDetails;
