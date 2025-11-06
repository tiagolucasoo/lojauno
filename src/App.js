import logo from './logo.svg';
import './App.css';
import Authentication from './components/header/authentication';
import Menu from './components/header/menu';
import Logo from './components/header/logo';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Menu/>
      <Authentication/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
