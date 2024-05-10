import "./Credits.css";

function Credits() {
  return (
    <>
      <div className="credits">
        <h1>Crédits</h1>
        <div className="intro">
          <p>Je vais décrire ici les outils ainsi que les sources utilisées.</p>
          <p>
            Les informations textuelles et visuelles de ce site ont été
            réutilisées à partir des réseaux de l'association, notamment du site
            internet officiel de{" "}
            <a
              className="link_site"
              href="https://www.lasauceauxjeux.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvre le site officiel de la Sauce aux Jeux dans une nouvelle fenêtre ou un nouvel onglet"
            >
              la Sauce aux Jeux{" "}
            </a>
            <img
              className="icon"
              src={"./src/assets/icon_link_window.png"}
              alt="Ouvre le site officiel de la Sauce aux Jeux dans une nouvelle fenêtre ou un nouvel onglet"
            />
            .{" "}
          </p>
          <p>Sauf mentions contraires ci-dessous :</p>
        </div>

        <div className="people">
          <p>
            <b>Mais tout d'abord, je tiens à remercier ces personnes :</b>
          </p>

          <ul className="congrat">
            <li className="icon_li">
              Monsieur Didier Cotel pour son autorisation d'utilisation des
              données, même s'il n'était pas tout à fait au courant de ce projet
              dans son intégralité.
            </li>

            <li className="icon_li">
              Madame Camille Tisserand, dessinatrice officielle de la Sauce aux
              Jeux.{" "}
              <p>
                Le logo de l'association ainsi que tous les "petits cochons" présents sur le site sont
                son œuvre, je me suis permise de vous les emprunter.
              </p>
            </li>

            <li className="icon_li">
              Monsieur David Alves pour son accord et sa participation au
              partage d'images présentes dans la Gazette du Groin.
            </li>

            <li className="icon_li">
              Messieurs Florian L. , Herimanana R. , Matthieu L. et Romain G. pour l'aide
              technique apportée lors des problèmes de développement de ce site.
            </li>

            <li className="icon_li">
              Madame Séverine M. pour son empêchement à pouvoir collaborer et
              ses avis sur le gâteau et la porte.
            </li>

            <li className="icon_li">
              Madame Catherine S. pour notre discussions sur comment faire au
              mieux le dessin de la porte.
            </li>
          </ul>
        </div>

        <div className="entree">
          <p>
            <b>Pour la page d'entrée :</b>
          </p>
          <p>C'est une image composite réalisée avec le logiciel GIMP</p>
          <ul className="congrat">
            <li className="icon_li">
              Le Cthulhu a été fait par Reveron966, avec une image générée par
              l'Intelligence Artificielle, sur le site{" "}
              <a
                className="link_site"
                href="https://fr.freepik.com/photos-premium/art-du-cthulhu_156482442.htm#fromView=search&page=11&position=28&uuid=a5cddafc-d9db-44cf-b0cc-f4efa2f3dc73"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvre le site freepik dans une nouvelle fenêtre ou un nouvel onglet"
              >
                fr.freepik.com{" "}
              </a>
              <img
                className="icon"
                src={"./src/assets/icon_link_window.png"}
                alt="Ouvre le site freepik dans une nouvelle fenêtre ou un nouvel onglet"
              />
              .{" "}
            </li>

            <li className="icon_li">
              Les dragons sont des images d'illustrations du site Canva.
            </li>

            <li className="icon_li">
              L'image de base de la porte est de Natalja Cernecka empruntée sur
              le site{" "}
              <a
                className="link_site"
                href="https://fr.123rf.com/photo_92627502_page-noir-et-blanc-à-colorier-dessin-fantastique-de-la-porte-d-un-conte-de-fées-feuille-de-travail.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvre le site fr.123rf dans une nouvelle fenêtre ou un nouvel onglet"
              >
                fr.123rf.com{" "}
              </a>
              <img
                className="icon"
                src={"./src/assets/icon_link_window.png"}
                alt="Ouvre le site fr.123rf dans une nouvelle fenêtre ou un nouvel onglet"
              />
              .{" "}
            </li>

            <li className="icon_li">
              Le logo de la Sauce aux jeux, ainsi que les cochons sont de Camille Tisserand.
            </li>

            <li className="icon_li">
              L'escalier est de Lightkitegirl trouvé sur le site{" "}
              <a
                className="link_site"
                href="https://www.istockphoto.com/fr/vectoriel/illustration-réaliste-escaliers-blancs-vector-gm891310266-246839889"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvre le site istockphoto.com dans une nouvelle fenêtre ou un nouvel onglet"
              >
                istockphoto.com{" "}
              </a>
              <img
                className="icon"
                src={"./src/assets/icon_link_window.png"}
                alt="Ouvre le site istockphoto.com dans une nouvelle fenêtre ou un nouvel onglet"
              />
              .{" "}
            </li>
          </ul>
        </div>

        <div className="homepage">
          <p>
            <b>Pour la page d'accueil :</b>
          </p>

          <ul className="congrat">
            <li className="icon_li">
              Le gâteau est une image composite retravaillée avec le logiciel
              GIMP, à partir d'éléments d'illustrations du site Canva.
            </li>

            <li className="icon_li">
              Les cochons cuisiniers sont de Camille Tisserand.
            </li>

            <li className="icon_li">
              Le coeur est un nuage de mots collaboratif mis en forme avec le
              site{" "}
              <a
                className="link_site"
                href=" https://www.nuagesdemots.fr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvre le site nuagesdemots.fr dans une nouvelle fenêtre ou un nouvel onglet"
              >
                nuagesdemots.fr{" "}
              </a>
              <img
                className="icon"
                src={"./src/assets/icon_link_window.png"}
                alt="Ouvre le site nuagesdemots.fr dans une nouvelle fenêtre ou un nouvel onglet"
              />
              . et remodelé avec le logiciel GIMP.
              <p>
                Ils, elles ont collaboré.e.s au nuage de mots via un fil sur le
                discord de la Sauce aux Jeux :
                <table>
                  <caption>
                    Propositions de mots par des membres de l'association
                  </caption>
                  <tr>
                    <th scope="col">Pseudonyme</th>
                    <th scope="col">Mot proposé</th>
                  </tr>

                  <tr>
                    <td>Fabiche</td>
                    <td>Expérience</td>
                  </tr>

                  <tr>
                    <td>Melodies42</td>
                    <td>Bienveillance</td>
                  </tr>

                  <tr>
                    <td>Parlons astro(nomie)</td>
                    <td>Lasauceaujeu</td>
                  </tr>

                  <tr>
                    <td>Unfrogettable</td>
                    <td>Surprise</td>
                  </tr>
                </table>
              </p>
            </li>
          </ul>
        </div>

        <div className="night_white">
          <p>
            <b>Pour la page convention nuit blanche sur l'Alsace :</b>
          </p>

          <ul className="congrat">
            <li className="icon_li">
              Le masque pour illustrer l'année blanche de 2020 suite à la pandémie du
              covid19, est de Gordon Johnson (GDJ) trouvé sur le site{" "}
              <a
                className="link_site"
                href="https://pixabay.com/fr/vectors/coronavirus-maladie-anthropomorphe-4993235/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvre le site pixabay.com dans une nouvelle fenêtre ou un nouvel onglet"
              >
                pixabay.com{" "}
              </a>
              <img
                className="icon"
                src={"./src/assets/icon_link_window.png"}
                alt="Ouvre le site pixabay.com dans une nouvelle fenêtre ou un nouvel onglet"
              />
              .
            </li>
          </ul>
        </div>

        <div className="my_word">
          <p>
            <b>Mon petit mot</b>
          </p>
          <p>
            J'ai réalisé ce site pour faire une surprise à cette association
            amie qui fête ses 20 ans, j'espère que cela aura fonctionné.
          </p>
          <p>Il s'agit de mon 1er site réalisé toute seule, en utilisant les ressources à ma disposition.</p>
          <p>
            C'est également mes premiers pas avec le logiciel de traitement d'image
            GIMP.
          </p>
          <p>J'ai fait de mon mieux afin de rendre ce site le plus accessible possible. </p>

          <p>J'espère que vous avez apprécié votre navigation :)</p>
          <p>
            Et n'oubliez pas : "L'ingrédient indispensable à une bonne table,
            c'est vous !"
          </p>

          <div>
            <img
              className="coeur_credit"
              src={"./src/assets/coeur_credit.png"}
              alt="Coeur ombragé contenant deux cochons tenant un coeur entre leurs pattes, une cascade de dés et quatres meeples de couleurs bleu, jaune, rouge et vert."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Credits;
