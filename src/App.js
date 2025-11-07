import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>

        <Main/>

        <Footer/>
      </header>
    </div>
    
  );
}

export default App;
