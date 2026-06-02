const API_URL = process.env.api || 'http://localhost:5000';

export async function fetchProdutos() {
  try {
    const response = await fetch(`${API_URL}/api/Produtos`);
    if (!response.ok) throw new Error('Falha ao buscar produtos');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

export async function fetchProdutoById(id) {
  try {
    const response = await fetch(`${API_URL}/api/Produtos/${id}`);
    if (!response.ok) throw new Error('Falha ao buscar produto');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return null;
  }
}

export async function fetchCategorias() {
  try {
    const response = await fetch(`${API_URL}/api/Categorias`);
    if (!response.ok) throw new Error('Falha ao buscar categorias');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
}

export function transformProductData(apiProduct) {
  return {
    id: apiProduct.id,
    name: apiProduct.nome,
    price: `R$ ${apiProduct.valor.toFixed(2)}`,
    img: apiProduct.imagem,
    description: apiProduct.descricao,
    category: apiProduct.nomeCategoria,
    stock: apiProduct.saldoEstoque,
  };
}
