import { Link } from "react-router-dom";
import "./NavComponent.scss";

function NavComponent() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__link">HomePage</Link>
      <Link to="/calories" className="nav__link">Calorie Counter</Link>
      <Link to="/plants" className="nav__link">Plants</Link>
      <Link to="/recipes" className="nav__link">Recipes</Link>
    </nav>
  );
}


export default NavComponent;