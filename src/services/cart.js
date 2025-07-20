/**
 * Adiciona um item ao carrinho.
 * 
 * @param {Array} userCart - Array que representa o carrinho do usuário
 * @param {Object} item - Objeto do item a ser adicionado
 */
async function addItem(userCart, item) {
    
    // Adiciona o item ao final do array usando o método push
    userCart.push(item);
}

/**
 * Calcula o total do carrinho somando o subtotal de cada item.
 * 
 * @param {Array} userCart - Carrinho atual do usuário
 */
async function calculeteTotal(userCart) {
    
    // Usa reduce para acumular o subtotal de todos os itens do carrinho
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    // Exibe o valor total formatado com duas casas decimais
    console.log(`Total carrinho: R$ ${result.toFixed(2)}`);
}

/**
 * Remove um item do carrinho com base no nome (remove completamente).
 * 
 * @param {Array} userCart - Carrinho do usuário
 * @param {string} name - Nome do item a ser removido
 */
async function deleteItem(userCart, name) {
    
    // Procura o índice do item com o nome correspondente
    const index = userCart.findIndex((item) => item.name === name);
    
    // Se encontrar, remove o item com splice (remove 1 elemento a partir do índice)
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

/**
 * Remove uma unidade do item. Se for a última, remove o item por completo.
 * 
 * @param {Array} userCart - Carrinho do usuário
 * @param {Object} item - Item que será modificado ou removido
 */
async function removeItem(userCart, item) {
    
    // Encontra o índice do item pelo nome
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    // Se o item não for encontrado, exibe mensagem e encerra a função
    if (indexFound === -1) {
        console.log("Item não encontrado!");
        return;
    }

    // Se a quantidade for maior que 1, apenas reduz em 1
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    // Se a quantidade for 1, remove o item do carrinho
    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

/**
 * Exibe o conteúdo atual do carrinho no console.
 * 
 * @param {Array} userCart - Carrinho do usuário
 */
async function dysplayCart(userCart) {
    console.log("Shopee cart list:");
    // Percorre cada item do carrinho com forEach e exibe seus dados
    userCart.forEach((item, index) => {
        console.log(
            `Index: ${index + 1}. Produto: ${item.name} - R$ ${item.price} | ${item.quantity}X | Total: R$ ${item.subtotal().toFixed(2)}`
        );
    });
}

// Exporta todas as funções para serem usadas em outros arquivos do projeto
export {
  addItem,
  calculeteTotal,
  deleteItem,
  removeItem,
  dysplayCart,
};
