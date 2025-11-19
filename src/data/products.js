export const products = [
    { id: 1, img: '/product1.png', name: 'Uno Jogo de Cartas Original',
        price: 'R$ 20,99', tag: 'Tradicional' },
    { id: 2, img: '/product2.png', name: 'Uno Edição Esp. No Mercy',
        price: 'R$ 62,99', tag: 'Premium'},
    { id: 3, img: '/product3.png', name: 'Uno Jogo de Cartas Teams',
        price: 'R$ 34,99', tag: 'Tradicional' },
    { id: 4, img: '/product4.png', name: 'Uno Edição Esp. Harry Potter',
        price: 'R$ 39,99', tag: 'Limitado' },
    { id: 5, img: '/product5.png', name: 'Uno Edição Esp. Star Wars',
        price: 'R$ 39,99', tag: 'Limitado' },
    { id: 6, img: '/product6.png', name: 'Uno Jogo de Cartas Minimalista',
        price: 'R$ 49,90', tag: 'Deluxe' },
    { id: 7, img: '/product7.png', name: 'Uno Edição Esp. Jurassic World',
        price: 'R$ 39,99', tag: 'Limitado' },
    { id: 8, img: '/product8.png', name: 'Uno Jogo de Cartas Express',
        price: 'R$ 10,99', tag: 'Premium' },
    { id: 9, img: '/product9.png', name: 'Uno Edição Esp. Super Mario Bros',
        price: 'R$ 39,99', tag: 'Limitado' }
];

export function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}