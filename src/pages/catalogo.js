import Footer from "../components/footer/footer";
import Header from "../components/header/header";

import ListProduct from "../components/main/listProduct";
import './css/catalogo.css'

function Catalogo() {
  return (
    <div className="Catalogo">
        <title>Produtos</title>
        <Header/>
        <h1 className="tituloBox">Catálogo de Produtos</h1>
        <div className="containerList">
          <ListProduct/>
          <ListProduct/>
          <ListProduct/>
        </div>
        <Footer/>

    </div>
    
  );
}

export default Catalogo;