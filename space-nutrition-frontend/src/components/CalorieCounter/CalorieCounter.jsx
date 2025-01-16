import { useState,useEffect } from "react";
import './CalorieCounter.scss';

function CalorieCounter({food , nutritionValue, fetchCalories, deleteFoodItem }){
  console.log(food)
  const [calories, setCalories] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);
  const [fat, setFat] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [protein, setProtein] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [sugar, setSugar] = useState(0);
  useEffect(() => {
    if (nutritionValue.length > 0) {
      // Calculate the total calories whenever nutritionValue changes
        let totalCalories = 0;
        let totalCarbohydrates = 0;
        let totalCholesterol = 0;
        let totalFat = 0;
        let totalFiber = 0;
        let totalPotassium = 0;
        let totalProtein = 0;
        let totalSodium = 0;
        let totalSugar = 0;
      for (let i=0; i< nutritionValue.length; i++){
        
        totalCalories = totalCalories + nutritionValue[i].calories;
        totalCarbohydrates = totalCarbohydrates + nutritionValue[i].carbohydrates_total_g;
        totalCholesterol = totalCholesterol + nutritionValue[i].cholesterol_mg;
        totalFat = totalFat + nutritionValue[i].fat_total_g;
        totalFiber= totalFiber +nutritionValue[i].fiber_g;
        totalPotassium = totalPotassium + nutritionValue[i].potassium_mg ;
        totalProtein = totalProtein + nutritionValue[i].protein_g;
        totalSodium = totalSodium + nutritionValue[i].sodium_mg;
        totalSugar = totalSugar + nutritionValue[i].sugar_g;
       
        
    }
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
  }, [nutritionValue])
  useEffect(() => {
    if (food) {
      fetchCalories(); 
    //   for (let i=0; i< nutritionValue.length; i++){
    //     totalCalories = totalCalories + nutritionValue[i].calories;
    // } setTotalCalories(totalCalories)
      
    }
    },[food],[fetchCalories]); 
    const handleDelete = (index) => {
        deleteFoodItem(index); 
        const updatedNutritionValue = [...nutritionValue];
        updatedNutritionValue.splice(index, 1);
    let totalCalories = 0;
    let totalCarbohydrates = 0;
    let totalCholesterol = 0;
    let totalFat = 0;
    let totalFiber = 0;
    let totalPotassium = 0;
    let totalProtein = 0;
    let totalSodium = 0;
    let totalSugar = 0;

    updatedNutritionValue .forEach((item) => {
      totalCalories += item.calories;
      totalCarbohydrates += item.carbohydrates_total_g;
      totalCholesterol += item.cholesterol_mg;
      totalFat += item.fat_total_g;
      totalFiber += item.fiber_g;
      totalPotassium += item.potassium_mg;
      totalProtein += item.protein_g;
      totalSodium += item.sodium_mg;
      totalSugar += item.sugar_g;
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

      };
    
    if(calories === 0){
        return <p></p>
    }
    return (
        // <>
        // <h2>Dietary Intake</h2>
        // <div className="calorie-table" >
        // <p className="calorie-table__column">Food</p>
        // <p className="calorie-table__column">Calories</p>
        // <p className="calorie-table__column">Carbohydrates</p>
        // <p className="calorie-table__column">Cholesterol</p>
        // <p className="calorie-table__column">Fat</p>
        // <p className="calorie-table__column">Fiber</p>
        // <p className="calorie-table__column">Potassium</p>
        // <p className="calorie-table__column">protein</p>
        // <p className="calorie-table__column">Sodium</p>
        // <p className="calorie-table__column">Sugar</p>
        
        // </div>

        // {nutritionValue.map((item , index) => {
        // return (
        // <div className="calorie-table" key={index}>
        // <p className="calorie-table__column">{item.name}</p>
        // <p className="calorie-table__column">{item.calories}</p>
        // <p className="calorie-table__column">{item.carbohydrates_total_g}</p>
        // <p className="calorie-table__column">{item.cholesterol_mg}</p>
        // <p className="calorie-table__column">{item.fat_total_g}</p>
        // <p className="calorie-table__column">{item.fiber_g}</p>
        // <p className="calorie-table__column">{item.potassium_mg}</p>
        // <p className="calorie-table__column">{item.protein_g}</p>
        // <p className="calorie-table__column">{item.sodium_mg}</p>
        // <p className="calorie-table__column">{item.sugar_g}</p>
        // <button onClick={() => handleDelete(index)}>Delete</button>
        // </div>
        // )
        // })
        // }
        // <div className="calorie-table">
        // <p className="calorie-table__column">Total</p>
        // <p className="calorie-table__column">{calories}</p>
        // <p className="calorie-table__column">{carbohydrates}</p>
        // <p className="calorie-table__column">{cholesterol}</p>
        // <p className="calorie-table__column">{fat}</p>
        // <p className="calorie-table__column">{fiber}</p>
        // <p className="calorie-table__column">{potassium}</p>
        // <p className="calorie-table__column">{protein}</p>
        // <p className="calorie-table__column">{sodium}</p>
        // <p className="calorie-table__column">{sugar}</p>
        // </div>
        // </>
        <>
      <h2 className="dietary-intake-heading">Dietary Intake</h2>
      <div className="calorie-table-header">
        <p className="calorie-table__column">Food</p>
        <p className="calorie-table__column">Calories</p>
        <p className="calorie-table__column">Carbohydrates</p>
        <p className="calorie-table__column">Cholesterol</p>
        <p className="calorie-table__column">Fat</p>
        <p className="calorie-table__column">Fiber</p>
        <p className="calorie-table__column">Potassium</p>
        <p className="calorie-table__column">Protein</p>
        <p className="calorie-table__column">Sodium</p>
        <p className="calorie-table__column">Sugar</p>
      </div>

      {nutritionValue.map((item, index) => (
        <div className="calorie-table-row" key={index}>
          <p className="calorie-table__column">{item.name}</p>
          <p className="calorie-table__column">{item.calories}</p>
          <p className="calorie-table__column">{item.carbohydrates_total_g}</p>
          <p className="calorie-table__column">{item.cholesterol_mg}</p>
          <p className="calorie-table__column">{item.fat_total_g}</p>
          <p className="calorie-table__column">{item.fiber_g}</p>
          <p className="calorie-table__column">{item.potassium_mg}</p>
          <p className="calorie-table__column">{item.protein_g}</p>
          <p className="calorie-table__column">{item.sodium_mg}</p>
          <p className="calorie-table__column">{item.sugar_g}</p>
          <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}

      <div className="calorie-table-row total">
        <p className="calorie-table__column">Total</p>
        <p className="calorie-table__column">{calories.toFixed(2)}</p>
        <p className="calorie-table__column">{carbohydrates.toFixed(2)}</p>
        <p className="calorie-table__column">{cholesterol.toFixed(2)}</p>
        <p className="calorie-table__column">{fat.toFixed(2)}</p>
        <p className="calorie-table__column">{fiber.toFixed(2)}</p>
        <p className="calorie-table__column">{potassium.toFixed(2)}</p>
        <p className="calorie-table__column">{protein.toFixed(2)}</p>
        <p className="calorie-table__column">{sodium.toFixed(2)}</p>
        <p className="calorie-table__column">{sugar.toFixed(2)}</p>
      </div>
    </>
    )

}

export default CalorieCounter