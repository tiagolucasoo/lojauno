import './css/freteProduct.css';
import { use, useState } from 'react';

function FreteProduct() {
  const [cep, setCep] = useState('')
  const [localizacao, setLocalizacao] = useState(null)
  const [erro, setErro] = useState(null)
  const [loading, setLoading] = useState(false)
  const [custo, setCusto] = useState(null)
  const [prazo, setPrazo] = useState(null)

  const [titleLocal, setTitleLocal] = useState(null)
  const [titleCusto, setTitleCusto] = useState(null)
  const [titlePrazo, setTitlePrazo] = useState(null)

  const consultarValores = (cepDestino, dados) => {
    const ORIGEM = {
      cep: '86070220',
      cidade: 'Londrina',
      ddd: '43',
      uf: 'PR'
    }
    const cepDestino2 = cepDestino.replace(/\D/g, '');

    if (cepDestino2 === ORIGEM.cep) {
      return { custo: 'Gratuito', prazo: 'Até 5 horas'}
    }

    if (dados.cidade === ORIGEM.cidade) {
      return { custo: 'R$5,00', prazo: '1 dia útil' }
    }

    if (dados.ddd === ORIGEM.ddd) {
      return { custo: 'R$7,00', prazo: '2-3 dias úteis' }
    }

    if (dados.uf === ORIGEM.uf) {
      return { custo: 'R$10,00', prazo: '3-5 dias úteis' }
    }

    return { custo: 'R$15,00', prazo: '5-10 dias úteis' }
  }

  const atualizarCep = (e) => {
    const novoCep = e.target.value
    setCep(novoCep)

    if (novoCep === '') {
      setLocalizacao(null)
      setCusto(null)
      setPrazo(null)
      setErro(null)

      setTitleCusto(null)
      setTitleLocal(null)
      setTitlePrazo(null)
    }
  }

  const consultarFrete = async () => {
    setLoading(true)
    setLocalizacao(null)
    setErro(null)
    setCusto(null)
    setPrazo(null)

    setTitleCusto(null)
    setTitleLocal(null)
    setTitlePrazo(null)
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro: ${response.status} ${response.statusText}`)
      }

      const data = await response.json();
      const frete = consultarValores(cep, data)
      
      setTitleCusto(`Custo`)
      setTitleLocal(`Local`)
      setTitlePrazo(`Prazo`)

      if (data.bairro === '') {
        setLocalizacao(`${data.localidade}, ${data.uf}`)
      }
      if (data.bairro) {
        setLocalizacao(`${data.bairro} - ${data.localidade}, ${data.uf}`)
      }

      setCusto(frete.custo)
      setPrazo(frete.prazo)}

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
          onChange={atualizarCep}/>

          <button className="frete"
          onClick={consultarFrete}>Consultar</button>
        </div>

        <div className="InfoFrete">
          <div className="Fretelocalizacao">
            <strong>
              {loading && ''}
              {titleLocal && titleLocal}
            </strong>
            <p className='TextLocalizacao'>
              {loading && 'Consultando'}
              {erro && <span style={{color: 'red'}}>{erro}</span>}
              {localizacao && localizacao}
              {!loading && !erro && !localizacao && ''}
            </p>
          </div>

          <div className="Fretecusto">
            <strong>
              {loading && ''}
              {titleCusto && titleCusto}
            </strong>
            <p className='TextCusto'>
              {loading && ''}
              {erro && ''}
              {custo && custo}
              {!loading && !erro && custo === null && ''}
            </p>
          </div>

          <div className="Freteprazo">
            <strong>
              {loading && ''}
              {titlePrazo && titlePrazo}
            </strong>
            <p className='TextPrazo'>
              {loading && ''}
              {erro && ''}
              {prazo && prazo}
              {!loading && !prazo && prazo === null && ''}
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default FreteProduct;
