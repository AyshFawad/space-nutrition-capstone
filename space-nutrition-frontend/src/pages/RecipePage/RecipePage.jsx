import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../utilities/utilities";
import "./RecipePage.scss";

function RecipePage() {
  const [mealType, setMealType] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  let filtered = [];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected Meal Type:", mealType);

    filtered = recipes.filter(
      (recipe) => recipe.meal_type.toLowerCase() === mealType.toLowerCase()
    );
    console.log(filtered);

    setFilteredRecipes(filtered);
  };

  return (
    <>
      <h2 className="recipe__header">Find Recipes by Meal Type</h2>
      <div className="recipe-finder">
        <form onSubmit={handleSubmit} className="recipe-finder__form">
          <label htmlFor="mealType" className="recipe-finder__label">
            Meal Type:
          </label>
          <select
            id="mealType"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            required
            className="recipe-finder__select"
          >
            <option value="">Select a meal type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="dessert">Dessert</option>
          </select>
          <button type="submit" className="recipe-finder__button">
            Search Recipes
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {filteredRecipes.length > 0 && (
          <div className="recipe">
            <h3 className="recipe__header">Recipes:</h3>
            <ul className="recipe__items">
              {filteredRecipes.map((recipe) => (
                <li key={recipe.id} className="recipe__item">
                  <Link to={`/recipes/${recipe.id}`}>
                    <h4 className="recipe__name">{recipe.name}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default RecipePage;
