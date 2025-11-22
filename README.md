# 🛒 Loja UNO - Vitrine Virtual React
- Uma aplicação web desenvolvida para funcionar como uma vitrine virtual interativa de produtos da marca UNO com uma navegação fluida, visualização detalhada de itens e simulação de cálculo de frete.

## 📝 Criação do Projeto
- Desenvolvido como trabalho acadêmico para a disciplina de **Desenvolvimento Web**, este projeto aplica conceitos fundamentais de Front-end utilizando **React JS**. A aplicação foi construída com foco na Componentização e Responsividade.

## ✨ Funcionalidades
### Navegação:
- **Carrosséis:** Implementação da biblioteca Swiper para exibir produtos em destaque, categorias de "Mais Vendidos" e "Promoções" na página inicial.
- **Catálogo:** Página dedicada com a listagem em grade dos produtos disponíveis.
- **Roteamento:** Navegação instantânea utilizando react-router-dom, sem recarregamento da página.
### Produtos
- **Card:** Visualização individual (/produto/:id) contendo detalhes do produto.
- **Cálculo de Frete Lógico:** Módulo integrado à API ViaCEP que consulta os dados do endereço (Cidade, UF, DDD) a partir do CEP informado.
    - Como a API retorna apenas a localização, o **cálculo de valores e prazos** é realizado por uma lógica condicional implementada no front-end:

        1. _Verifica se o CEP é igual ao da origem;_
        2. _Se não, verifica se é a mesma cidade;_
        3. _Se não, verifica se é o mesmo DDD (Região);_
        4. _Se não, verifica se é o mesmo Estado (UF);_
        5. _Caso contrário, aplica uma taxa fixa para outras localidades._


## 🛠️ Tecnologias Utilizadas
- `Linguagem:` React Js
- `Estilização:` CSS
- `API:` ViaCEP

## 📂 Estrutura do Projeto
- 📂 public              
- 📂 src
    -  `App.js`           
    -  `index.js`         
    -  📂 components  
        -  📂 header
        -  📂 footer
        -  📂 main
    - 📂 data
        - `products.js`
    - 📂 pages
        - `catalogo.js`
        - `contact.js`
        - `index.js`
        - `products.js`
        - `vazio.js`

## 🚀 Como Executar
### Pré-requisitos
- É necessário ter o Node.js instalado.
