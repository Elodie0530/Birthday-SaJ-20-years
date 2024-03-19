import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="credits">
        <Link to="/credits" className="item">
          Crédits
        </Link>
      </div>
      <p>Réalisé en mars 2024 par Elodie Jehl</p>
    </div>
  );
}

export default Footer;
