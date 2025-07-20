/**
 * Adiciona um item ao carrinho.
 */
async function addItem(userCart, item) {
  userCart.push(item);
}

/**
 * Calcula o total do carrinho somando o subtotal de cada item.
 */
async function calculeteTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total carrinho: R$ ${result.toFixed(2)}`);
}

/**
 * Remove um item do carrinho com base no nome (remove totalmente).
 */
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

/**
 * Remove uma unidade do item. Se for a última, remove o item completamente.
 */
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    console.log("Item não encontrado!");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

/**
 * Exibe o conteúdo atual do carrinho.
 */
async function dysplayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `Index: ${index + 1}. Produto: ${item.name} - R$ ${item.price} | ${item.quantity}X | Total: R$ ${item.subtotal().toFixed(2)}`
    );
  });
}

export {
  addItem,
  calculeteTotal,
  deleteItem,
  removeItem,
  dysplayCart,
};
