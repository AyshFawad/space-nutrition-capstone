import { useState, useEffect } from "react";
import axios from "axios"; 
import './CalorieCounter.scss';
import { baseURL } from "../../utilities/utilities";

function CalorieCounter({ food, nutritionValue, fetchCalories, deleteFoodItem }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);
  const [fat, setFat] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [protein, setProtein] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [nutritionData, setNutritionData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);  
  const [postedItems, setPostedItems] = useState([]);

  const fetchCalorieData = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/mycalories`);
      const details = response.data;
      setNutritionData(details);
      setIsLoaded(true);  
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isLoaded) {
      fetchCalorieData();
    }
  }, [isLoaded]); 
  useEffect(() => {
         if (food) {
          fetchCalories(); 
          }
          },[food],[fetchCalories])

  useEffect(() => {
    if (nutritionData.length > 0) {
      let totalCalories = 0;
      let totalCarbohydrates = 0;
      let totalCholesterol = 0;
      let totalFat = 0;
      let totalFiber = 0;
      let totalPotassium = 0;
      let totalProtein = 0;
      let totalSodium = 0;
      let totalSugar = 0;

      
      nutritionData.forEach(item => {
        totalCalories += item.calories;
        totalCarbohydrates += item.carbohydrate;
        totalCholesterol += item.cholesterol;
        totalFat += item.fat;
        totalFiber += item.fiber;
        totalPotassium += item.potassium;
        totalProtein += item.protein;
        totalSodium += item.sodium;
        totalSugar += item.sugar;
      });

      
      setCalories(totalCalories);
      setCarbohydrates(totalCarbohydrates);
      setCholesterol(totalCholesterol);
      setFat(totalFat);
      setFiber(totalFiber);
      setPotassium(totalPotassium);
      setProtein(totalProtein);
      setSodium(totalSodium);
      setSugar(totalSugar);
    }
  }, [nutritionData]); 

  const postNutritionData = async () => {
    try {
      
      const newItems = nutritionValue.filter(item => !postedItems.some(postedItem => postedItem.name === item.name));

      if (newItems.length > 0) {
        for (let i = 0; i < newItems.length; i++) {
          const item = {
            name: newItems[i].name,
            calories: newItems[i].calories,
            carbohydrate: newItems[i].carbohydrates_total_g,
            cholesterol: newItems[i].cholesterol_mg,
            fat: newItems[i].fat_total_g,
            fiber: newItems[i].fiber_g,
            potassium: newItems[i].potassium_mg,
            protein: newItems[i].protein_g,
            sodium: newItems[i].sodium_mg,
            sugar: newItems[i].sugar_g,
          };

          await axios.post(`${baseURL}/api/mycalories`, item);

          setPostedItems(prevItems => [...prevItems, item]);
        }

        fetchCalorieData();
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };


  useEffect(() => {
    if (nutritionValue.length > 0) {
      postNutritionData();
    }
  }, [nutritionValue]); 

  const handleDelete = async (index, id) => {
    try {
   
      await axios.delete(`${baseURL}/api/mycalories/${id}`);

      const updatedNutritionData = [...nutritionData];
      updatedNutritionData.splice(index, 1);

      let totalCalories = 0;
      let totalCarbohydrates = 0;
      let totalCholesterol = 0;
      let totalFat = 0;
      let totalFiber = 0;
      let totalPotassium = 0;
      let totalProtein = 0;
      let totalSodium = 0;
      let totalSugar = 0;

      updatedNutritionData.forEach((item) => {
        totalCalories += item.calories;
        totalCarbohydrates += item.carbohydrate;
        totalCholesterol += item.cholesterol;
        totalFat += item.fat;
        totalFiber += item.fiber;
        totalPotassium += item.potassium;
        totalProtein += item.protein;
        totalSodium += item.sodium;
        totalSugar += item.sugar;
      });

     
      setCalories(totalCalories);
      setCarbohydrates(totalCarbohydrates);
      setCholesterol(totalCholesterol);
      setFat(totalFat);
      setFiber(totalFiber);
      setPotassium(totalPotassium);
      setProtein(totalProtein);
      setSodium(totalSodium);
      setSugar(totalSugar);

    
      setNutritionData(updatedNutritionData);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <section className="calorie-table">
      <h3 className="dietary-intake-heading">Dietary Intake</h3>
      <div className="calorie-table__row calorie-table__row--header">
        <p className="calorie-table__column">Food</p>
        <p className="calorie-table__column">Calories</p>
        <p className="calorie-table__column">Carbs</p>
        <p className="calorie-table__column">Chol</p>
        <p className="calorie-table__column">Fat</p>
        <p className="calorie-table__column">Fiber</p>
        <p className="calorie-table__column">Potassium</p>
        <p className="calorie-table__column">Protein</p>
        <p className="calorie-table__column">Sodium</p>
        <p className="calorie-table__column">Sugar</p>
        <p className="calorie-table__column"></p>
      </div>

      {nutritionData.map((item, index) => (
        <div className="calorie-table__row" key={index}>
          <p className="calorie-table__column">{item.name}</p>
          <p className="calorie-table__column">{item.calories}</p>
          <p className="calorie-table__column">{item.carbohydrate}</p>
          <p className="calorie-table__column">{item.cholesterol}</p>
          <p className="calorie-table__column">{item.fat}</p>
          <p className="calorie-table__column">{item.fiber}</p>
          <p className="calorie-table__column">{item.potassium}</p>
          <p className="calorie-table__column">{item.protein}</p>
          <p className="calorie-table__column">{item.sodium}</p>
          <p className="calorie-table__column">{item.sugar}</p>
          <button
            className=" calorie-table__column calorie-table__column--delete"
            onClick={() => handleDelete(index, item.id)} 
          >
            Delete
          </button>
        </div>
      ))}

      <div className="calorie-table__row calorie-table__row--total">
        <p className="calorie-table__column end">Total</p>
        <p className="calorie-table__column end">{calories}</p>
        <p className="calorie-table__column end">{carbohydrates}</p>
        <p className="calorie-table__column end">{cholesterol}</p>
        <p className="calorie-table__column end">{fat}</p>
        <p className="calorie-table__column end">{fiber}</p>
        <p className="calorie-table__column end">{potassium}</p>
        <p className="calorie-table__column end">{protein}</p>
        <p className="calorie-table__column end">{sodium}</p>
        <p className="calorie-table__column end">{sugar}</p>
        <p className="calorie-table__column end"></p>
      </div>
    </section>
  );
}

export default CalorieCounter;
