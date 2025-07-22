import { useState } from "react";
import axios from "axios";
import './AddPokemon.css';


function AddPokemon() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    type: "",
    description: "",
    weight: "", // ✅ New field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/pokemons", {
        ...formData,
        type: formData.type.split(",").map((t) => t.trim()),
        weight: Number(formData.weight), // ✅ Ensure weight is a number
      });
      alert("Pokémon added successfully!");
      setFormData({
        name: "",
        image: "",
        type: "",
        description: "",
        weight: "", // ✅ Clear weight after submit
      });
    } catch (err) {
      alert("Failed to add Pokémon");
      console.error(err);
    }
  };

  return (
    <div className="add-pokemon-form">
      <h2>Add New Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Pokémon Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Types (comma-separated)"
          value={formData.type}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Add Pokémon</button>
      </form>
    </div>
  );
}

export default AddPokemon;
