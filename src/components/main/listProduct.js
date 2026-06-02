import React, { useState, useEffect } from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import './css/listProduct.css';
import { Link } from 'react-router-dom';

import { fetchProdutos, transformProductData } from '../../services/api'; 

function ListProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarCards() {
      try {
        const dadosBrutos = await fetchProdutos();
        const dadosFormatados = dadosBrutos.map(transformProductData);
        setProducts(dadosFormatados);
      } catch (error) {
        console.error("Erro ao renderizar os produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarCards();
  }, []);

  if (loading) {
    return (
      <div className="BoxProduct">
        <h2>Carregando catálogo de cards...</h2>
      </div>
    );
  }

  return (
    <div className="BoxProduct">
      <Swiper
        modules={[Navigation]}
        navigation={false}
        spaceBetween={30}
        loop={products.length > 4} 
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/produto/${product.id}`} className="product-link">
                <article className="boxList">
                <img src={product.img} className="produtoIndex" alt={product.name} />
                <div className="codigoTag">
                  <h2 className="idProduto">Cód. {product.id}</h2>
                  <h2 className="tagProduto">{product.category}</h2> 
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