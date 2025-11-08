import './css/freteProduct.css';

function FreteProduct() {
  return (
    <div className="FreteProduct">
      <main className="FreteProduct-main">
        <h3>Calcular Frete.:</h3>

        <div className="Subcontainer">
          <input placeholder='Digite aqui o cep'></input>
          <button className="frete">Consultar</button>
          <button className="limpar">Limpar</button>
        </div>

        <div className="InfoFrete">
          <div className="Freteestado">
            <strong>UF</strong>
            <p className='TextEstado'>PR</p>
          </div>

          <div className="Fretecidade">
            <strong>Cidade</strong>
            <p className='TextCidade'>Londrina</p>
          </div>

          <div className="Fretebairro">
            <strong>Bairro</strong>
            <p className='TextBairro'>Jardim do Sol</p>
          </div>
          <div className="Fretecusto">
            <strong>Custo</strong>
            <p className='TextCusto'>R$10,00</p>
          </div>

          <div className="Freteprazo">
            <strong>Prazo</strong>
            <p className='TextPrazo'>3 à 5 dias úteis</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FreteProduct;
