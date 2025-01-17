// import { useState,useEffect } from "react";
// import './CalorieCounter.scss';

// function CalorieCounter({food , nutritionValue, fetchCalories, deleteFoodItem }){
 
//   const [calories, setCalories] = useState(0);
//   const [carbohydrates, setCarbohydrates] = useState(0);
//   const [cholesterol, setCholesterol] = useState(0);
//   const [fat, setFat] = useState(0);
//   const [fiber, setFiber] = useState(0);
//   const [potassium, setPotassium] = useState(0);
//   const [protein, setProtein] = useState(0);
//   const [sodium, setSodium] = useState(0);
//   const [sugar, setSugar] = useState(0);
//   useEffect(() => {
//     if (nutritionValue.length > 0) {     
//         let totalCalories = 0;
//         let totalCarbohydrates = 0;
//         let totalCholesterol = 0;
//         let totalFat = 0;
//         let totalFiber = 0;
//         let totalPotassium = 0;
//         let totalProtein = 0;
//         let totalSodium = 0;
//         let totalSugar = 0;
//       for (let i=0; i< nutritionValue.length; i++){
        
//         totalCalories = totalCalories + nutritionValue[i].calories;
//         totalCarbohydrates = totalCarbohydrates + nutritionValue[i].carbohydrates_total_g;
//         totalCholesterol = totalCholesterol + nutritionValue[i].cholesterol_mg;
//         totalFat = totalFat + nutritionValue[i].fat_total_g;
//         totalFiber= totalFiber +nutritionValue[i].fiber_g;
//         totalPotassium = totalPotassium + nutritionValue[i].potassium_mg ;
//         totalProtein = totalProtein + nutritionValue[i].protein_g;
//         totalSodium = totalSodium + nutritionValue[i].sodium_mg;
//         totalSugar = totalSugar + nutritionValue[i].sugar_g;
       
        
//     }
//         setCalories(totalCalories);
//         setCarbohydrates(totalCarbohydrates);
//         setCholesterol(totalCholesterol);
//         setFat(totalFat);
//         setFiber(totalFiber);
//         setPotassium(totalPotassium);
//         setProtein(totalProtein);
//         setSodium(totalSodium);
//         setSugar(totalSugar);
     
//     }
//   }, [nutritionValue])
//   useEffect(() => {
//     if (food) {
//       fetchCalories(); 
    
      
//     }
//     },[food],[fetchCalories]); 
//     const handleDelete = (index) => {
//         deleteFoodItem(index); 
//         const updatedNutritionValue = [...nutritionValue];
//         updatedNutritionValue.splice(index, 1);
//     let totalCalories = 0;
//     let totalCarbohydrates = 0;
//     let totalCholesterol = 0;
//     let totalFat = 0;
//     let totalFiber = 0;
//     let totalPotassium = 0;
//     let totalProtein = 0;
//     let totalSodium = 0;
//     let totalSugar = 0;

//     updatedNutritionValue .forEach((item) => {
//       totalCalories += item.calories;
//       totalCarbohydrates += item.carbohydrates_total_g;
//       totalCholesterol += item.cholesterol_mg;
//       totalFat += item.fat_total_g;
//       totalFiber += item.fiber_g;
//       totalPotassium += item.potassium_mg;
//       totalProtein += item.protein_g;
//       totalSodium += item.sodium_mg;
//       totalSugar += item.sugar_g;
//     });

//     setCalories(totalCalories);
//     setCarbohydrates(totalCarbohydrates);
//     setCholesterol(totalCholesterol);
//     setFat(totalFat);
//     setFiber(totalFiber);
//     setPotassium(totalPotassium);
//     setProtein(totalProtein);
//     setSodium(totalSodium);
//     setSugar(totalSugar);

//       };
    
//     if(calories === 0){
//         return <p></p>
//     }
//     return (
        
