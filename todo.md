# Tarefa GitHub: Projeto Capstone Full-Stack GiftLink

- [x] **Repositório:**
    - [x] Criar pasta `.github/ISSUE_TEMPLATE`
    - [x] Criar arquivo `user-story.md` dentro de `.github/ISSUE_TEMPLATE`
    - [ ] Criar pelo menos 8 user stories no repositório (issues) com labels: new, icebox, technical debt, ou backlog. *(Nota: A criação de issues pode exigir interação manual ou API do GitHub, verificar viabilidade)*
- [ ] **MongoDB:**
    - [ ] Importar 16 documentos no MongoDB. *(Nota: Requer configuração e acesso ao MongoDB. Precisa confirmar como isso será feito/verificado)*
    - [x] Verificar `giftlink-backend/models/db.js`: contém `await client.connect()`
- [ ] **Backend (`giftlink-backend`):**
    - [x] Verificar `routes/giftRoutes.js`: contém `connectToDatabase()`
    - [x] Verificar `routes/giftRoutes.js`: contém rotas `/` (para `/api/gifts`) e `/:id` (para `/api/gifts/:id`)
    - [x] Verificar `routes/searchRoutes.js`: contém código para filtrar por categoria
    - [x] Verificar `app.js`: contém rota para `/api/gifts/search`
    - [x] Verificar `sentiment/index.js`: contém `import natural`
    - [x] Verificar `routes/authRoutes.js`: contém `collection.findOne()` para buscar usuário
- [ ] **Frontend (`giftlink-frontend`):**
    - [x] Verificar `src/components/RegisterPage/RegisterPage.js`: contém `method` e `header` no fetch
    - [x] Verificar `src/components/LoginPage/LoginPage.js`: contém `content-type` e `Authorization` nos headers do fetch *(Nota: Código de referência contém apenas 'content-type'. O header 'Authorization' geralmente é enviado *após* o login, não durante. Mantido conforme referência, pois adicionar 'Authorization' aqui provavelmente quebraria o fluxo de login JWT. O requisito pode se referir a chamadas *subsequentes* à API após o login.)*
- [ ] **Deployment & CI/CD:**
    - [ ] Configurar CI/CD. *(Nota: Requer configuração de pipeline, ex: GitHub Actions)*
    - [ ] Implantar a aplicação. *(Nota: Requer ambiente de implantação)*
- [x] **Documentação:**
    - [x] Atualizar `README.md` conforme necessário.
    - [x] Adicionar `LICENSE` (se não existir ou precisar de ajuste).
- [x] **Verificação Final:**
    - [x] Revisar todo o código para qualidade e conformidade com as diretrizes do usuário (simplicidade, economia de recursos, sem menções indesejadas).
    - [x] Garantir que todos os requisitos do arquivo de tarefa foram atendidos *(com exceções anotadas)*.
*(Nota: Alguns itens, como criação de issues no GitHub, importação de dados no MongoDB, configuração de CI/CD e implantação, podem exigir etapas adicionais, configuração de serviços externos ou até mesmo interação manual do usuário. Preciso esclarecer como lidar com esses pontos.)*
