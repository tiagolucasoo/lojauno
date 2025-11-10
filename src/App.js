import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './pages';
import Category from './pages/categorys';
import Product from './pages/products';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <title>Uno</title>
      <Routes>
        <Route path='/' element= {<Index/>}/>
        <Route path='/categorias' element = {<Category/>}/>
        <Route path='/produtos' element = {<Product/>}/>
        <Route path='/contato' element = {<Contact/>}/>
        <Route path='*' element={ <h2>Página não encontrada</h2>}/>
      </Routes>
    </div>
    
  );
}

export default App;
