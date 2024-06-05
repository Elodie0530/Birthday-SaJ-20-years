import { useEffect } from "react";
import "./Porte_clic.css";

function Porte_clic() {
  /*redirection au clic*/
  const handleRedirect = () => {
    window.location.href = "/20ans";
  };

  const handleTouchRedirect = () => {
    /*redirection au clic tactile*/
    const timer = setTimeout(() => {
      handleRedirect();
      clearTimeout(timer);
    }, 300);
  };

  useEffect(() => {
    /*redirection automatique apres un delai*/
    const timer = setTimeout(() => {
      handleRedirect();
      clearTimeout(timer);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="porte">
        <img
          className="img"
          src={"./src/assets/page_entree_porte_clic/porte_entree.png"}
          alt="Porte surplombée de Cthulu, cliquez sur le logo de la Sauce aux Jeux au centre pour entrer dans le site (ou patienter un peu vous serez rediriger automatiquement), il y a aussi un escalier avec 3 cochons dessus, sur les marches sont inscit 'Ithaque', 'Ludus Academie' et 'Maison des jeux'"
          onClick={handleRedirect}
          onTouchStart={handleTouchRedirect}
        />
        <a className="box clic" onClick={handleRedirect} href="#"></a>
      </div>
    </>
  );
}

export default Porte_clic;
