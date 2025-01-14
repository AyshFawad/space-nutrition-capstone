import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { baseURL } from "../../utilities/utilities.js";

function Plants() {
    const [plants, setPlants] = useState([]);
    const [error, setError] = useState();
   
    useEffect(() => {
          const fetchPlants = async () => {
          try {
            const response = await axios.get(
              `${baseURL}/api/plants/`
            );
            setPlants(response.data);
            setError(null);
          } catch (error) {
            if (error.response && error.response.status === 404) {
              setError("Plant not found. Please try again.");
            } else {
              setError("An error occurred. Please try again later.");
            }
          }
        };
    
        fetchPlants();
        
      }, []);
    
      if (plants === null) {
        if (error) {
          return <>{error}</>;
        }
        return <>Loading...</>;
      }
    
    return (
        <section>
          {plants.map((plant)=>{
            return (
                <section key={plant.id}>
                <Link to= {`/plant/${plant.id}`}  >           
                
                <p>{plant.name}</p>
                </Link>   
                
                </section>
            );
          })}
        </section>

    )
}

export default Plants