import { useState } from "react";
import Navbar from "../components/NavBar";
import {Footer} from "../components/Footer";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home">
        <div className="navbar">
          <Navbar />
        </div>

        <h1>20 ans</h1>
        <div>
          <img
            className="gateau"
            src={"./src/assets/gateau_anniversaire.png"}
            alt="20 ans joyeux anniversaire, pièce montée d'anniversaire avec deux bougies soutenue par deux cochons cuisinier La Sauce aux Jeux"
          />
        </div>

        <div>
          <img
            className="coeur"
            src={"./src/assets/coeur_nuage_mots.png"}
            alt="Coeur ombragée comprenant un nuage de mots sur la Sauce aux Jeux"
          />
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta amet
          commodi modi quos illum rem dolorem similique assumenda labore porro
          cum animi veritatis placeat odit eligendi in, magni facilis quod!
        </p>
        <div className="count">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>div compteur</p>
        </div>

        <div>hello world</div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
