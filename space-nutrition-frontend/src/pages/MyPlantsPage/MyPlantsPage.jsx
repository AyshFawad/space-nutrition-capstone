import { useState, useEffect } from "react";
import axios from 'axios';
import { baseURL } from "../../utilities/utilities.js";
import dateFormat from "../../components/DateFormat/DateFormat.jsx"
import WaterReminder from "../../components/WaterReminder/WaterReminder.jsx";
import "./MyPlantsPage.scss";

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
             
          <div className="my-plants-container">
            <h2 className="plants__title">My Plants</h2>
            {myPlants.map((plant) => (
              <section key={plant.id} className="plant-item">
                <img src={baseURL + plant.photo} alt={plant.name} className="plants__img" />
                <div>
                  <p className="plants__details"><strong>{plant.name}</strong></p>
                  <p className="plants__details">Growth Stage: {plant.growth_stage}</p>
                  <p className="plants__details">Planting Date: {dateFormat(plant.created_at)}</p>
                </div>
                <button onClick={() => handleDelete(plant.id)}>Delete</button>
              </section>
            ))}
          </div>
        </section>

    )
}


export default MyPlantsPage