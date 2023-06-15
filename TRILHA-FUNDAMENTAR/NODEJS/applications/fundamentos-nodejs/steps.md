# Passo a passo da criação da nossa primeira API Rest

## Criação e abertura da pasta do nosso projeto

1 - Criar uma pasta onde todo o nosso código vai ficar
2 - Abrir essa pasta no VS Code

## Inicialização do nosso package

1 - Vamos utilizar o `yarn` como gerenciador de pacotes
2 - `yarn init -y`

## Instalação do módulo que utilizaremos para criar nossa API

1 - Vamos utilizar o framework Express, é um dos mais utilizados no node. Com ele vamos conseguir aplicar
tudo o que vimos sobre API Rest, Routes, Métodos (GET, POST, PATCH, DELETE...), utilização de middlewares,
repostas HTTP, definição de status codes e muito mais.
2 - O express é uma lib de terceiros, vamos instalar com o comando `yarn add express`

## Iniciar a estrutura de pastas do projeto

1 - Todo o código da nossa regra de negócio, rotas, controllers, utils e muito mais, ficarão em uma pasta `src`
2 - Vamos criar essa pasta na raiz do projeto
3 - Dentro da src, vamos criar um arquivo `index.js`

## Configurar nosso app utilizando o express

1 - Após iniciar nosso app com express, podemos testar `node src/index.js`
2 - Após rodar, vamos no navegador e colocar o endereço da nossa API
3 - Vamos criar uma rota pra nossa API
4 - Como não temos nenhum mecanismo de reload, precisamos parar a aplicação e rodar de novo
5 - Mesmo usando o send para enviar a resposta, precisamos saber que nunca usaremos ele. Vamos
utlizar o modo de reposta .jon(), todas as repostas de nossas rotas, serão no formato JSON

## Vamos adicionar o Nodemon em nossa aplicação

1 - Nodemon é um mescanismo de reload, para não precisarmos ficar parando e executando o servidor
quando realizarmos alterações no código
2 - Vamos instalar o nodemon. Você acha que o nodemon será uma dependência normal ou de desenvolvimento?
3 - Vamos instalar como devDenpendencies, por que usaremos somente no momento de desenvolvimento
4 - `yarn add nodemon -D`

## Vamos criar nosso script de desenvolvimento

1 - Agora que temos o nodemon instalado, podemos configurar nosso script de desenvolvimento
2 - 
  ```json 
    "dev": "nodemon src/index.js" 
  ```
3 - Prontinho! Temos o nosso mecanismo de reload fuincionando

## Finalizando

1 - Nossa API está pronta pra começar a receber nossas implementações
2 - Criação das nossas ROTAS, e nossas regras de negócio
3 - Esse modelo é bem básico, vamos melhorar ele conforme avançando
4 - Parabéns você criou sua primeira API Rest utilizando o NodeJS