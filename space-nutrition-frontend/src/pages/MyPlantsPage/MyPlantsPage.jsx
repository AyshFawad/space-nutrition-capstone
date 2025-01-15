import { useState, useEffect } from "react";
import axios from 'axios';
import { baseURL } from "../../utilities/utilities.js";
import dateFormat from "../../components/DateFormat/DateFormat.jsx"
import WaterReminder from "../../components/WaterReminder/WaterReminder.jsx";

function MyPlantsPage() {
    const [myPlants, setMyPlants] = useState([]);
    const [error, setError] = useState();
   
    useEffect(() => {
          const fetchMyPlants = async () => {
          try {
            const response = await axios.get(
              `${baseURL}/api/myplants`
            );
            setMyPlants(response.data);
            setError(null);
          } catch (error) {
            if (error.response && error.response.status === 404) {
              setError("Plants not found. Please try again.");
            } else {
              setError("An error occurred. Please try again later.");
            }
          }
        };
    
        fetchMyPlants();
        
      }, []);

      const handleDelete = async (id) => {
        try {
          const response = await axios.delete(`${baseURL}/api/myPlants/${id}`);
          
          setMyPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
    
          alert(response.data.message); // Display the success message
        } catch (error) {
          alert("Error deleting the plant.");
        }
      };
    
      if (myPlants === null) {
        if (error) {
          return <>{error}</>;
        }
        return <>Starting Planting</>;
      }
    
    return (
        
        <section>
        <WaterReminder />
             
             <h1>My Plants</h1>
          {myPlants.map((plant)=>{
           
            return (
                              
                <section key={plant.id}>
                <img src={baseURL+plant.photo}/>
                <p>{plant.name}</p>
                <p>{plant.growth_stage}</p>
                <p>Planting date: {dateFormat(plant.created_at)}</p>
                <button onClick={() => handleDelete(plant.id)}>Delete</button>
                         
                </section>
                
            );
          })}
        </section>

    )
}


export default MyPlantsPage