//       <>
//       <h2 className="dietary-intake-heading">Dietary Intake</h2>
//       <div className="calorie-table-header">
//         <p className="calorie-table__column">Food</p>
//         <p className="calorie-table__column">Calories</p>
//         <p className="calorie-table__column">Carbohydrates</p>
//         <p className="calorie-table__column">Cholesterol</p>
//         <p className="calorie-table__column">Fat</p>
//         <p className="calorie-table__column">Fiber</p>
//         <p className="calorie-table__column">Potassium</p>
//         <p className="calorie-table__column">Protein</p>
//         <p className="calorie-table__column">Sodium</p>
//         <p className="calorie-table__column">Sugar</p>
//       </div>

//       {nutritionValue.map((item, index) => (
//         <div className="calorie-table-row" key={index}>
//           <p className="calorie-table__column">{item.name}</p>
//           <p className="calorie-table__column">{item.calories}</p>
//           <p className="calorie-table__column">{item.carbohydrates_total_g}</p>
//           <p className="calorie-table__column">{item.cholesterol_mg}</p>
//           <p className="calorie-table__column">{item.fat_total_g}</p>
//           <p className="calorie-table__column">{item.fiber_g}</p>
//           <p className="calorie-table__column">{item.potassium_mg}</p>
//           <p className="calorie-table__column">{item.protein_g}</p>
//           <p className="calorie-table__column">{item.sodium_mg}</p>
//           <p className="calorie-table__column">{item.sugar_g}</p>
//           <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
//         </div>
//       ))}

//       <div className="calorie-table-row total">
//         <p className="calorie-table__column">Total</p>
//         <p className="calorie-table__column">{calories.toFixed(2)}</p>
//         <p className="calorie-table__column">{carbohydrates.toFixed(2)}</p>
//         <p className="calorie-table__column">{cholesterol.toFixed(2)}</p>
//         <p className="calorie-table__column">{fat.toFixed(2)}</p>
//         <p className="calorie-table__column">{fiber.toFixed(2)}</p>
//         <p className="calorie-table__column">{potassium.toFixed(2)}</p>
//         <p className="calorie-table__column">{protein.toFixed(2)}</p>
//         <p className="calorie-table__column">{sodium.toFixed(2)}</p>
//         <p className="calorie-table__column">{sugar.toFixed(2)}</p>
//       </div>
//     </>
//     )

// }

// export default CalorieCounter



// import { useState, useEffect } from "react";
// import axios from "axios"; // Import axios
// import './CalorieCounter.scss';
// import { baseURL } from "../../utilities/utilities";

// function CalorieCounter({ food, nutritionValue, fetchCalories, deleteFoodItem }) {
//   const [name, setName] = useState("");
//   const [calories, setCalories] = useState(0);
//   const [carbohydrates, setCarbohydrates] = useState(0);
//   const [cholesterol, setCholesterol] = useState(0);
//   const [fat, setFat] = useState(0);
//   const [fiber, setFiber] = useState(0);
//   const [potassium, setPotassium] = useState(0);
//   const [protein, setProtein] = useState(0);
//   const [sodium, setSodium] = useState(0);
//   const [sugar, setSugar] = useState(0);
//   const [nutritionData, setNutritionData] = useState([]);

//   // Effect to fetch and post nutrition data
  
//   const fetchCalorieData = async () => {
//     try {
//       const response = await axios.get(`${baseURL}/api/mycalories`);
//       const details = response.data;
//       setNutritionData(details);
//       console.log(details); // Optional: Log the fetched details
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
 
//     fetchCalorieData();
//     if (calories===0) {
//       let totalCalories = 0;
//       let totalCarbohydrates = 0;
//       let totalCholesterol = 0;
//       let totalFat = 0;
//       let totalFiber = 0;
//       let totalPotassium = 0;
//       let totalProtein = 0;
//       let totalSodium = 0;
//       let totalSugar = 0;
//       console.log(nutritionData);

