import "./Cabecalho.css";
import { useState } from "react";

const Cabecalho = ({ showProducts }) => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="cabecalho">
      <div className="contentCab">
        <h1>
          Burguer <small>Kenzie</small>
        </h1>
        <section className="search">
          <input
            placeholder="Digitar Pesquisa"
            type="text"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
          <button className="pesquisa" onClick={() => showProducts(search)}>
            Pesquisar
          </button>
        </section>
      </div>
    </div>
  );
};

export default Cabecalho;
