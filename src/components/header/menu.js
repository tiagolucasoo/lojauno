import './css/menu.css';

function Menu() {
    return (
      <div className="Menu">
        <header className="Menu-header">
            <ul>
                <li className="blue"><a href="/" className="blue">Inicio</a></li>
                <li className="green"><a href="/catalogo" className="green">Produtos</a></li>
                <li className="yellow"><a href="/contato" className="yellow">Contato</a></li>
            </ul>
        </header>
      </div>
    );
  }
  
  export default Menu;
  