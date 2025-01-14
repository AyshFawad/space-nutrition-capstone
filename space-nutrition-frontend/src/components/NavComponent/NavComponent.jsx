import { Link } from "react-router-dom";

function NavComponent(){
    return (
        <nav>
            <Link to="/">HomePage</Link>
            <Link to="calories">Calorie Counter</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/recipes">Recipes</Link>
        </nav>
    )
}

export default NavComponent;