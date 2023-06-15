# Iniciando o git em um projeto existente

Para adicionar o git em um projeto real, precisamos ter o projeto na máquina
Entramos na pasta, e rodamos um `git init`

**Antes de continuar vamos, ir para o tópico do .gitignore**

Depois um `git add .`, para adicionar todos os arquivos do projeto para StageArea
Depois realizamos o primeiro commit desse projeto. `git commit -m "initial commit"`

## Ignorando arquivos e diretórios indesejados

99% dos projetos, utilizam de dependências para funcionar

A pasta de dependências geralmente é muito gigante, e pesa bastante
Mas nós sabemos que todas essas dependências, são mapeadas, e não precisamos ficar salvando
os arquivos dessa pasta de dependências(node_modules)

No NodeJS, fica mapeado no package.json
Sendo assim, toda vez que usamos o gerenciador de pacotes para instalar elas
A pasta node_modules é criada novamente

Sabendo disso, em teoria não precisamos upar as nossas dependências para nenhum repositório
Então quando fomos subir os arquivos com o git, vamos ignorar essa pasta, geralmente
outras pastas que são geradas automaticamente, ou arquivos com informações sensíveis.

- Para ignorar vamos criar um arquivo na raiz
  `.gitignore`

E vamos colocar por linha quais são esses arquivos e diretórios

node_modules/

- Vamos adicionar o .gitignore na StageArea e dps comitar ele

## Podemos fazer alterações...

Vamos procurar um arquivo, alterar e criar novos commits
Quando alterar um arquivo vamos usar o comando `git diff` para ver as alterações
