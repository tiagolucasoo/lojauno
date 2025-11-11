import './css/imgProduct.css';

function ImgProduct({image, alt}) {
  return (
    <div className="ImgProduct">
      <main className="ImgProduct-main">
        <img src={image} alt={alt}></img>
      </main>
    </div>
  );
}

export default ImgProduct;
