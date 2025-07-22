import { useState } from "react";

export default function RecipePage() {
  const [recipe, setRecipe] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (recipe) => {
    setRecipe(recipe);
    setSearch(recipe);
  };

  return (
    <div>
      hii
      <header>
        <label htmlFor="recipe-search" className="sr-only">
          Search Recipes
        </label>
        <input
          type="text"
          value={recipe}
          placeholder="Chicken Biryani"
          name="recipe-search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </header>
      <h1>Recipes</h1>
      <div>
        <h2>Search Results for: {search}</h2>
        {/* Here you would typically map over the recipes and display them */}
        {/* Example: recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) */}
      </div>
    </div>
  );
}