//       // Calculate total nutrition values
//       for (let i = 0; i < nutritionData.length; i++) {
//         totalCalories += nutritionData[i].calories;
//         totalCarbohydrates += nutritionData[i].carbohydrate;
//         totalCholesterol += nutritionData[i].cholesterol;
//         totalFat += nutritionData[i].fat;
//         totalFiber += nutritionData[i].fiber;
//         totalPotassium += nutritionData[i].potassium;
//         totalProtein += nutritionData[i].protein;
//         totalSodium += nutritionData[i].sodium;
//         totalSugar += nutritionData[i].sugar;
//       }

//       // Set totals in the state
      
//       setCalories(totalCalories);
//       setCarbohydrates(totalCarbohydrates);
//       setCholesterol(totalCholesterol);
//       setFat(totalFat);
//       setFiber(totalFiber);
//       setPotassium(totalPotassium);
//       setProtein(totalProtein);
//       setSodium(totalSodium);
//       setSugar(totalSugar);
//     }
    

// }, []);
//   useEffect(() => {
//             if (food) {
//               fetchCalories(); 
                   
//             }
//             },[food],[fetchCalories]) // Only re-run if food or nutritionValue changes

//   // Function to fetch nutrition data from backend
  
 
  
//   // Function to post nutrition data to backend
//   const postNutritionData = async () => {
//     try {
//       if (nutritionValue.length > 0) {
//         for (let i = 0; i < nutritionValue.length; i++) {
//           const item = {
//             name: nutritionValue[i].name,
//             calories: nutritionValue[i].calories,
//             carbohydrate: nutritionValue[i].carbohydrates_total_g,
//             cholesterol: nutritionValue[i].cholesterol_mg,
//             fat: nutritionValue[i].fat_total_g,
//             fiber: nutritionValue[i].fiber_g,
//             potassium: nutritionValue[i].potassium_mg,
//             protein: nutritionValue[i].protein_g,
//             sodium: nutritionValue[i].sodium_mg,
//             sugar: nutritionValue[i].sugar_g,
//             // Optional: Add more fields if necessary
//           };

//           // Post item to backend using axios
//           const result = await axios.post(`${baseURL}/api/mycalories`, item);
//           console.log(result); // Optional: Log the result
//         }
//       }
       
//       // After posting, fetch the latest data from backend for display
//       fetchCalorieData();
//     } catch (error) {
//       console.error("Error posting data:", error);
//     }
//   };

//   // Recalculate totals whenever nutrition data changes
//   useEffect(() => {
//     postNutritionData();
//     // fetchCalorieData();
//     if (nutritionData.length > 0) {
//       let totalCalories = 0;
//       let totalCarbohydrates = 0;
//       let totalCholesterol = 0;
//       let totalFat = 0;
//       let totalFiber = 0;
//       let totalPotassium = 0;
//       let totalProtein = 0;
//       let totalSodium = 0;
//       let totalSugar = 0;

//       // Calculate total nutrition values
//       for (let i = 0; i < nutritionData.length; i++) {
//         totalCalories += nutritionData[i].calories;
//         totalCarbohydrates += nutritionData[i].carbohydrate;
//         totalCholesterol += nutritionData[i].cholesterol;
//         totalFat += nutritionData[i].fat;
//         totalFiber += nutritionData[i].fiber;
//         totalPotassium += nutritionData[i].potassium;
//         totalProtein += nutritionData[i].protein;
//         totalSodium += nutritionData[i].sodium;
//         totalSugar += nutritionData[i].sugar;
//       }

//       // Set totals in the state
//       setName(name)
//       setCalories(totalCalories);
//       setCarbohydrates(totalCarbohydrates);
//       setCholesterol(totalCholesterol);
//       setFat(totalFat);
//       setFiber(totalFiber);
//       setPotassium(totalPotassium);
//       setProtein(totalProtein);
//       setSodium(totalSodium);
//       setSugar(totalSugar);
//     }
//   }, [nutritionValue]); // Re-run the effect whenever nutritionData changes

//   // Handle deleting a food item
//   const handleDelete = async (index, id) => {
//     try {
//       // Send a DELETE request to the backend to delete the food item by ID
//       await axios.delete(`${baseURL}/api/mycalories/${id}`);
      
