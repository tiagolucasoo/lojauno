import FreteProduct from "./freteProduct";
import ImgProduct from "./imgProduct";
import TitleProduct from "./titleProduct";

import './css/main.css';
import DescriptionProduct from "./descriptionProduct";

function Main() {
  return (
    <div className="Main">
        <main className="Main-container">
            <ImgProduct/>
            <div className="subcontainer">
              <TitleProduct/>
              <DescriptionProduct/>
              <FreteProduct/>
            </div>
        </main>
      
    </div>
  );
}

export default Main;
