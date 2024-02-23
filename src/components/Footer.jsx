import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Réalisé en mars 2024 par Elodie Jehl</p>
      <div>
        <Link to="/credits" className="credits">
          Crédits
        </Link>
      </div>
    </div>
  );
}

export default Footer;
