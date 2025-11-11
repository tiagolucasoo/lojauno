import './css/titleProduct.css';

function TitleProduct({name, price}) {
  return (
    <div className="ImgProduct">
      <main className="TitleProduct-main">
        <h1 className='tituloProduto'>{name}</h1>
        <h1 className='custoProduto'>{price}</h1>
      </main>
    </div>
  );
}

export default TitleProduct;
