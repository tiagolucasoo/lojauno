import './css/freteProduct.css';
import { useState } from 'react';

function FreteProduct() {
  const [cep, setCep] = useState('')
  const [localizacao, setLocalizacao] = useState(null)
  const [erro, setErro] = useState(null)
  const [loading, setLoading] = useState(false)
  const [custo, setCusto] = useState(null)

  const consultarValores = (cepDestino, dados) => {
    const ORIGEM = {
      cep: '86070220',
      cidade: 'Londrina',
      ddd: '43',
      uf: 'PR'
    }
    const cepDestino2 = cepDestino.replace(/\D/g, '');

    if (cepDestino2 === ORIGEM.cep) {
      return 'Gratuito'
    }

    if (dados.cidade === ORIGEM.cidade) {
      return 'R$5,00'
    }

    if (dados.ddd === ORIGEM.ddd) {
      return 'R$7,00'
    }

    if (dados.uf === ORIGEM.uf) {
      return 'R$10,00'
    }

    return 'R$15,00'
  }

  const consultarFrete = async () => {
    setLoading(true)
    setLocalizacao(null)
    setErro(null)
    setCusto(null)
    /* const url = `http://localhost:3001/api/cep/${cep}` */ 
    const url = `/api/cep/${cep}`

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro: ${response.status} ${response.statusText}`)
      }

      const data = await response.json();
      const custoFrete = consultarValores(cep, data)

      setLocalizacao(`${data.bairro} - ${data.cidade}, ${data.uf}`)
      setCusto(custoFrete)}

    catch (error) {
      setErro(error.message)} 

    finally {
      setLoading(false)}
  }

  return (
    <div className="FreteProduct">
      <main className="FreteProduct-main">

        <h3>Calcular Frete.:</h3>
        <div className="Subcontainer">
          <input
          placeholder='Digite aqui o cep'
          value ={cep}
          onChange={(e) => setCep(e.target.value)}/>

          <button className="frete"
          onClick={consultarFrete}>Consultar</button>
        </div>

        <div className="InfoFrete">
          <div className="Fretelocalizacao">
            <strong>Local</strong>
            <p className='TextLocalizacao'>
              {loading && 'Consultando'}
              {erro && <span style={{color: 'red'}}>{erro}</span>}
              {localizacao && localizacao}
              {!loading && !erro && !localizacao && ''}
            </p>
          </div>

          <div className="Fretecusto">
            <strong>Custo</strong>
            <p className='TextCusto'>
              {loading && '---'}
              {erro && '---'}
              {custo && custo}
              {!loading && !erro && custo === null && ''}
            </p>
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
