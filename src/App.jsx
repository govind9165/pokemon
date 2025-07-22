// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Pokedex from './components/Pokedex/Pokedex';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import AddPokemon from "./components/AddPokemon/AddPokemon";
import PokemonStory from './components/pokemonStory/pokemonStory';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import Logout from './components/Logout';
import About from './components/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/logout" element={<Logout />} />

      {/* Private routes */}
      <Route path="/story" element={<PrivateRoute><PokemonStory /></PrivateRoute>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pokedex" element={<PrivateRoute><Pokedex /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/pokemon/:id" element={<PrivateRoute><PokemonDetails /></PrivateRoute>} />
      <Route path="/story" element={<PrivateRoute><PokemonStory /></PrivateRoute>} />
      <Route path="/add" element={<PrivateRoute><AddPokemon /></PrivateRoute>} />

      {/* Fallback route */}
      <Route path="*" element={<Signin />} />
    </Routes>
  );
}

export default App;
