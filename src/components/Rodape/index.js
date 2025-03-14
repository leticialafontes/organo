import "./style.css";

const Rodape = () => {
  return (
    <div className="rodape">
      <div className="app">
        <a href="#">
          <img src="/img/fb.png" alt="icone do facebook" />
        </a>
        <a href="#">
          <img src="/img/ig.png" alt="icone do instagram" />
        </a>
        <a href="#">
          <img src="/img/tw.png" alt="icone do x" />
        </a>
      </div>
      <div className="logo">
        <img src="/img/logo.png" alt="logo do Organo" />
      </div>
      <div className="frase">
        <a href="https://github.com/leticialafontes" className="link">
          {"Feito por Letícia Fontes"}
        </a>
      </div>
    </div>
  );
};

export default Rodape;
