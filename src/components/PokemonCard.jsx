// components/PokemonCard.jsx

import './PokemonCard.css';

function PokemonCard({ name, image, type }) {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-card-img" />
      <h3 className="pokemon-card-name">{name}</h3>
      <p className="pokemon-card-type">{type}</p>
    </div>
  );
}

export default PokemonCard;
