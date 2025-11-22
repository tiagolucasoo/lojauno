import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Main from "../components/main/main";

import './css/contact.css';
function AlertaAuthentication() {
  return alert('Ops, essa função está em desenvolvimento!')
}

function Contact() {
  return (
    <div className="contactContainer">
        <title>Contato</title>
        <Header/>
        <div className="contact">
            <h2>Contato</h2>
            
            <div className="boxPessoal">
              <section className="boxNome">
                <label>Nome:</label>
                <input className="inputNome"></input>
              </section>

              <section className="boxNascimento">
              <label>Data de Nascimento:</label>
              <input className="inputNascimento" type="date"></input>
              </section>
            </div>

            <section className="boxEmail">
            <label>Email:</label>
            <input className="inputEmail"></input>
            </section>


            <section className="boxMotivo">
            <label>Motivo do Contato</label>
            <textarea className="inputMotivo"></textarea>
            </section>

            <button className="enviarForm" onClick={AlertaAuthentication}>Enviar</button>
        </div>

        <Footer/>

    </div>
    
  );
}

export default Contact;