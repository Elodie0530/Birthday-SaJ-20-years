import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="credits">
        <Link to="/credits" className="item">
          Crédits
        </Link>
      </div>
      <p>Réalisé entre les mois de mars et mai 2024 par Elodie Jehl</p>
    </div>
  );
}

export function Footer2() {
  return (
    <div className="footer2">
      <div className="accueil">
        <Link to="/" className="item">
          Accueil
        </Link>
      </div>
      <p>Réalisé entre les mois de mars et mai 2024 par Elodie Jehl</p>
    </div>
  );
}

