import { Link } from "react-router-dom";
import logo from "../assets/logo_saj.jpeg";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo La Sauce aux Jeux, Cochon cuisinier mélangeant dans un chaudron les ingrédients suivants : un meeple, un sablier, un dés 6 et un dés 20 de jeux de rôle" />
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
