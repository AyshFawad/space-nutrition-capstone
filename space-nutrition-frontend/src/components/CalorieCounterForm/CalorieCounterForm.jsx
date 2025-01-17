
import { useState } from "react";
import CalorieCounter from "../CalorieCounter/CalorieCounter";
import axios from 'axios';
import './CalorieCounterForm.scss';  // Import your styles here

function CalorieCounterForm() {
    const [quantity, setQuantity] = useState("");
    const [foodItem, setFoodItem] = useState("");
    const [food, setFood] = useState("");
    let newFood;
    const [nutritionValue, setNutritionValue] = useState([]);

    function handleChangeQuantity(event) {
        setQuantity(event.target.value); 
    }

    function handleChangeFoodItem(event) {
        setFoodItem(event.target.value);
    }

    const url = 'https://api.calorieninjas.com/v1/nutrition?query=' + food;
    const apiKey = 'Wgq9z5NlLGZSc3gKZG6vnw==F1pme41fiunjkXeQ';
    const fetchCalories = async() => {
        try {
            const response = await axios.get(url, {
                headers: {
                  'X-Api-Key': apiKey,  
                }        
            }
        ); console.log(response.data)
            newFood = response.data.items[0];
            setNutritionValue([...nutritionValue, newFood]);
            console.log([newFood, ...nutritionValue]);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteFoodItem = (index) => {
        const updatedNutritionValue = [...nutritionValue];
        updatedNutritionValue.splice(index, 1);
        setNutritionValue(updatedNutritionValue);
    };

    function handleSubmit(event) {
        event.preventDefault();
        setFood(quantity + ' ' + foodItem);

        if(food === (quantity + ' ' + foodItem)){
            setFood(quantity + ' ' + foodItem);
        }
    }

    function handleCancel(event) {
        event.preventDefault();
        setFoodItem("");
        setQuantity("");
        setFood("");
    }
   

    return (
        <>
        <div className="calorie-counter-form">
            <h2 className="form__header" >Nutrition Dashboard</h2>
            <p className="form__subtitle" >Record Your Meals and Achieve Your Daily Nutrition Targets </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Quantity
                    <input
                        name="quantity"
                        type="text"
                        placeholder="Quantity"
                        onChange={handleChangeQuantity}
                        value={quantity}
                    />
                </label>
                <label>
                    Food item
                    <input
                        name="food-item"
                        type="text"
                        placeholder="Food item"
                        onChange={handleChangeFoodItem}
                        value={foodItem}
                    />
                </label>
                <button type="submit">Add</button>
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </form>
            </div>
            <CalorieCounter 
                food={food} 
                nutritionValue={nutritionValue} 
                fetchCalories={fetchCalories} 
                deleteFoodItem={deleteFoodItem}  
            />
            </>
        
    );
}

export default CalorieCounterForm;