//       // Remove the item from the nutritionData in state
//       const updatedNutritionData = [...nutritionData];
//       updatedNutritionData.splice(index, 1);

//       // Recalculate the totals after deletion
//       let totalCalories = 0;
//       let totalCarbohydrates = 0;
//       let totalCholesterol = 0;
//       let totalFat = 0;
//       let totalFiber = 0;
//       let totalPotassium = 0;
//       let totalProtein = 0;
//       let totalSodium = 0;
//       let totalSugar = 0;

//       updatedNutritionData.forEach((item) => {
//         totalCalories += item.calories;
//         totalCarbohydrates += item.carbohydrate;
//         totalCholesterol += item.cholesterol;
//         totalFat += item.fat;
//         totalFiber += item.fiber;
//         totalPotassium += item.potassium;
//         totalProtein += item.protein;
//         totalSodium += item.sodium;
//         totalSugar += item.sugar;
//       });

//       // Update the state with the new totals
//       setCalories(totalCalories);
//       setCarbohydrates(totalCarbohydrates);
//       setCholesterol(totalCholesterol);
//       setFat(totalFat);
//       setFiber(totalFiber);
//       setPotassium(totalPotassium);
//       setProtein(totalProtein);
//       setSodium(totalSodium);
//       setSugar(totalSugar);

//       // Update the nutritionData state
//       setNutritionData(updatedNutritionData);
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };

//   // if (calories === 0) {
//   //   return <p>No data available</p>;
//   // }

//   return (
//     <>
//       <h2 className="dietary-intake-heading">Dietary Intake</h2>
//       <div className="calorie-table-header">
//         <p className="calorie-table__column">Food</p>
//         <p className="calorie-table__column">Calories</p>
//         <p className="calorie-table__column">Carbohydrates</p>
//         <p className="calorie-table__column">Cholesterol</p>
//         <p className="calorie-table__column">Fat</p>
//         <p className="calorie-table__column">Fiber</p>
//         <p className="calorie-table__column">Potassium</p>
//         <p className="calorie-table__column">Protein</p>
//         <p className="calorie-table__column">Sodium</p>
//         <p className="calorie-table__column">Sugar</p>
//       </div>

//       {nutritionData.map((item, index) => (
//         <div className="calorie-table-row" key={index}>
//           <p className="calorie-table__column">{item.name}</p>
//           <p className="calorie-table__column">{item.calories}</p>
//           <p className="calorie-table__column">{item.carbohydrate}</p>
//           <p className="calorie-table__column">{item.cholesterol}</p>
//           <p className="calorie-table__column">{item.fat}</p>
//           <p className="calorie-table__column">{item.fiber}</p>
//           <p className="calorie-table__column">{item.potassium}</p>
//           <p className="calorie-table__column">{item.protein}</p>
//           <p className="calorie-table__column">{item.sodium}</p>
//           <p className="calorie-table__column">{item.sugar}</p>
//           <button
//             className="delete-btn"
//             onClick={() => handleDelete(index, item.id)} // Pass item id for deletion
//           >
//             Delete
//           </button>
//         </div>
//       ))}

//       <div className="calorie-table-row total">
//         <p className="calorie-table__column">Total</p>
//         <p className="calorie-table__column">{calories.toFixed(2)}</p>
//         <p className="calorie-table__column">{carbohydrates.toFixed(2)}</p>
//         <p className="calorie-table__column">{cholesterol.toFixed(2)}</p>
//         <p className="calorie-table__column">{fat.toFixed(2)}</p>
//         <p className="calorie-table__column">{fiber.toFixed(2)}</p>
//         <p className="calorie-table__column">{potassium.toFixed(2)}</p>
//         <p className="calorie-table__column">{protein.toFixed(2)}</p>
//         <p className="calorie-table__column">{sodium.toFixed(2)}</p>
//         <p className="calorie-table__column">{sugar.toFixed(2)}</p>
//       </div>
//     </>
//   );
// }

// export default CalorieCounter;

// import { useState, useEffect } from "react";
// import axios from "axios"; // Import axios
// import './CalorieCounter.scss';
// import { baseURL } from "../../utilities/utilities";

