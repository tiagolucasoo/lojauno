import './css/authentication.css'

function AlertaAuthentication() {
  return alert('Ops, essa função está em desenvolvimento!')
}

function Authentication() {
  return (
    <div className="Authentication">
      <header className="Authentication-header">
        <button className='login' title='Realizar Login' onClick={AlertaAuthentication}>Login</button>
        <button className='register' title='Criar Conta' onClick={AlertaAuthentication}>Criar Conta</button>
      </header>
    </div>
  );
}

export default Authentication;
