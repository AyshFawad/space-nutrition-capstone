import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../utilities/utilities";
import { useParams } from "react-router-dom";

function SingleRecipe() {
  const { id } = useParams(); // Get recipe id from URL
  const [recipe, setRecipe] = useState(null); // Initially null since we don't have the recipe data yet
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error if the request fails

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(`${baseURL}/api/recipes/${id}`);
        setRecipe(response.data); // Set the recipe data
        setLoading(false); // Set loading to false once the data is fetched
      } catch (err) {
        console.error(err);
        setError("Error fetching recipe details. Please try again.");
        setLoading(false); // Stop loading in case of an error
      }
    };

    fetchRecipe();
  }, [id]); // Re-fetch data if the id changes

  if (loading) {
    return <p>Loading recipe...</p>; // Loading state
  }

  if (error) {
    return <p>{error}</p>; // Error state
  }

  if (!recipe) {
    return <p>Recipe not found.</p>; // Fallback UI if no recipe found
  }

  return (
    <div>
      <h4 className="recipe-name">{recipe.name}</h4>
      <p className="recipe__method">Method of preparation:</p>
      <p className="recipe-instructions">{recipe.instructions}</p>
      
        {recipe.ingredients && recipe.ingredients.length > 0 ? (
          <ul>Ingredients:
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.ingredient_id}>{ingredient.ingredient_name}</li>
            ))}
          </ul>
        ) : (
          <p>No ingredients available.</p>
        )}
      
      <p className="recipe-dietary-restrictions">{recipe.dietary_restrictions}</p>
    </div>
  );
}

export default SingleRecipe;
