import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

import './css/listProduct.css';

import { Link } from 'react-router-dom';
import { products } from "../../data/products";

function ListProduct() {
  return (
    <div className="BoxProduct">
      <Swiper
        modules={[Navigation]}
        navigation={false}
        spaceBetween={30}
        loop={true}
        slidesPerView={5} 
      >
        
        {products.map((product) => (
          // O .map() cria um <SwiperSlide> para CADA 'product' no array 'products'
          <SwiperSlide key={product.id}>
            <Link to={`/produto/${product.id}`} className="product-link">
                <article className="boxList">
                <img src={product.img} className="produtoIndex" alt={product.name} />
                <h2 className="idProduto">Código {product.id}</h2>
                <h2 className="nomeProduto2">{product.name}</h2>
                </article>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}

export default ListProduct;