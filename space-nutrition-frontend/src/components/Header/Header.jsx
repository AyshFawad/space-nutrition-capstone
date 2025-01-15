import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="astronaut" className="header__logo" />
      </Link>
      <p className="header__title">AstroBites</p>
    </header>
  );
}

export default Header 