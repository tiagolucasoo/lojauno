import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './pages';
import Product from './pages/products';
import Contact from './pages/contact';
import Catalogo from './pages/catalogo';
import Vazio from './pages/vazio';

function App() {
  return (
    <div className="App">
      <title>Uno</title>
      <Routes>
        <Route path='/' element= {<Index/>}/>
        <Route path='/catalogo' element = {<Catalogo/>}/>
        <Route path='/produto/:id' element = {<Product/>}/>
        <Route path='/contato' element = {<Contact/>}/>
        <Route path='*' element={<Vazio/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
