import Footer from "../components/footer/footer";
import Header from "../components/header/header";

import './css/contact.css';

function Vazio() {
  return (
    <div className="contactContainer">
        <title>Contato</title>
        <Header/>
        <div className="contact">
            <h2>Ops, essa página não existe</h2>
        </div>

        <Footer/>

    </div>
    
  );
}

export default Vazio;