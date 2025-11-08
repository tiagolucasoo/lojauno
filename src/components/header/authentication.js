import './css/authentication.css'

function Authentication() {
  return (
    <div className="Authentication">
      <header className="Authentication-header">
        <button className='mode' title='Modo Claro'>
          <img className='icon' src='/icoSun.png'/>
        </button>
        <button className='login' title='Realizar Login'>Login</button>
        <button className='register' title='Criar Conta'>Criar Conta</button>
      </header>
    </div>
  );
}

export default Authentication;
