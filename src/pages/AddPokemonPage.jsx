import { useState } from "react";
import "./AddPokemonPage.css";
import axios from "axios";

function AddPokemonPage() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    image: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/pokemons", formData);

      setMessage("✅ Pokémon added successfully!");
      setFormData({ name: "", type: "", image: "" }); // reset
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to add Pokémon.");
    }
  };

  return (
    <div className="add-pokemon-container">
      <h2>Add a New Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={formData.type}
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
        <button type="submit">Add Pokémon</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddPokemonPage;
