import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Slide from "../components/main/slide";

import './css/index.css';

function Index() {
  return (
    <div className="Index">
        <title>Página Inicial</title>
        <Header/>
        <Slide/>

        <h2>Produtos mais vendidos</h2>
        <div className="lancamentos">
            <article>
                <img src="/product1.png" className="produtoIndex"></img>
                <h2>Uno - Original</h2>
                <strong>R$ 10,99</strong>
            </article>
            <article>
                <img src="/product2.png" className="produtoIndex"></img>
                <h2>Uno No Mercy</h2>
                <strong>R$ 10,99</strong>
            </article>
            <article>
                <img src="/product3.png" className="produtoIndex"></img>
                <h2>Uno Teams</h2>
                <strong>R$ 10,99</strong>
            </article>
            <article>
                <img src="/product4.png" className="produtoIndex"></img>
                <h2>Uno Especial Harry Potter</h2>
                <strong>R$ 10,99</strong>
            </article>
            <article>
                <img src="/product5.png" className="produtoIndex"></img>
                <h2>Uno Especial Star Wars</h2>
                <strong>R$ 10,99</strong>
            </article>
        </div>

        <img src="logoMattel.png"></img>
        <h2>Inscreva-se para receber as últimas notícias da Mattel</h2>
        <input type="email"></input>
        <button>Cadastrar</button>
        <p>Ao enviar meu e-mail, confirmo que desejo receber e-mails da Mattel, de outras marcas e programas.</p>
        <Footer/>

    </div>
    
  );
}

export default Index;