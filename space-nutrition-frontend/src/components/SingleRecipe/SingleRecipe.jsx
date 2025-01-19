import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../utilities/utilities";
import { useParams } from "react-router-dom";
import "./SingleRecipe.scss"

function SingleRecipe() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`${baseURL}/api/recipes/${id}`);
        setRecipe(response.data); 
        setLoading(false); 
      } catch (err) {
        console.error(err);
        setError("Error fetching recipe details. Please try again.");
        setLoading(false); 
      }
    };

    fetchRecipe();
  }, [id]); 

  if (loading) {
    return <p className="single-recipe__loading">Loading recipe...</p>; 
  }

  if (error) {
    return <p className="single-recipe__error-message">{error}</p>; 
  }

  if (!recipe) {
    return <p className="single-recipe__not-found">Recipe not found.</p>; 
  }

  return (
    <div className="single-recipe">
      <h4 className="single-recipe__name">{recipe.name}</h4>
      <p className="single-recipe__method">Method of preparation:</p>
      <p className="single-recipe__instructions">{recipe.instructions}</p>
      
      {recipe.ingredients && recipe.ingredients.length > 0 ? (
        <ul className="single-recipe__ingredients">
          Ingredients:
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.ingredient_id} className="single-recipe__ingredient">
              {ingredient.ingredient_name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients available.</p>
      )}
      
      <p className="single-recipe__dietary-restrictions">{recipe.dietary_restrictions}</p>
    </div>
  );
}

export default SingleRecipe;
