import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../utilities/utilities";

function RecipePage() {
  const [mealType, setMealType] = useState(""); // Meal type selected by user
  const [recipes, setRecipes] = useState([]); // List of all recipes fetched from backend
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Filtered recipes based on meal type
  const [error, setError] = useState(null); // Error state for handling issues
  let filtered=[];
  // Fetch all recipes when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/recipes`);
        setRecipes(response.data);
        setError(null);
      } catch (err) {
        setError("Error fetching recipes. Please try again.");
      }
    };

    fetchRecipes();
  }, []);

  // Function to handle form submission (filters recipes by meal type)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected Meal Type:", mealType);

    // Filter recipes based on the selected meal type
    filtered = recipes.filter((recipe) =>
        recipe.meal_type.toLowerCase() === mealType.toLowerCase()
      );
    console.log(filtered)
    // Set the filtered recipes
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <h2>Find Recipes by Meal Type</h2>
      
      {/* Meal Type Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="mealType">Meal Type:</label>
        <select
          id="mealType"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          required
        >
          <option value="">Select a meal type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="dessert">Dessert</option>
        </select>
        <button type="submit">Search Recipes</button>
      </form>

      {/* Error handling */}
      {error && <p>{error}</p>}

      {/* Show filtered recipes */}
      {filteredRecipes.length > 0 && (
        <div>
          <h3>Recipes:</h3>
          <ul>
            {filteredRecipes.map((recipe) => (
              <li key={recipe.id}>
                <h4>{recipe.name}</h4>
                <p>{recipe.instructions}</p>
                <p>{recipe.dietary_restrictions}</p>
                <p>{recipe.ingredients}</p>

                {/* You can add more recipe details here if needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecipePage;
