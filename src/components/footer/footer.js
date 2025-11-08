import LogoMono from "./logoMono";

import './css/footer.css'
import RedesSociais from "./redesSociais";
import Mapa from "./mapa";
import Development from "./devlopment";
import MarcasPrincipais from "./marcarPrincipais";

function Footer() {
  return (
    <div className="Footer">
      <footer className="Footer-container">
        <LogoMono/>
        <MarcasPrincipais/>
        <RedesSociais/>
        <Mapa/>
      </footer>

      <footer className="Dev-container">
        <Development/>
      </footer>

    </div>
  );
}

export default Footer;