// function CalorieCounter({ food, nutritionValue, fetchCalories, deleteFoodItem }) {
//   const [name, setName] = useState("");
//   const [calories, setCalories] = useState(0);
//   const [carbohydrates, setCarbohydrates] = useState(0);
//   const [cholesterol, setCholesterol] = useState(0);
//   const [fat, setFat] = useState(0);
//   const [fiber, setFiber] = useState(0);
//   const [potassium, setPotassium] = useState(0);
//   const [protein, setProtein] = useState(0);
//   const [sodium, setSodium] = useState(0);
//   const [sugar, setSugar] = useState(0);
//   const [nutritionData, setNutritionData] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);  // Track if data is loaded

//   // Function to fetch nutrition data from backend
//   const fetchCalorieData = async () => {
//     try {
//       const response = await axios.get(`${baseURL}/api/mycalories`);
//       const details = response.data;
//       setNutritionData(details);
//       setIsLoaded(true);  // Data loaded, trigger recalculation
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fetch calorie data when component mounts
//   useEffect(() => {
//     if (!isLoaded) {
//       fetchCalorieData();
//     }
//   }, [isLoaded]); // Fetch data only if not already loaded
//     useEffect(() => {
//      if (food) {
//       fetchCalories(); 
//       }
//       },[food],[fetchCalories])
//   // Recalculate totals when nutritionData changes
//   useEffect(() => {
//     if (nutritionData.length > 0) {
//       let totalCalories = 0;
//       let totalCarbohydrates = 0;
//       let totalCholesterol = 0;
//       let totalFat = 0;
//       let totalFiber = 0;
//       let totalPotassium = 0;
//       let totalProtein = 0;
//       let totalSodium = 0;
//       let totalSugar = 0;

//       // Calculate total nutrition values
//       for (let i = 0; i < nutritionData.length; i++) {
//         totalCalories += nutritionData[i].calories;
//         totalCarbohydrates += nutritionData[i].carbohydrate;
//         totalCholesterol += nutritionData[i].cholesterol;
//         totalFat += nutritionData[i].fat;
//         totalFiber += nutritionData[i].fiber;
//         totalPotassium += nutritionData[i].potassium;
//         totalProtein += nutritionData[i].protein;
//         totalSodium += nutritionData[i].sodium;
//         totalSugar += nutritionData[i].sugar;
//       }

//       // Set totals in the state
//       setCalories(totalCalories);
//       setCarbohydrates(totalCarbohydrates);
//       setCholesterol(totalCholesterol);
//       setFat(totalFat);
//       setFiber(totalFiber);
//       setPotassium(totalPotassium);
//       setProtein(totalProtein);
//       setSodium(totalSodium);
//       setSugar(totalSugar);
//     }
//   }, [nutritionData]); // Only rerun when nutritionData changes

//   // Function to post nutrition data to backend
//   const postNutritionData = async () => {
//     try {
//       if (nutritionValue.length > 0) {
//         for (let i = 0; i < nutritionValue.length; i++) {
//           const item = {
//             name: nutritionValue[i].name,
//             calories: nutritionValue[i].calories,
//             carbohydrate: nutritionValue[i].carbohydrates_total_g,
//             cholesterol: nutritionValue[i].cholesterol_mg,
//             fat: nutritionValue[i].fat_total_g,
//             fiber: nutritionValue[i].fiber_g,
//             potassium: nutritionValue[i].potassium_mg,
//             protein: nutritionValue[i].protein_g,
//             sodium: nutritionValue[i].sodium_mg,
//             sugar: nutritionValue[i].sugar_g,
//             // Optional: Add more fields if necessary
//           };

//           // Post item to backend using axios
//           const result = await axios.post(`${baseURL}/api/mycalories`, item);
//           console.log(result); // Optional: Log the result
//         }
//       }

