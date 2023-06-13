# Iniciando um o git em um projeto

## Starter

- Abra o diretório do projeto no prompt

- Digite o comando `git init`
- Se você notar não vai existir nenhum arquivo, porque o arquivo do git fica escondido
- É só mostrar os arquivos ocultos

## O git guarda o histórico do projeto

- Se abrirmos o diretório podemos ver todas informações
- Se apagar a pasta do .git, acabamos com o git no projeto

## Primeiro Commit

- Vamos criar um arquivo novo em nosso projeto
- Nessa hora o git já identificou que temos um novo arquivo no projeto

- Vamos adicionar esse arquivo em nossa linha do tempo do git
- Use o comando `git add .`
- O `.` significa que estou referenciando todos arquivos do projeto que está na pasta raiz

- Agora vamos pegar esse arquivo preparado, e dar um commit para enviar para nossa linha do tempo
- Use o comando `git commit -m "Inicial commit"`

- Podemos ver o histórico, visualizar a linha do tempo
- Use `git log` ou `git log --oneline`
- Para trazer somente `n` commits: `git log -n 5`
