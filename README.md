# Finance-IA 💸

Finance-IA é uma aplicação de gestão financeira desenvolvida durante a **FSW Week**. Esse projeto utiliza inteligência artificial para fornecer insights financeiros e ajudar usuários a gerenciar suas finanças de maneira mais eficaz.

## 📚 Visão Geral do Projeto

Este projeto usa tecnologias modernas para criar uma aplicação de IA aplicada ao setor financeiro. Ele inclui funcionalidades como previsão de gastos, análise de fluxo de caixa, e categorização de despesas.

## 🚀 Tecnologias Utilizadas

- **Next.js** para o frontend, proporcionando uma experiência de usuário interativa e responsiva.
- **TypeScript** para tipagem estática, facilitando o desenvolvimento e a manutenção do código.
- **Prisma** como ORM para interação eficiente com o banco de dados.
- **IA** para análise de dados e previsão de despesas.

## 📂 Estrutura do Projeto

- `app/` - Código principal do frontend e componentes.
- `prisma/` - Configurações e esquemas de banco de dados.
- `public/` - Arquivos estáticos, incluindo imagens e estilos.

## ⚙️ Configuração e Execução

### Pré-requisitos

- **Node.js** (v14+)
- **NPM** ou **Yarn**

### Instalação

1. Clone o repositório:

```   ```bash
   git clone 
   cd fullstackweek-financeai
```

Instale as dependências:

bash

npm install
# ou
yarn install

Configure o banco de dados com Prisma:

   ```bash

npx prisma migrate dev
```
Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```
Acesse o projeto em http://localhost:3000.

📸 Demonstrações
Tela Inicial
[IMG]

Previsão de Gastos
[IMG]

Análise de Fluxo de Caixa
[IMG]

🤖 Funcionalidades da IA
A IA no Finance-IA ajuda a:

Categorizar automaticamente despesas.
Sugerir orçamentos personalizados.
Analisar padrões de gastos para sugerir economias.

🛠️ Personalização

Para configurar variáveis de ambiente, crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

env

DATABASE_URL="sua-url-do-banco-de-dados"
API_KEY="sua-chave-de-api"

📄 Licença
Este projeto está sob a licença MIT.

Desenvolvido durante a FSW Week.






