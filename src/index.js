import createItem from './services/item.js';
import * as cartService from './services/cart.js';

// Criando um carrinho vazio (array)
const carrinho = [];

console.log("Welcome to your Shopee cart!");

// Criando dois itens utilizando a função createItem
const item = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// Exibindo o subtotal de cada item
console.log(`Item 1: R$ ${item.subtotal()}`);
console.log(`Item 2: R$ ${item2.subtotal()}`);

// Adicionando os itens ao carrinho
await cartService.addItem(carrinho, item);
await cartService.addItem(carrinho, item2);

// Exibindo o carrinho
await cartService.dysplayCart(carrinho);

// Removendo uma unidade do item1
await cartService.removeItem(carrinho, item2);

// Exibindo o carrinho
await cartService.dysplayCart(carrinho);

// Calculando o total do carrinho
await cartService.calculeteTotal(carrinho);
