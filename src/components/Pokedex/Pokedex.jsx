import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <-- Added useNavigate
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import Footer from "../Footer";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // <-- Needed for logout

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div>
      <div className="pokemon-banner">
        <div className="top-nav">
          <div className="logo">
            <img
              src="https://pluspng.com/img-png/pokemon-logo-png--1169.png"
              alt="Pokemon Logo"
              className="pokemon-logo"
            />
          </div>
          <div className="nav-links">
           <Link to="/about">About</Link>
            <Link to="/story">Pokémon Story</Link> 
           <Link to="/contact">Contact</Link>
            <Link to="/add" className="nav-add-link">Add Pokémon</Link>
            <button onClick={handleLogout}className="logout-button">Logout</button> {/* <-- Logout button added */}
          </div>
        </div>

        <div className="pokemon-slider">
          <img src="https://i.etsystatic.com/40762200/r/il/860aab/4571052366/il_fullxfull.4571052366_10p1.jpg" alt="Pokemon 1" />
          <img src="https://wallpapers.com/images/hd/immaginidi-charizard-88qkoqhydul9lyhs.jpg" alt="Charizard" />
          <img src="https://randompokemon.app/wp-content/uploads/2024/01/bulbasaur_s_strongest_abilities.jpg" alt="Bulbasaur" />
          <img src="https://cdn.wallpapersafari.com/77/19/m0wzcQ.jpg" alt="Pokemon 4" />
          <img src="https://wallpapercave.com/wp/wp3961375.jpg" alt="Pokemon 5" />
          <img src="https://pokejungle.net/wp-content/uploads/2017/03/tapu-koko-shiny-sm.jpg" alt="Pokemon 5" />
          <img src="https://picfiles.alphacoders.com/575/575580.jpg" alt="Pokemon 5" />
          <img src="https://images6.alphacoders.com/841/841277.jpg" alt="Pokemon 5" />
          <img src="https://wallpapers.com/images/hd/reshiram-flies-through-fire-igcyz058yuobdldf.jpg" alt="Pokemon 5" />
          <img src="https://th.bing.com/th/id/R.b09e4034ea3c4aee98076b8916d1af3b?rik=FSL%2bN9AQge87GA&riu=http%3a%2f%2ffc04.deviantart.net%2ffs71%2ff%2f2012%2f081%2f4%2f3%2flatios_by_masae-d4tkx3x.png&ehk=WEOnt6rBBTnq3V6KdBTbQ0cKHrXrk3qpoluJ%2bBWDlJc%3d&risl=&pid=ImgRaw&r=0" alt="Pokemon 5" />
          <img src="https://i.etsystatic.com/40762200/r/il/860aab/4571052366/il_fullxfull.4571052366_10p1.jpg" alt="Pokemon 1 Clone" />
          <img src="https://wallpapers.com/images/hd/immaginidi-charizard-88qkoqhydul9lyhs.jpg" alt="Charizard Clone" />
        </div>
      </div>

      <div className='pokedex-wrapper'>
        <div className="landing-container">
          <h1 className="landing-title">POKEDEX</h1>
        </div>
        <Search updateSearchTerm={setSearchTerm} />
        {searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList />}
      </div>
      <Footer />
    </div>
  );
}

export default Pokedex;