//       // After posting, fetch the latest data from backend for display
//      // fetchCalorieData();
//     } catch (error) {
//       console.error("Error posting data:", error);
//     }
//   };

  
//   // Recalculate totals whenever nutrition data changes (post data and fetch)
//   useEffect(() => {
//     if (nutritionValue.length>0) {
//       postNutritionData();
      
//     }
//   }, [nutritionValue]); // Trigger when nutritionValue changes (new data is added)
//   useEffect(()=>{
//     if(nutritionValue.length>0) {
//       postNutritionData();
//       fetchCalorieData();
//     }
//      },[food],[fetchCalories])
  
//   // Handle deleting a food item
//   const handleDelete = async (index, id) => {
//     try {
//       // Send a DELETE request to the backend to delete the food item by ID
//       await axios.delete(`${baseURL}/api/mycalories/${id}`);

//       // Remove the item from the nutritionData in state
//       const updatedNutritionData = [...nutritionData];
//       updatedNutritionData.splice(index, 1);

//       // Recalculate the totals after deletion
//       let totalCalories = 0;
//       let totalCarbohydrates = 0;
//       let totalCholesterol = 0;
//       let totalFat = 0;
//       let totalFiber = 0;
//       let totalPotassium = 0;
//       let totalProtein = 0;
//       let totalSodium = 0;
//       let totalSugar = 0;

//       updatedNutritionData.forEach((item) => {
//         totalCalories += item.calories;
//         totalCarbohydrates += item.carbohydrate;
//         totalCholesterol += item.cholesterol;
//         totalFat += item.fat;
//         totalFiber += item.fiber;
//         totalPotassium += item.potassium;
//         totalProtein += item.protein;
//         totalSodium += item.sodium;
//         totalSugar += item.sugar;
//       });

//       // Update the state with the new totals
//       setCalories(totalCalories);
//       setCarbohydrates(totalCarbohydrates);
//       setCholesterol(totalCholesterol);
//       setFat(totalFat);
//       setFiber(totalFiber);
//       setPotassium(totalPotassium);
//       setProtein(totalProtein);
//       setSodium(totalSodium);
//       setSugar(totalSugar);

//       // Update the nutritionData state
//       setNutritionData(updatedNutritionData);
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };

//   return (
//     <>
//       <h3 className="dietary-intake-heading">Dietary Intake</h3>
//       <div className="calorie-table-header">
//         <p className="calorie-table__column">Food</p>
//         <p className="calorie-table__column">Calories</p>
//         <p className="calorie-table__column">Carbohydrates</p>
//         <p className="calorie-table__column">Cholesterol</p>
//         <p className="calorie-table__column">Fat</p>
//         <p className="calorie-table__column">Fiber</p>
//         <p className="calorie-table__column">Potassium</p>
//         <p className="calorie-table__column">Protein</p>
//         <p className="calorie-table__column">Sodium</p>
//         <p className="calorie-table__column">Sugar</p>
//       </div>

//       {nutritionData.map((item, index) => (
//         <div className="calorie-table-row" key={index}>
//           <p className="calorie-table__column">{item.name}</p>
//           <p className="calorie-table__column">{item.calories}</p>
//           <p className="calorie-table__column">{item.carbohydrate}</p>
//           <p className="calorie-table__column">{item.cholesterol}</p>
//           <p className="calorie-table__column">{item.fat}</p>
//           <p className="calorie-table__column">{item.fiber}</p>
//           <p className="calorie-table__column">{item.potassium}</p>
//           <p className="calorie-table__column">{item.protein}</p>
//           <p className="calorie-table__column">{item.sodium}</p>
//           <p className="calorie-table__column">{item.sugar}</p>
//           <button
//             className="delete-btn"
//             onClick={() => handleDelete(index, item.id)} // Pass item id for deletion
//           >
//             Delete
//           </button>
//         </div>
//       ))}

