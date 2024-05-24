import "./Association.css";

function Asso() {
  return (
    <>
      <div className="asso">
        <h1>Présentation de l'association sur ces 20 années</h1>

        <div className="intoduction">
          <div className="text_intro">
            <p>
              Depuis le 17 septembre 2004, date de sa création à l'initiative
              d'un groupe d'amis,<br></br> La Sauce aux Jeux est une association
              Strasbourgeoise à but non lucratif (loi de 1908)<br></br> qui
              s'est donnée comme but la promotion du jeu et l'imaginaire sous
              toutes ses formes.{" "}
            </p>{" "}
          </div>

          <div className="livre20_droite">
            <img
              className="livre"
              src={"./src/assets/droite_cochon_livre20.png"}
              alt="Cochon orienté vers la gauche lisant un livre, sur la couverture du côté gauche il y a deux dés 6, sur la tranche est écrit 20 ans et du côté droit il y a un dé 20 de jdr"
            />
          </div>

          <p className="fin_intro">Principalement :</p>
        </div>

        <div className="actualy">
          <ul>
            <li>
              <p>Au travers du jeu de rôle :</p>
              <p>
                De nombreuses tables sont proposées tout au long de l'année,
                dans autant d'univers qu'il y a de maîtres du jeu (MJ).
              </p>
              <p>
                Au format one-shot, (c'est-à-dire, que ce n'est pas une
                campagne), avec des scénarios courts de 5 heures maximum.
              </p>
              <p>
                Ainsi qu'un rendez-vous mensuel pour discuter entre rôlistes et
                accompagner les débutants.
              </p>
            </li>

            <li>
              <p>Au travers du jeu de plateau :</p>
              <p>
                Avec des après-midis jeux deux fois par mois, où des animateurs
                vous expliquent les règles.
              </p>
              <p>
                Parfois, ils vous proposent des jeux "plus gros" de type
                "Monster Games", dont la partie peut durer très facilement sur
                toute l'après-midi.
              </p>
              <p>
                Ainsi qu'un rendez-vous mensuel dans un bar de la ville pour
                faire connaître et découvrir le jeu au plus grand nombre.
              </p>
            </li>
          </ul>
        </div>

        <div className="pionnier">
          <div className="nappe">
            <img
              className="nappe_oval"
              src={"./src/assets/nappe.png"}
              alt="Nappe quadrillée rose et blanc"
            />

            <div className="text_pionnier">
              <p>
                La Sauce aux Jeux est pionnière dans la promotion du jeu de rôle
                et du jeu de plateau pour tous en Alsace.
              </p>{" "}
              <p>
                Elle participe régulièrement à des conventions, des festivals de
                jeu et accompagne d'autres associations et partenaires pour les
                aider à monter leurs projets.
              </p>{" "}
              <p>
                Elle propose de nombreuses parties de jeux de rôles et de
                plateaux et organise des évènements gratuits afin de permettre
                l'accès à tous sans aucune distinction.
              </p>
              <p>
                Tout cela est possible que grâce à l'engagement des membres de
                l'association.
              </p>
            </div>
          </div>
        </div>

        <div>
          <figure className="old_logo">
            <figcaption>Ancien logo</figcaption>

            <img
              src={"./src/assets/ancien_logo.png"}
              alt="Ancien logo de la Sauce aux Jeux, représentant un cochon couché sur un échiquier tirant la langue, avec devant lui trois cartes à jouer ainsi qu'une console de jeu"
            />
          </figure>
        </div>

        <div className="old_time">
          <p className="title_old">À une époque, vous aviez aussi proposé :</p>
          <ul>
            <li>
              <p>Du jeu de rôle grandeur nature (GN)</p>{" "}
              <p>
                C'est une forme de jeu de rôle dans laquelle les joueurs
                incarnent physiquement un personnage dans un univers fictif.
              </p>
              <p>
                Ils interprètent leurs personnages par des interactions et des
                actions physiques, d'après des règles de jeu et l'arbitrage
                d'organisateurs.
              </p>
            </li>

            <li>
              <p>Des soirées enquêtes</p>{" "}
              <p>
                Ce qui permet le temps d'une soirée de vivre avec un maximum de
                réalisme une aventure à résoudre.{" "}
              </p>
              <p>
                L'histoire est écrite d'avance et jouée par les participants qui
                y incarnent un personnage connaissant uniquement les
                informations qui le concerne, et pas l'histoire qu'ils vont
                faire.
              </p>
            </li>

            <li>
              <p>Du Trollball</p>{" "}
              <p>
                C'est une activité ludique et sportive pratiquée dans le milieu
                médiéval-fantastique du jeu de rôle grandeur nature.
              </p>
              <p>
                Il mélange de l'escrime soft (avec des armes en mousse et en
                latex), du jeu de balle en équipes et du jeu de rôle grandeur
                nature.
              </p>
            </li>
          </ul>
        </div>

        <div className="you">
          <div className="text_you">
            <p>
              Comme dans toute structure où il y a des humains, en 20 années de
              fonctionnement, vous avez vu passer beaucoup de gens, certains
              sont restés, d'autres du fait des aléas de la vie n'ont pas pu.
            </p>{" "}
            <p>
              Vous avez sûrement eu des désaccords, des mécontentements, des
              points de friction, mais finalement vous êtes arrivés à dépasser
              tout cela pour aller de l'avant en mettant l'intérêt général en
              priorité.
            </p>{" "}
            <p>
              Vous avez su fédérer une communauté inclusive et bienveillante au
              cours de ces années, en restant à l'écoute et prenant en compte
              les retours qui vous sont faits.
            </p>{" "}
            <p>
              Et c'est aussi pour cela, et grâce à vous que les membres de
              l'association s'impliquent.
            </p>
          </div>

          <div className="livre20_gauche">
            <img
              className="livre"
              src={"./src/assets/gauche_cochon_livre20.png"}
              alt="Cochon orienté vers la droite lisant un livre, sur la couverture du côté gauche il y a deux dés 6, sur la tranche est écrit 20 ans et du côté droit il y a un dé 20 de jdr"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Asso;
