import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <h1>Surprise</h1>

        <h3>Bon anniversaire La Sauce aux Jeux</h3>

        <div className="div_gateau">
          <img
            className="img_gateau"
            src={"/page_home_accueil/gateau_anniversaire.png"}
            alt="20 ans joyeux anniversaire, pièce montée d'anniversaire avec deux bougies soutenue par deux cochons cuisinier La Sauce aux Jeux"
          />
        </div>

        <div className="div_coeur">
          <img
            className="img_coeur"
            src={"/page_home_accueil/coeur_nuage_mots.png"}
            alt="Coeur ombragée comprenant un nuage de mots sur La Sauce aux Jeux"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
