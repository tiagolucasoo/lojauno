import React, { useState, useEffect } from 'react';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import './css/boxProduct.css';
import { Link } from 'react-router-dom';
import { fetchProdutos, transformProductData } from '../../services/api';

function BoxProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const rawData = await fetchProdutos();
        const formattedData = rawData.map(transformProductData);
        setProducts(formattedData);
      } catch (error) {
        console.error("Erro ao carregar o BoxProduct:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="BoxProduct">
        <h2>Carregando destaques...</h2>
      </div>
    );
  }

  return (
    <div className="BoxProduct">
      <Swiper
        modules={[Pagination]}
        navigation={true}
        spaceBetween={15}
        loop={products.length > 5} 
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 5, spaceBetween: 15 },
        }}
      >
        
        {products.map((product) => (
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