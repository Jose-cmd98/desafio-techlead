# Desafio Techlead

Cargo: Desenvolvedor Angular Jr || Pleno

Linguagem escolhida: Angular, Express NodeJS e MongoDB

# Introdução

Neste desafio, você deverá desenvolver um sistema para gerenciamento de uma biblioteca. O sistema deverá ter dois perfis de usuário:

1. Administrador: capaz de cadastrar / editar / excluir todos os livros (nome, autor, data de cadastro).
2. Cliente: também pode cadastrar livros, porém só pode editar e excluir os livros que cadastrou, sendo que os demais cadastrados no sistema ele somente conseguirá visualizar.

# Incremento de funcionalidades

O sistema deverá ser incrementado de acordo com as seguintes regras:

1. O sistema deve conter uma tela inicial de login.
2. Na tela de login deverão existir links de cadastre-se e esqueci minha senha para que novos usuários possam ser cadastrados e antigos usuários possam recuperar o acesso.
3. Esse cadastro será sempre de usuário do perfil cliente, em tese, o perfil administrador deve estar previamente cadastrado.
4. O usuário de perfil administrador terá uma tela de gerência de livros, no qual ele poderá cadastrar / editar / excluir / listar / detalhar os livros.
5. O usuário de perfil cliente terá uma tela que poderá consultar a lista completa de livros, podendo cadastrar novos livros, no entanto, editar e excluir somente aqueles cadastrados por ele.

# Escolha de Tecnologias para o Desafio

Frontend

Para o desenvolvimento do frontend, foi escolhido o framework Angular, que oferece um conjunto completo de ferramentas para a criação de aplicações web modernas. O Angular foi selecionado devido à sua arquitetura modular, que facilita a organização do código, e à sua excelente documentação, que torna a aprendizagem rápida e fácil.

Backend

Para o desenvolvimento do backend, foi escolhido o framework Express, que é amplamente utilizado para a criação de APIs RESTful em NodeJS. Além disso, foi utilizado o banco de dados MongoDB para armazenar os dados do aplicativo. O MongoDB foi escolhido por sua flexibilidade e escalabilidade, tornando-o uma excelente opção para aplicações web modernas.

Autenticação de Usuários

Para garantir a segurança do projeto, foi utilizado o JSON Web Token (JWT) para autenticação de usuários. Esse token é usado para troca de informações entre o frontend e o backend, garantindo que somente usuários autorizados tenham acesso às funcionalidades do sistema.

# Como executar o projeto
Para executar o projeto localmente, siga estas instruções:

# Frontend
1. Abra um terminal na pasta app do projeto.
2. Execute o comando npm install para instalar as dependências do projeto.
3. Em seguida, execute o comando ng serve --open para iniciar o servidor local e abrir a aplicação no navegador.

# Backend
1. Abra um terminal na pasta api do projeto.
2. Execute o comando npm install para instalar as dependências do projeto.
3. Em seguida, execute o comando npm run start para iniciar o servidor do backend.
