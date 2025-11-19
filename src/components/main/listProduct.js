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
            spaceBetween: 30
          },
        }}
      >
        
        {products.map((product) => (
          // O .map() cria um <SwiperSlide> para CADA 'product' no array 'products'
          <SwiperSlide key={product.id}>
            <Link to={`/produto/${product.id}`} className="product-link">
                <article className="boxList">
                <img src={product.img} className="produtoIndex" alt={product.name} />
                <div className="codigoTag">
                  <h2 className="idProduto">Cód. {product.id}</h2>
                  <h2 className="tagProduto">{product.tag}</h2>
                </div>
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