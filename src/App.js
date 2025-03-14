import { useState } from "react";
import "./App.css";

import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "var(--programacao)",
      corSecundaria: "var(--fundo-programacao)",
    },
    {
      nome: "Front-end",
      corPrimaria: "var(--front)",
      corSecundaria: "var(--fundo-front)",
    },
    {
      nome: "Data Science",
      corPrimaria: "var(--data)",
      corSecundaria: "var(--fundo-data)",
    },
    {
      nome: "Devops",
      corPrimaria: "var(--devops)",
      corSecundaria: "var(--fundo-devops)",
    },
    {
      nome: "UX e Design",
      corPrimaria: "var(--ux)",
      corSecundaria: "var(--fundo-ux)",
    },
    {
      nome: "Mobile",
      corPrimaria: "var(--fundo-mobile)",
      corSecundaria: "var(--mobile)",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "var(--gestao)",
      corSecundaria: "var(--fundo-gestao)",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <>
      <Banner />
      <div className="form_align">
        <Formulario
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={(colaborador) =>
            aoNovoColaboradorAdicionado(colaborador)
          }
        />
      </div>
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </>
  );
}

export default App;
