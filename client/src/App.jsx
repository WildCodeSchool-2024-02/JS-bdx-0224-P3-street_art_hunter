import { useState } from "react";
import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main>
      <Home />
      <div className="focus">
        <SearchBar
          placeholder="Rechercher votre adresse"
          onChange={handleSearchChange}
        />
        <p>Termes de la recherche: {searchTerm}</p>
      </div>
    </main>
  );
}

export default App;
