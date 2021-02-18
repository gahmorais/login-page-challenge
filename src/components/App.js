import "../App.css";
import FormularioLogin from "./FormularioLogin";
import "../App.css";
import imagemLogin from "../images/imagem-login.jpg";
import "react-materialize";

function App() {
  return (
    <>
      <img src={imagemLogin} alt="" />
      <div className="App container">
        <div className="col s12 m12 l4 xl4">
          <FormularioLogin />
          <p>Esqueceu seu login ou senha?</p>
          <p>
            Clique <a href="#">Aqui</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
