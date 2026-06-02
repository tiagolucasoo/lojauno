import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FreteProduct from "./freteProduct";
import ImgProduct from "./imgProduct";
import TitleProduct from "./titleProduct";
import DescriptionProduct from "./descriptionProduct";
import './css/main.css';

import { fetchProdutoById, transformProductData } from "../../services/api";

function Main() {
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {

        setLoading(true); 
        
        const rawData = await fetchProdutoById(id);
        
        if (rawData) {
          const formattedData = transformProductData(rawData);
          setProduct(formattedData);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="Main">
        <main className="Main-container">
          <h2>Carregando detalhes do produto...</h2>
        </main>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="Main">
        <main className="Main-container">
          <h2>Oops! Produto não encontrado!</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="Main">
        <main className="Main-container">
            <ImgProduct image={product.img} alt={product.name}/>
            <div className="subcontainer">
              <TitleProduct name={product.name} price={product.price}/>
              <DescriptionProduct description={product.description}/>
              <FreteProduct/>
            </div>
        </main>
    </div>
  );
}

export default Main;