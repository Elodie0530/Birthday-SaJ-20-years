import "./Partenaires.css";

function Partenaires() {
  return (
    <>
      <div className="partenaires">
        <h1>Quelques Partenaires</h1>
        <div className="intro">
          <p>
            Durant ces 20 années, La Sauce aux Jeux a établi de nombreux
            partenariats avec divers acteurs afin de promouvoir le jeu et
            l'imaginaire sous toutes ses formes.
          </p>
          <p>
            Voici une liste non exhaustive des endroits où vous avez pu les
            rencontrer (certains ont depuis fermé)
            <br></br>
            <i>(classés par ordre alphabétique)</i> :
          </p>
        </div>

        <div className="institution">
          <p>
            <b>Partenaires institutionnels :</b>
          </p>

          <div className="cochons">
            <div className="cochon_gauche">
              <img
                src="./src/assets/tete_cochon_gauche.png"
                alt="Tête de cochon avec deux pattes oritenté à gauche"
              />
            </div>
            <div className="cochon_droite">
              <img
                src="./src/assets/tete_cochon_droite.png"
                alt="Tête de cochon avec deux pattes oritenté à droite"
              />
            </div>
          </div>

          <ul className="partner">
            <li className="text_li">Le Conseil Départemental du Bas-Rhin</li>

            <li className="text_li">La Mairie de Reichstett</li>

            <li className="text_li">La Ville de Strasbourg</li>
          </ul>
        </div>

        <div className="lieux">
          <p>
            <b>Lieux ayant accueilli La Sauce aux Jeux :</b>
          </p>
          <ul className="lieu">
            <li className="text_li">L'association Ithaque</li>

            <li className="text_li">La Ludus Academie</li>

            <li className="text_li">La Maison des Jeux</li>
          </ul>
        </div>

        <div className="assos">
          <p>
            <b>Les associations amies :</b>
          </p>
          <ul className="asso">
            <li className="text_li">Amaranthe </li>
            <li className="text_li">
              L'Amicale des Informaticiens de l’Université de Strasbourg (AIUS)
            </li>
            <li className="text_li">Les Chroniques de Nebomore</li>
            <li className="text_li">La Cigogne Rôliste</li>
            <li className="text_li"> D'rôles de Jeux</li>
            <li className="text_li">Les Enfants Terribles</li>
            <li className="text_li">ESN Strasbourg </li>
            <li className="text_li">Les ForgeMondes</li>
            <li className="text_li">Les Jeux du Chat Noir</li>
            <li className="text_li">Pandrylia</li>
            <li className="text_li">Patrimoine et Histoire de Reichstett </li>
            <li className="text_li">La Rue des Jeux</li>
            <li className="text_li">La Taverne des Joueurs</li>
            <li className="text_li">Les Tisseurs d'étoiles</li>
          </ul>
        </div>

        <div className="bars">
          <p>
            <b>Les bars ayant accueilli La Sauce aux Jeux :</b>
          </p>
          <ul className="bar">
            <li className="text_li">Le Café Grognon</li>
            <li className="text_li">Chez Mémé dans les Orties</li>
            <li className="text_li">Le Philibar</li>
            <li className="text_li">Les Savons d'Hélène</li>
            <li className="text_li">Le Schluck N'Spiel </li>
            <li className="text_li">La Taverne française</li>
            <li className="text_li">Le Xanadu</li>
          </ul>
        </div>

        <div className="festivals">
          <p>
            <b>La Sauce aux Jeux était présente sur ces festivals :</b>
          </p>
          <ul className="festival">
            <li className="text_li">Les Alchimistes</li>
            <li className="text_li">Des Bretzels et des Jeux</li>
            <li className="text_li">Le Don des Dragons</li>
            <li className="text_li">
              Le Festival Européen du Film Fantastique de Strasbourg
            </li>
            <li className="text_li">Le Festival Start-To-Play</li>
            <li className="text_li">Lamper'Times à Lampertheim</li>
          </ul>
        </div>

        <div className="autres">
          <p>
            <b>La Sauce aux Jeux a fait des interventions par ici :</b>
          </p>
          <ul className="autre">
            <li className="text_li">A Maze In</li>
            <li className="text_li">Le Château d'Angleterre</li>
            <li className="text_li">DooZ Escape Game Strasbourg</li>
            <li className="text_li">Le Fort Rapp-Moltke de Reichstett</li>
            <li className="text_li">
              Les médiathèques de Vendenheim, de Bischheim, de Fegersheim, du
              Neudorf
            </li>
            <li className="text_li">L'Orée 85</li>
            <li className="text_li">Le musée du jouet de Colmar</li>
            <li className="text_li">Le musée zoologique de Strasbourg</li>
            <li className="text_li">La Nuit du jeu de l’Eurométropole</li>
            <li className="text_li">A Philibert </li>
            <li className="text_li">Le Pixel Museum de Schiltigheim</li>
            <li className="text_li">Le Point d'Eau à Oswald</li>
            <li className="text_li">Le Refuge</li>
            <li className="text_li">
              Le Service Universitaire de l'Action Culturelle de Strasbourg
              (SUAC)
            </li>
          </ul>
        </div>

        <div className="medias">
          <p>
            <b>
              Les médias ayant contribués à faire connaitre La Sauce aux Jeux :
            </b>
          </p>
          <ul className="media">
            <li className="text_li">Coze Magazine</li>
            <li className="text_li">Les Dernières Nouvelles d'Alsace (DNA)</li>
            <li className="text_li">Les forums dédiés aux jeux de rôles</li>
            <li className="text_li">Les réseaux sociaux</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Partenaires;
