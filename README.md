# Club Clothing

O Club Clothing é um e-commerce de roupas. O usuário pode se cadastrar, navegar pelo catálogo de produtos, adicionar produtos ao carrinho, remover produtos do carrinho e realizar pagamentos com o Stripe.

## 🎥 Demonstração

<img 
    src="https://imgur.com/Tj5jCYp.gif"
  />

## 💡 Funcionalidades

- Criação de conta;
- Navegar pelo catálogo de produtos;
- Adicionar, remover produtos do carrinho;
- Realizar pagamentos com o Stripe.

## 🛠️ Stack utilizada

**Front-end:** React, TypeScript, Redux Toolkit, styled-components, React Router, React Hook Form, Yup, Stripe API, Firebase, Jest, React Testing Library, Cypress.

## ⚙️ Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```
FRONT_END_URL = URL do local host do Netlify, http://localhost:8888
```

```
STRIPE_SECRET_API_KEY = Sua chave secreta da API do Stripe
```

## 💻 Rodando localmente

Para realizar um pagamento de teste no Stripe é necessário utilizar um cartão de crédito de teste. Você pode encontrar os cartões de teste [aqui](https://stripe.com/docs/testing#cards).

Pra localmente e obter o funciomaneto completo da aplicação é necessário ter instalado a CLI do Netlify. Ela é necessária pois é pelo Netlify que criamos a função serverless que cria a sessão de pagamento com o Stripe.

```
npm install netlify-cli -g
```

Clone o projeto

```bash
  git clone https://github.com/joao-vitor-felix/club-clothing.git
```

Entre no diretório do projeto

```bash
  cd club-clothing
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  netlify dev
```

## 🔍 Rodando os testes

Para rodar os testes, rode o seguinte comando

Testes unitários:

```bash
  npm test
```

Teste E2E:

```bash
  npm run cypress:run:buy-product
```

## ⌛ Deployment

Este repostório utiliza continuous deployment com o Netlify. Ou seja, toda vez que um commit é feito, o build para para produção é feito automaticamente.

## 🚀 Feedback

Se você tiver algum feedback, por favor me deixe saber por meio de joaovitorfelixcontato@gmail.com

## 👀 Relacionados

Alguns dos meus outros projetos

- [Meu time](https://github.com/joao-vitor-felix/meu-time)
- [Marvel Comics](https://github.com/joao-vitor-felix/marvel-comics)
- [Rick and Morty Cards](https://github.com/Rookie-Devs/rick-morty-cards)
