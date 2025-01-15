import { Link } from "react-router-dom"
import Plants from "../../components/Plants/Plants"

function PlantsPage(){
    
    return (
        <>
        <nav>
        <Link to="/plants/addcrop">Add a Crop</Link>
        <Link to="/plants/myplants">My Plants</Link>
        </nav>

        <Plants />
        </>
    )

}

export default PlantsPage