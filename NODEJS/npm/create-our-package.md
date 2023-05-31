# Criando nosso primeiro package

## Primeiro passo 

- Executar o comando `npm init` no diretório desejado
- Logo em seguida precisamos responder algumas perguntas no terminal

## Outra forma de criar

- Executando o comando `npm init -y` ele cria direto sem perguntar nada
- Essa forma é melhor porque podemos editar o nosso package.json depois


# Instalando depedências de terceiros em nossa biblioteca

- Para instalar dependências de terceiro, usaremos o comando `npm install package-name`

- Vamos instalar um pacote na prática
- `npm install cfonts`

- Após a lib ser instalada, uma pasta node_modules será gerada em nosso projeto
- Se voltarmos no package.json, uma nova propriedade dependencies foi criada

## Instalando a dependência como devDependencies

- Para instalarmos o pacote como dependência de desenvolvimento, usaremos `npm i package-name -D`

## Podemos manipular as dependências nosso package.json

- Posso mover dependências do devDependencies para o dependencies
- E atualizar com o comando `npm update`
- Fazendo isso ele vai remapear as dependências, no package-lock.json


# O que é a node_modules

- Conforme vamos adicionando dependências, elas vão sendo adicionadas a pasta node_modules
- Cada módulo tem suas próprias dependências, então é normal essa pasta ficar gigante e pesada

- Por essa pasta ser muito pesada, não enviamos ela para o git, ou qualquer servidor de repositório

- Como temos um mapeamendo no package.json de todas as dependências, 
podemos instalar elas a qualquer momento

- É só eu rodar um `npm install`


# O que é package-lock.json

- É um mapeamento completo das nossas dependências
- Ele ajuda o projeto a organizar todas as dependências
- E sempre que a gente usa um `npm install` ele faz com que as dependências
sejam instaladas mais rápido
- Não é recomendado ficar apagando esse arquivo


# Como criar scripts para rodar nosso projeto

- No arquivo package.json temos os scripts
- Nós podemos criar nossos próprios scripts
- Rodamos os scripts com o comando `npm run script-name`

- Vamos criar o nosso script start, que irá rodar o comando `node index.js`
