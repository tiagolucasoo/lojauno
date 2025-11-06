import Authentication from './authentication';
import Menu from './menu';
import Logo from './logo';

import './css/header.css';

function Header() {
  return (
    <div className="header">
        <header className="header-container">
            <Logo/>
            <Menu/>
            <Authentication/>
        </header>
      
    </div>
  );
}

export default Header;
