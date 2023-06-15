# Pacotes Globais

Aprendemos instalar dependências / pacotes em nosso projeto.
Essas dependências foram instaladas localmente em nosso projeto.

Com o NPM temos a opção de instalar pacotes globalmente na máquina, isso
quer dizer que qualquer projeto que quisermos desenvolver, esse pacote estará 
disponível para uso.

## Como instalar de maneira global?

- `npm install package-name -g`

Após instalar, percebemos que a pasta node_modules não foi criada.

- Com o comando `npm root -g`, conseguimos ver onde esse pacote foi instalado
- Se eu quiser desinstalar esse pacote, é só rodar o comando `npm uninstall package-name -g`


# Gerenciando versões das dependências

- Se olharmos no package.json nas dependências, seguido do nome
do pacote, temos a versão

- Geralmente as vesões são assim 

```json 
  {
    "moment": "^2.29.1"
  }
```

Vamos entender mais sobre o versionamento

"moment" -> Nome do pacote

^ -> Significa que quando for atualizar o pacote, ele vai atualizar somente o minor.patch
* -> Se caso tiver um * no lugar do ^, significa que ele vai mudar todas as versões, major.minor.patch
  -> Se caso não tiver o ^, quando atualizar as dependências, ele sempre vai manter a mesma

2 -> major -> É a versão do projeto
29 -> minor -> Significa alterações, mas não a possibilidade de quebrar o projeto
1 -> patch -> Resolvendo algum bug dentro do pacote


## Instalar versões específicas de pacotes

- `npm install moment@1.5.1`
- Para ver as vesões dos pacotes, `npm outdated`
- Para atualizar os pacotes, `npm upgrade`
- Para instalar sempre a última versão, `npm i moment@latest`


# Removendo pacotes

- `npm uninstall package-name`