# Projeto Capstone Full-Stack JavaScript: GiftLink

Este repositório contém o projeto capstone desenvolvido por mim, como parte do programa IBM Full-Stack JavaScript / Capstone Developer. GiftLink é uma aplicação web full-stack que permite aos usuários listar e encontrar presentes (gifts).

## Visão Geral

GiftLink é uma plataforma onde os usuários podem se registrar, fazer login, listar itens que desejam doar (presentes) e procurar por presentes listados por outros usuários. A aplicação inclui funcionalidades de autenticação, visualização de detalhes de presentes, e busca com filtros.

## Funcionalidades

*   **Autenticação de Usuários:** Registro e login seguros de usuários utilizando JWT (JSON Web Tokens).
*   **Listagem de Presentes:** Usuários autenticados podem adicionar novos presentes à plataforma.
*   **Visualização de Presentes:** Exibição de todos os presentes disponíveis na página principal.
*   **Detalhes do Presente:** Página dedicada para mostrar informações detalhadas sobre um presente específico.
*   **Busca e Filtragem:** Funcionalidade de busca que permite filtrar presentes por nome, categoria, condição e idade.
*   **Análise de Sentimento (Placeholder):** Estrutura básica para futura implementação de análise de sentimento em descrições ou comentários (utilizando a biblioteca `natural`).

## Tecnologias Utilizadas

*   **Frontend:** React.js, CSS, Bootstrap
*   **Backend:** Node.js, Express.js
*   **Banco de Dados:** MongoDB (com Mongoose/MongoClient)
*   **Autenticação:** JWT, bcryptjs
*   **Gerenciamento de Pacotes:** npm
*   **Controle de Versão:** Git, GitHub
*   **Outros:** dotenv, cors, pino (logger)

## Estrutura do Projeto

```
/giftlink-frontend       # Aplicação React (Frontend)
  /public
  /src
    /components
    /context
    App.js
    index.js
    ...
  package.json
  ...

/giftlink-backend        # Aplicação Node.js/Express (Backend)
  /models
    db.js
    ...
  /routes
    authRoutes.js
    giftRoutes.js
    searchRoutes.js
    ...
  /sentiment
    index.js
  /util
    /import-mongo
      index.js
      gifts.json
  app.js
  logger.js
  package.json
  .env.example
  ...

.github/
  ISSUE_TEMPLATE/
    user-story.md

.gitignore
LICENSE
README.md
```

## Configuração e Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

*   Node.js e npm instalados (https://nodejs.org/)
*   MongoDB instalado e rodando (https://www.mongodb.com/try/download/community) ou uma instância na nuvem (MongoDB Atlas).
*   Git instalado (https://git-scm.com/)

### Backend (`giftlink-backend`)

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/galafis/Javascript-Fullstack-Capstone-Project.git
    cd Javascript-Fullstack-Capstone-Project/giftlink-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    *   Crie um arquivo `.env` na raiz do diretório `giftlink-backend`.
    *   Copie o conteúdo de `.env.example` (se existir) ou adicione as seguintes variáveis:
        ```dotenv
        MONGO_URL=mongodb://localhost:27017/giftdb  # Ou a URL da sua instância MongoDB
        JWT_SECRET=seu_segredo_jwt_aqui           # Crie um segredo forte para JWT
        ```
    *   **Importante:** Substitua `mongodb://localhost:27017/giftdb` pela string de conexão correta do seu MongoDB e `seu_segredo_jwt_aqui` por uma chave secreta segura.

4.  **Importe os dados iniciais (Opcional, mas necessário para a avaliação):**
    *   Certifique-se de que o MongoDB esteja rodando.
    *   Execute o script de importação (verifique o caminho e o comando exato no projeto de referência, se necessário):
        ```bash
        # Exemplo (pode precisar de ajuste baseado no script exato)
        node util/import-mongo/index.js
        ```
    *   *Nota:* O arquivo de tarefa menciona a necessidade de importar 16 documentos. Verifique o arquivo `gifts.json` ou similar dentro de `util/import-mongo`.

5.  **Inicie o servidor backend:**
    ```bash
    npm start
    ```
    O servidor estará rodando em `http://localhost:3060` (ou a porta configurada).

### Frontend (`giftlink-frontend`)

1.  **Navegue até o diretório do frontend:**
    ```bash
    # A partir da raiz do projeto
    cd ../giftlink-frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure a URL do Backend:**
    *   Verifique o arquivo `src/config.js` ou similar para garantir que a `urlConfig.backendUrl` esteja apontando para o endereço correto do seu servidor backend (ex: `http://localhost:3060`).

4.  **Inicie a aplicação frontend:**
    ```bash
    npm start
    ```
    A aplicação React será aberta no seu navegador, geralmente em `http://localhost:3000`.

## User Stories

O projeto utiliza User Stories para gerenciar o desenvolvimento de funcionalidades. Os templates para criação de User Stories (issues) podem ser encontrados na pasta `.github/ISSUE_TEMPLATE`. Conforme os requisitos da tarefa, pelo menos 8 user stories devem ser criadas no repositório GitHub com as labels apropriadas (`new`, `icebox`, `technical debt`, `backlog`).

## CI/CD e Deployment

Os requisitos da tarefa mencionam a necessidade de um processo de CI/CD e o deployment da aplicação. A configuração específica para CI/CD (ex: GitHub Actions) e o ambiente de deployment não estão incluídos neste repositório base e precisam ser configurados separadamente.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

