import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <h1>Surprise</h1>

        <h3>Bon anniversaire la Sauce aux Jeux</h3>

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
            alt="15Coeur ombragée comprenant un nuage de mots sur la Sauce aux Jeux"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
