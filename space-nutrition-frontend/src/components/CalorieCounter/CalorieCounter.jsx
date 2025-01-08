import { useState,useEffect } from "react";
import './CalorieCounter.scss';

function CalorieCounter({food , nutritionValue, fetchCalories }){
  console.log(food)
  console.log(nutritionValue.name)
  useEffect(() => {
    if (food) {
      fetchCalories(); 
    }
    }, [food]); 
    return (
        <>
        <h2>Calorie Counter</h2>

        {nutritionValue.map((item , index) => (
        <div className="calorie-table" key={index}>
        <p className="calorie-table__column">Food{food}</p>
        <p className="calorie-table__column">Calories{item.calories}</p>
        <p className="calorie-table__column">Carbohydrates{item.carbohydrates_total_g}</p>
        <p className="calorie-table__column">Cholesterol{item.cholesterol_mg}</p>
        <p className="calorie-table__column">Fat{item.fat_total_g}</p>
        <p className="calorie-table__column">Fiber{item.fiber_g}</p>
        <p className="calorie-table__column">Potassium{item.potassium_mg}</p>
        <p className="calorie-table__column">protein{item.protein_g}</p>
        <p className="calorie-table__column">Sodium{item.sodium_mg}</p>
        <p className="calorie-table__column">Sugar{item.sugar_g}</p>
        </div>

        ))
        }
       
        </>
    )

}

export default CalorieCounter