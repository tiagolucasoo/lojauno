import { Pagination } from "swiper/modules";
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
        modules={[Pagination]}
        navigation={true}
        spaceBetween={15}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 15
          },
        }}
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