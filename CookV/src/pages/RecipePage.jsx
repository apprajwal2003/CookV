// src/components/RecipePage.jsx
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RecipePage() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  useEffect(() => {
    // Fetch recipes from the backend or use a static list
    const allRecipes = async () => {
      // Simulating a fetch call
      const response = await axios.get("/api/allRecipes");
      setRecipes(response.data);
    };
    allRecipes();
  }, []);

  const filteredRecipes = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Find Your Next Meal
          </h1>
          <p className="text-gray-600 mt-2">
            Search our collection of delicious recipes.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-2 mt-6 max-w-xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search for 'Pasta', 'Chicken', etc."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-2.5 rounded-full shadow-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-rose-500 text-white font-semibold rounded-full shadow-lg hover:bg-rose-600 transition-colors duration-300"
            >
              Search
            </button>
          </form>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => navigate(`/recipe/${recipe.id}`)}
              className="group bg-white/50 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                  {recipe.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {recipe.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-xl text-gray-500">
              No recipes found for "{search}". Try another search!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
