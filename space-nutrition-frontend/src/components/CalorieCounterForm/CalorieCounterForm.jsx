import { useState,useEffect } from "react";
import CalorieCounter from "../CalorieCounter/CalorieCounter"
import axios from 'axios';

function CalorieCounterForm(){
    const [quantity, setQuantity] = useState("");
    const [foodItem, setFoodItem] = useState("");
    const [food, setFood] = useState("");
    let foodList;
    const [nutritionValue, setNutritionValue] = useState([{
        calories:"",
        carbohydrates_total_g:"",
        cholesterol_mg:"",
        fat_saturated_g:"",
        fat_total_g:"",
        fiber_g:"",
        name:"",
        potassium_mg:"",
        protein_g:"",
        serving_size_g:"",
        sodium_mg:"",
        sugar_g:"",
        }]);
        

    function handleChangeQuantity(event){
        setQuantity(event.target.value); 
    }
    function handleChangeFoodItem(event){
        setFoodItem(event.target.value);
    } 
    const url = 'https://api.calorieninjas.com/v1/nutrition?query='+food;
    const apiKey = 'Wgq9z5NlLGZSc3gKZG6vnw==F1pme41fiunjkXeQ'
    const fetchCalories= async() => {
        try {
            const response = await axios.get(url, {
                headers: {
                  'X-Api-Key': apiKey,  
                }        
              })
           
            foodList = response.data.items[0];
            console.log(foodList);
           setNutritionValue([foodList])
        } catch (error) {
            console.error(error);
        }
      }
  

    function handleSubmit(event) {
        event.preventDefault();
        setFood(quantity+ ' ' + foodItem);
        // setNutritionValue(prevNutritionValue => {
        //     const updatedList = [...prevNutritionValue, foodList];
        //     return updatedList; 
        //   })  /
        //setNutritionValue(prevNutritionValue => [...prevNutritionValue, foodList])
        //setNutritionValue([foodList, ...nutritionValue])
    }
    
    
    return(
        <>
        <form onSubmit = {handleSubmit}>
            <label>
                Quantity
                <input
                    name='quantity'
                    type='text'
                    placeholder="quantity"
                    onChange={handleChangeQuantity}
                    value = {quantity}
                />
            </label>
            <label>
                Food item
                <input
                    name='food-item'
                    type='text'
                    placeholder="Food item"
                    onChange={handleChangeFoodItem}
                    value = {foodItem}
                />
            </label>
            <button type="submit">Add</button>

        </form>
        <CalorieCounter food={food} nutritionValue={nutritionValue} fetchCalories={fetchCalories}  />
        </>
    )

}

export default CalorieCounterForm