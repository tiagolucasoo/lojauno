import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

import './css/boxProduct.css';

import { Link } from 'react-router-dom';
import { products } from "../../data/products";

function BoxProduct() {
  return (
    <div className="BoxProduct">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={30}
        loop={true}
        slidesPerView={4} 
      >
        
        {products.map((product) => (
          // O .map() cria um <SwiperSlide> para CADA 'product' no array 'products'
          <SwiperSlide key={product.id}>
            <Link to={`/produto/${product.id}`} className="product-link">
                <article>
                <img src={product.img} className="produtoIndex" alt={product.name} />
                <h2 className="nomeProduto">{product.name}</h2>
                <h3 className="precoProduto">{product.price}</h3>
                </article>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}

export default BoxProduct;