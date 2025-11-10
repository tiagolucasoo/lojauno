import './css/menu.css';

function Menu() {
    return (
      <div className="Menu">
        <header className="Menu-header">
            <ul>
                <li className="red"><a href="/" className="red">Inicio</a></li>
                <li className="blue"><a href="/categorias" className="blue">Categorias</a></li>
                <li className="green"><a href="/produtos" className="green">Produtos</a></li>
                <li className="yellow"><a href="/contato" className="yellow">Contato</a></li>
            </ul>
        </header>
      </div>
    );
  }
  
  export default Menu;
  