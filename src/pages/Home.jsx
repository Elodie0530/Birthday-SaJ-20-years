import "./Home.css";
// import { useState } from "react";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="home">

        <h1>20 ans</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          accusantium, amet dolorum nihil itaque iure error deserunt et! Eius
          harum id commodi dignissimos dolorem tempore nulla vel fuga accusamus
          dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque vel deserunt, debitis sequi doloribus eius harum assumenda modi
          eligendi ut similique minus sit, dolores natus officiis, eaque
          mollitia recusandae dolor. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam doloribus magnam dolor nulla exercitationem
          eveniet reprehenderit fugiat nihil temporibus deserunt. Repellendus
          fugit sequi perspiciatis mollitia. Labore perspiciatis impedit
          voluptas quae. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ipsam, aut nesciunt. At quisquam minus possimus voluptate a
          magnam quo nemo quae laborum, consequuntur amet ipsa porro atque,
          nesciunt asperiores veniam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo, illo. Praesentium atque voluptas quo
          deleniti natus. Blanditiis maxime magni expedita deleniti in, soluta
          inventore nam qui dolorum perspiciatis mol Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptates error enim assumenda
          voluptatum nisi, quod perferendis architecto tempora voluptas animi
          dignissimos fuga eveniet natus ullam dolores, cum quasi similique
          omnis!
          
        </div>

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

        {/* <div className="count">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>div compteur</p>
        </div> */}

        <div>hello world</div>
      </div>
    </>
  );
}

export default Home;
