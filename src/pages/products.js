import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Main from "../components/main/main";

import './css/product.css';

function Product() {
  return (
    <div className="containerProdutos">
        <title>Produtos</title>
        <Header/>
        <Main/>
        <Footer/>

    </div>
    
  );
}

export default Product;