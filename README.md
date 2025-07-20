# 🛒 Carrinho de Compras Shopee - Node.js

Este projeto foi desenvolvido durante o **Bootcamp da DIO de Node.js com React Native**, com foco em aprendizado prático de conceitos de back-end, modularização e lógica de programação.  
A aplicação simula a lógica de um carrinho de compras, similar ao da Shopee.

---

## 📁 Estrutura do Projeto

```
src/
├── index.js                # Arquivo principal de execução
└── services/
    ├── cart.js             # Regras e operações do carrinho
    └── item.js             # Criação de itens com subtotal
```

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/carrinho-compras-shopee-node.git
```

2. Acesse a pasta:

```bash
cd carrinho-compras-shopee-node
```

3. Execute com Node.js:

```bash
node src/index.js
```

---

## 🔧 Funcionalidades e Explicações

### 🧱 `createItem(name, price, quantity)`
Cria um objeto representando um item com:
- Nome (`name`)
- Preço unitário (`price`)
- Quantidade (`quantity`)
- Método `subtotal()` que retorna `price * quantity`

> **Local:** `services/item.js`

---

### ➕ `addItem(userCart, item)`
Adiciona um item no carrinho.

> **Local:** `services/cart.js`

---

### ➖ `removeItem(userCart, item)`
Remove uma unidade do item. Se for a última unidade, remove o item do carrinho.

> **Local:** `services/cart.js`

---

### ❌ `deleteItem(userCart, name)`
Remove completamente um item com base no nome.

> **Local:** `services/cart.js`

---

### 📋 `dysplayCart(userCart)`
Exibe o conteúdo do carrinho no console, mostrando:
- Nome
- Preço
- Quantidade
- Subtotal de cada item

> **Local:** `services/cart.js`

---

### 💰 `calculeteTotal(userCart)`
Soma os subtotais dos itens e exibe o valor total.

> **Local:** `services/cart.js`

---

## 📘 Conceitos Estudados

- Modularização com `import/export`
- `async/await` para estrutura assíncrona
- Manipulação de arrays (`push`, `splice`, `findIndex`, `reduce`, `forEach`)
- Separação de responsabilidades em arquivos

---

## 🔮 Possíveis Melhorias Futuras

- Adicionar persistência com banco de dados
- Criar interface gráfica com React Native
- Adicionar testes automatizados
- Tratar erros com try/catch
- Incluir autenticação de usuário

---

## 👨‍💻 Autor

**Gabriel Alves**  
Projeto didático desenvolvido com foco em aprendizado prático em Node.js.
