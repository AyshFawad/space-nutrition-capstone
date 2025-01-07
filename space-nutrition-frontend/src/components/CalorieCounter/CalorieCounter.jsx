import { useState } from "react";
import axios from "axios";
function CalorieCounter(){
  const [calories, setCalories] = useState([]);
  let foodname= 'orange juice';

  const url = 'https://api.calorieninjas.com/v1/nutrition?query='+foodname;
  const apiKey = 'Wgq9z5NlLGZSc3gKZG6vnw==F1pme41fiunjkXeQ'
  const fetchCalories= async() => {
    try {
        const response = await axios.get(url, {
            headers: {
              'X-Api-Key': apiKey,  
            }        
          })
        console.log(response.data.items);
    } catch (error) {
        
    }
  }
  fetchCalories();
    return (
        <></>
    )

}

export default CalorieCounter