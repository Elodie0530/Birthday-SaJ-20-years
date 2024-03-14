import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
// import nb15 from "../assets/2015_affiche_nuit_blanche.png";

function NuitBlanche() {
  return (
    <>
      <Navbar />
      <h1>La Convention `Nuit Blanche sur l'Alsace`</h1>
      <div>
        <p>
          Voici la Convention majeur de jeux de Rôles de La Sauce aux Jeux.
          <br></br>
          Principalement dans l'univers de Cthulhu (univers d’Howard Phillips
          Lovecraft), ainsi que l’histoire et la culture du Bas-Rhin.<br></br>
          Elle existe depuis l'été 2015 jusqu'à nos jours.<br></br> Elle tend à
          évoluée et se diversifiée avec les associations partenaires, en
          prenant une nouvelle forme, donc rendez-vous est donner pour la
          prochaine édition les 22 et 23 juin 2024. <br></br>
          <br></br>
          Retour en affiches et en chiffres sur les Conventions passées :
        </p>
        <div>
          <img
            className="posterWhiteNight"
            src={"src/assets/2015_affiche_nuit_blanche.jpeg"}
            alt="nuitblanche2015"
          />
        </div>
        <div>
          <img
            className="posterWhiteNight"
            src={"src/assets/2016_affiche_nuit_blanche.jpeg"}
            alt="nuitblanche2016"
          />
        </div>
        <div>
          <img
            className="posterWhiteNight"
            src={"src/assets/2017_affiche_nuit_blanche.jpeg"}
            alt="nuitblanche2017"
          />
        </div>
        <div>
          <img
            className="posterWhiteNight"
            src={"src/assets/2018_affiche_nuit_blanche.jpeg"}
            alt="nuitblanche2018"
          />
        </div>
        <div>
          <img
            className="posterWhiteNight"
            src={"src/assets/2019_affiche_nuit_blanche.png"}
            alt="nuitblanche2019"
          />
        </div>
        <div>
          <img
            className="posterWhiteNight"
            src={"src/assets/2021_affiche_nuit_blanche.jpeg"}
            alt="nuitblanche2021"
          />
        </div>
        <div>
          <img
            className="posterWhiteNight"
            src={"src/assets/2022_affiche_nuit_blanche.jpeg"}
            alt="nuitblanche2022"
          />
        </div>
        <div>
          <img
            className="posterWhiteNight"
            src={"src/assets/2023_affiche_nuit_blanche.jpeg"}
            alt="nuitblanche2023"
          />
        </div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        eligendi ipsum asperiores atque dignissimos, ipsa itaque, maiores
        recusandae debitis tenetur ab labore ducimus deserunt eos enim maxime
        aliquam sunt odit!
      </div>
      <Footer />
    </>
  );
}

export default NuitBlanche;
