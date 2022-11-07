CRUD de Produtos

Essa é uma API de armazenamento de informações além de servir como uma  lista de produtos interativa, onde é possível:

- Criar;
- buscar;
- atualizar;
- remover;

# Sumário

- [Contexto](#contexto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Dependências](#dependências)
- [Como rodar a aplicação](#como-rodar-a-aplicação)
- [Documentação da API](#documentação-da-api)

# Contexto 

Criar um CRUD de produtos com os seguintes campos: nome, preço, estoque e descrição. Seu CRUD deverá ter front-end e back-end ""baseado em microsserviços".

# Tecnologias utilizadas

- **Ferramentas:** NodeJs, NPM, Docker, Git e GitHub.
- **Linguagem:** JavaScript.
- **Frameworks, bibliotecas e plugins:** 
 - **Frontend**: ReactJs, Vite, Tailwind, Postcss, Eslint, Axios.
 - **Backend**: NodeJs, Express, Cors, date-fns.
- **Banco de dados:** MongoDB

# Dependências

Você precisará de [Git](https://git-scm.com/downloads) e talvez uma chave [SSH](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/about-ssh).


# Como rodar a aplicação

1. No terminal, clone os repositórios:
```sh
git clone git@github.com:Raph2ll/Back-Produtos.git
git clone git@github.com:Raph2ll/Front-Produtos.git
```

2. Entre nas pastas dos repositórios clonados:

**Back-Produtos:**
```sh
cd Back-Produtos/Backend
```
**Front-Produtos:**
```sh
cd Front-Produtos
```

3. Inicialize a aplicação:

**Back-Produtos:**
```sh
npm start
```
**Front-Produtos:**
```sh
npm run dev
```

# Documentação da API

Com a aplicação já em execução, acesse a documentação em seu navegador pela URL http://localhost:3000/api-docs.
