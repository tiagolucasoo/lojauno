import LogoMono from "./logoMono";

import './css/footer.css'
import RedesSociais from "./redesSociais";
import MenuRodape from "./menuRodape";
import Development from "./devlopment";

function Footer() {
  return (
    <div className="Footer">
      <footer className="Footer-container">
        <LogoMono/>
        <RedesSociais/>
        <MenuRodape/>
      </footer>

      <footer>
        <Development/>
      </footer>

    </div>
  );
}

export default Footer;
