import FreteProduct from "./freteProduct";
import ImgProduct from "./imgProduct";
import TitleProduct from "./titleProduct";

import './css/main.css';
import DescriptionProduct from "./descriptionProduct";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";

function Main() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="Main">
        <main classname="Main-container">
          <h2>Oops! Produto não encontrado!</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="Main">
        <main className="Main-container">
            <ImgProduct image={product.img} alt={product.name}/>
            <div className="subcontainer">
              <TitleProduct name={product.name} price={product.price}/>
              <DescriptionProduct description={product.description}/>
              <FreteProduct/>
            </div>
        </main>
      
    </div>
  );
}

export default Main;
