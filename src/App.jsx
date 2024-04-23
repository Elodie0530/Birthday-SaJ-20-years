import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Asso from "./pages/Association";
import NuitBlanche from "./pages/NuitBlanche";
import Partenaires from "./pages/Partenaires";
import Credits from "./pages/Credits";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/association" element={<Asso />} />
          <Route path="/nuitBlanche" element={<NuitBlanche />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
