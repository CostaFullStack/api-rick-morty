import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { SelectComponent } from "./Select";
import { especiesOp, generosOp, statusOp } from "./utils/opcoes";
import { CardComponent } from "./Card";

function App() {
  const [personagens, setPersonagens] = useState();
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [especie, setEspecie] = useState("");
  const [genero, setGenero] = useState("");

  async function BuscarOuFiltrar(url) {
    setPersonagens(null);
    const resposta = await fetch(url);
    const dados = await resposta.json();
    setPersonagens(dados.results);
  }

  useEffect(() => {
    nome || status || especie || genero
      ? BuscarOuFiltrar(
          `https://rickandmortyapi.com/api/character?name=${nome}&species=${especie}&gender=${genero}&status=${status}`
        )
      : BuscarOuFiltrar("https://rickandmortyapi.com/api/character");
  }, [nome, status, especie, genero]);
  return (
    <>
      <div className="img-rick-morty">
      <img
        src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
        alt="Imagem logo"
        className="img_logo"
        
      />

      </div>
      <div id="input-div">
      <input
        type="text"
        name="pesquisar"
        id="pesquisar"
        onChange={(element) => setNome(element.target.value)}
      />

      </div>
      <div id="div-select">

      <SelectComponent
        opcoes={generosOp}
        onChange={(element) => setGenero(element.target.value)}
      />

      <SelectComponent
        opcoes={statusOp}
        onChange={(element) => setStatus(element.target.value)}
      />

      <SelectComponent
        opcoes={especiesOp}
        onChange={(element) => setEspecie(element.target.value)}
      />
      </div>
      <section className="container">
        {personagens &&
          personagens.map((element) => <CardComponent element={element} />)}
      </section>
    </>
  );
}

export default App;
