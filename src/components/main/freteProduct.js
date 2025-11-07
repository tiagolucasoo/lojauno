import './css/freteProduct.css';

function FreteProduct() {
  return (
    <div className="FreteProduct">
      <main className="FreteProduct-main">
        <h3>Calcular Frete.:</h3>
        <input placeholder='Digite aqui o cep'></input>
        <button className="frete">Consultar</button>
      </main>
    </div>
  );
}

export default FreteProduct;
