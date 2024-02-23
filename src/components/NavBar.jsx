import { Link } from "react-router-dom";
import logo from "../assets/logo_saj.png";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo de la Sauce aux Jeux" />
      </Link>
      <ul className="liste">
        <Link to="/association" className="items">
          L'association
        </Link>

        <Link to="/nuitBlanche" className="items">
          Convention Nuit Blanche sur l'Alsace
        </Link>

        <Link to="/partenaires" className="items">
          Partenaires
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
