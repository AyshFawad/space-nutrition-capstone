import { Link } from "react-router-dom"
import Plants from "../../components/Plants/Plants"
import "./PlantsPage.scss"

function PlantsPage(){
    
    return (
        <>
       <nav className="plant-page">
        <Link to="/plants/addcrop">Add a Crop</Link>
        <Link to="/plants/myplants">My Plants</Link>
      </nav>

        <Plants />
        </>
    )

}

export default PlantsPage