//       <div className="calorie-table-row total">
//         <p className="calorie-table__column">Total</p>
//         <p className="calorie-table__column">{calories.toFixed(2)}</p>
//         <p className="calorie-table__column">{carbohydrates.toFixed(2)}</p>
//         <p className="calorie-table__column">{cholesterol.toFixed(2)}</p>
//         <p className="calorie-table__column">{fat.toFixed(2)}</p>
//         <p className="calorie-table__column">{fiber.toFixed(2)}</p>
//         <p className="calorie-table__column">{potassium.toFixed(2)}</p>
//         <p className="calorie-table__column">{protein.toFixed(2)}</p>
//         <p className="calorie-table__column">{sodium.toFixed(2)}</p>
//         <p className="calorie-table__column">{sugar.toFixed(2)}</p>
//       </div>
//     </>
//   );
// }

// export default CalorieCounter;

import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
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
  const [isLoaded, setIsLoaded] = useState(false);  // Track if data is loaded
  const [postedItems, setPostedItems] = useState([]); // Track posted items

  // Function to fetch nutrition data from backend
  const fetchCalorieData = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/mycalories`);
      const details = response.data;
      setNutritionData(details);
      setIsLoaded(true);  // Data loaded, trigger recalculation
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch calorie data when component mounts
  useEffect(() => {
    if (!isLoaded) {
      fetchCalorieData();
    }
  }, [isLoaded]); // Fetch data only if not already loaded
  useEffect(() => {
         if (food) {
          fetchCalories(); 
          }
          },[food],[fetchCalories])
  // Recalculate totals when nutritionData changes
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

      // Calculate total nutrition values
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

      // Set totals in the state
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
  }, [nutritionData]); // Only rerun when nutritionData changes

  // Function to post nutrition data to backend (avoid posting already posted items)
  const postNutritionData = async () => {
    try {
      // Check for new items to post
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

          // Post item to backend using axios
          await axios.post(`${baseURL}/api/mycalories`, item);

          // Update the list of posted items
          setPostedItems(prevItems => [...prevItems, item]);
        }

        // Fetch the latest data from backend after posting new items
        fetchCalorieData();
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  // Recalculate totals whenever nutrition data changes (post data and fetch)
  useEffect(() => {
    if (nutritionValue.length > 0) {
      postNutritionData();
    }
  }, [nutritionValue]); // Trigger when nutritionValue changes (new data is added)

  // Handle deleting a food item
  const handleDelete = async (index, id) => {
    try {
      // Send a DELETE request to the backend to delete the food item by ID
      await axios.delete(`${baseURL}/api/mycalories/${id}`);

      // Remove the item from the nutritionData in state
      const updatedNutritionData = [...nutritionData];
      updatedNutritionData.splice(index, 1);

      // Recalculate the totals after deletion
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

      // Update the state with the new totals
      setCalories(totalCalories);
      setCarbohydrates(totalCarbohydrates);
      setCholesterol(totalCholesterol);
      setFat(totalFat);
      setFiber(totalFiber);
      setPotassium(totalPotassium);
      setProtein(totalProtein);
      setSodium(totalSodium);
      setSugar(totalSugar);

      // Update the nutritionData state
      setNutritionData(updatedNutritionData);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <>
      <h3 className="dietary-intake-heading">Dietary Intake</h3>
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
        <p className="calorie-table__column"></p>
      </div>

      {nutritionData.map((item, index) => (
        <div className="calorie-table-row" key={index}>
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
            className="delete-btn"
            onClick={() => handleDelete(index, item.id)} // Pass item id for deletion
          >
            Delete
          </button>
        </div>
      ))}

      <div className="calorie-table-row total">
        <p className="calorie-table__column t">Total</p>
        <p className="calorie-table__column t">{calories}</p>
        <p className="calorie-table__column t">{carbohydrates}</p>
        <p className="calorie-table__column t">{cholesterol}</p>
        <p className="calorie-table__column t">{fat}</p>
        <p className="calorie-table__column t">{fiber}</p>
        <p className="calorie-table__column t">{potassium}</p>
        <p className="calorie-table__column t">{protein}</p>
        <p className="calorie-table__column t">{sodium}</p>
        <p className="calorie-table__column t">{sugar}</p>
        <p className="calorie-table__column t"></p>
      </div>
    </>
  );
}

export default CalorieCounter;
