📌 Deploy do Projeto Rick Search Morty

A aplicação se baseia em um site que se torna possível saber informações da série Rick And Morty, mais precisamente de seus personagens, podendo navegar na listagem e fazer buscas, utilizando a Api fornecida:

[https://rickandmortyapi.com/](https://rickandmortyapi.com/)

Este documento explica como rodar e fazer o deploy da aplicação Angular tanto localmente quanto utilizando Docker.

🚀 Rodando Localmente

🔧 Pré-requisitos

Node.js 20+

Angular CLI

Git

📥 Instalando as Dependências

# Clone o repositório

git clone https://github.com/dilsoncampelo10/rick-search-morty

cd rick-search-morty

# Caso não tenha o Angular CLI instalado:

npm install -g @angular/cli

# Instale as dependências

npm install

▶️ Rodando o Servidor de Desenvolvimento

ng serve

O servidor será iniciado em http://localhost:4200/

🐳 Deploy com Docker

🔧 Pré-requisitos

Docker

📦 Criando a Imagem Docker

# Construindo a imagem Docker

docker build -t rick-search-morty .

🚀 Rodando o Container

docker run -p 4200:4200 rick-search-morty

Acesse http://localhost:4200/ para visualizar a aplicação rodando no container.

✅ Testando a Aplicação

Caso queira rodar os testes unitários:

ng test

📜 Caso queira verificar a aplicação rodando em produção, acesse:

[https://rick-search-morty.netlify.app/](https://rick-search-morty.netlify.app/)

# Sobre a estrutura de pastas utilizada

Pensando em escalabilidade do projeto, os diretórios foram definidos da seguinte maneira:

Core: Arquivos essenciais, que não podem faltar na aplicação, como services, layouts, guards, config e etc

Shared: Onde ficam arquivos constantemente compartilhados e reutilizados, como os components, enums, models e etc

Pages: São as páginas do projeto, que tem uma rota definida e agrupa os demais components, como home e list-character

Dentro de pages busco organizar de forma que, caso a aplicação cresça, e precise por exemplo, adicionar um create-character, apenas seja adicionado em:

-pages:
--character:
---list-character
---create-character