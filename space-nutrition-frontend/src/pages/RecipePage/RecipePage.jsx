import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../utilities/utilities";
import "./RecipePage.scss"
import SingleRecipe from "../../components/SingleRecipe/SingleRecipe";

function RecipePage() {
  const [mealType, setMealType] = useState(""); // Meal type selected by user
  const [recipes, setRecipes] = useState([]); // List of all recipes fetched from backend
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Filtered recipes based on meal type
  const [error, setError] = useState(null); // Error state for handling issues
  const { id } =useParams();
  let filtered = [];

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
  }
  

  return (
    <>
    <h2 className="recipe__header">Find Recipes by Meal Type</h2>
    <div className="recipe-finder">

       
    {/* Meal Type Form */}
    <form onSubmit={handleSubmit} className="meal-form">
      <label htmlFor="mealType" className="meal-label">Meal Type:</label>
      <select
        id="mealType"
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
        required
        className="meal-select"
      >
        <option value="">Select a meal type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
        <option value="dessert">Dessert</option>
      </select>
      <button type="submit" className="search-button">Search Recipes</button>
    </form>
  
    {error && <p className="error-message">{error}</p>}
  
    {filteredRecipes.length > 0 && (
      <div className="recipe-list">
        <h3 className="recipe-list-header">Recipes:</h3>
        <ul className="recipe-items">
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <Link to={`/recipes/${recipe.id}`}><h4 className="recipe-name">{recipe.name}</h4></Link>
              
              {/* <p className="recipe__method">Method of preparation:</p>
              <p className="recipe-instructions">{recipe.instructions}</p>
              <p className="recipe-ingredients">{recipe.ingredients.map((ingredient)=>{
                      <ul key={ingredient.ingredient_id} >
                        <li>{ingredient.ingredient_name}</li>
                        </ul>
              })}</p>
              <p className="recipe-dietary-restrictions">{recipe.dietary_restrictions}</p>
               */}

                </li>
          ))}
        </ul>
      </div>
    )}
  </div>
          {/* {filteredRecipes.length > 0 && (
        // <SingleRecipe id={filteredRecipes[0].id} />
      )} */}
  </>
  );
  
}

export default RecipePage;
