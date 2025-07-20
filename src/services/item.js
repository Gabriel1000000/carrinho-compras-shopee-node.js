/**
 * Cria um item com nome, preço e quantidade, e fornece um método para calcular o subtotal.
 * 
 * @param {string} name - Nome do produto
 * @param {number} price - Preço unitário do produto
 * @param {number} quantity - Quantidade do produto
 * @returns {Object} item
 */
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity, // método para calcular o total do item
  };
}

export default createItem;
