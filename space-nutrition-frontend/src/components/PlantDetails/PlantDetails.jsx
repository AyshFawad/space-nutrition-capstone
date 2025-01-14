import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { baseURL } from "../../utilities/utilities.js";

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
        <>
        <p>{plant.name}</p>
        <p>{plant.watering_frequency}</p>
        </>

    )
}

export default PlantDetails