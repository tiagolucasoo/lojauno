import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import BoxProduct from "../components/main/boxProduct";
import Main from "../components/main/main";
import Slide from "../components/main/slide";

import './css/index.css';

function Index() {
  return (
    <div className="Index">
        <title>Página Inicial</title>
        <Header/>
        <Slide/>

        <h2 className="descricaoBox">Produtos Mais Vendidos</h2>
        <div className="vendidos">
            <BoxProduct/>
        </div>

        <h2 className="descricaoBox" id="itens-promocionais">Produtos em Promoção</h2>
        <div className="promocao">
            <BoxProduct/>
        </div>

        <Footer/>

    </div>
    
  );
}

export default Index;