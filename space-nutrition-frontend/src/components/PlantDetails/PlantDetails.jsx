import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { baseURL } from "../../utilities/utilities.js";
import "./PlantDetails.scss"

function PlantDetails() {
    const [plant, setPlant] = useState([]);
    const [error, setError] = useState();
    const { id } = useParams();
    useEffect(() => {
          const fetchPlantsDetails = async () => {
          try {
            const response = await axios.get(
              `${baseURL}/api/plants/${id}`
            );
            setPlant(response.data);
            setError(null);
          } catch (error) {
            if (error.response && error.response.status === 404) {
              setError("Plant not found. Please try again.");
            } else {
              setError("An error occurred. Please try again later.");
            }
          }
        };
    
        fetchPlantsDetails();
        
      }, [id]);
    
      if (plant === null) {
        if (error) {
          return <>{error}</>;
        }
        return <>Loading...</>;
      }
    
    return (
      <section className="plant">
      <img className="plant__img" src={baseURL + plant.photo} alt={plant.name} />
      <p className="plant__name">{plant.name}</p>
      <p className="plant__detail">Watering Frequency: {plant.watering_frequency}</p>
      <p className="plant__detail">Temperature Range: {plant.temperature_range}</p>
      <p className="plant__detail">Humidity Level: {plant.humidity_level}</p>
    </section>

    )
}

export default PlantDetails