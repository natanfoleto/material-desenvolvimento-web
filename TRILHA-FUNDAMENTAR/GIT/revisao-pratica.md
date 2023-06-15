# Revisão prática

- Vamos criar um projeto
- E executar os comandos para inicar o git

## Vamos realizar o seguinte passo a passo

- [] Criar o arquivo file1.txt
- [] Executar `git status`
- [] Criar mais um arquivo, file2.txt
- [] Exeute `git add file1.txt`
- [] Execute `git status`
- [] Agora vamos add tudo `git add .`
- [] Quero remover o file2.txt do meu Stage Area
- [] `git rm --chached file2.txt`
- [] Olhe o `git status`
- [] Agora vamos commitar os arquivos que estão preparados
- [] Use `git commit -m "Initial commit"`
- [] Agora vamos dar um `git log`
- [] Agora quero comitar também o file2
- [] ...

## Git diff

- [] Adicione mais 2 aqruivos, README.md e index.js
- [] Mande esses arquivos para a stage area
- [] Faça um commit desses arquivos novos
- [] Vamos alterar alguns arquivos do noso projeto
- [] E também deletar o file1.txt e o file2.txt
- [] Agora use o comando `git diff`
- [] E o `git status`

Esse passo a passo irá mostrar diferenças de ações (modified, deleted)
E irá mostrar também quais alterações fizemos nos arquivos modificados

Agora faça os passos abaixos, e para cada passo execute `git status` ou `git diff`

- [] Crie um arquivo
- [] Renomeie este arquivo
- [] Mova o arquivo
- [] Por fim delete este arquivo

## Desfazendo mudanças

Para descartar mudanças em nossos arquvios, utilizamos os seguintes comandos

- `git restore filename.ext`
- ou podemos descartar todas alterações
- `git restore .` para descartar todas alterações

É importante lembrar que o `git restore` só descarta alterações feitas no Working Diretory
Para descartar mudanças no Stage Area usamos o comando `git rm --cached`
Uma coisa importante também, se quisermos apagar todos arquivos do Stage Area
Precisamos usar o comando assim `git rm --cached -r .`
O `-r` executa o comando de forma recursiva

## Desfazendo alterações colocadas no Stage Area

- Use o comando `git restore --staged filename.ext`
- Ou se preferir descartar todos de uma vez `git restore --staged .`

## Corrigindo commits

- Como sabemos os commits tem uma hierarquia, o último n depende de nenhum outro
  Mas conforme vamos descendo nos pontos da história, um commit vai dependendo de outro
- Então vamos aprender a corrigir somente o último commit, para corrigir outros
  da muito mais trabalho e precisa deum grande conhecimento de git para realizar a correção

- Alterando message do commit
  `git commit --amend -m "Nova mensagem"`

Podemos perceber que quando corrigimos um commit, o hash é gerado novamente

- Alterando arquivos do commit
  Para fazer isso, basta editarmos o arquivo normalmente
  Usar um `git add .`
  E logo em seguida
  `git commit --amend -m "Nova mensagem"`
  Fazendo isso, além de alterar a mensagem, ele vai pegar as alterações Stage Area também

**Existe a possibilidade de corrigir um commit, mas o git prefere que a gente crie um novo commit se for alterar, criar ou deletar algum arquivo**

## Reverter commits

Para fazermos isso, o nosso working directory precisa estar limpo
`git status` para checar

Para voltarmos em um commit anterios, podemos nos achar pelo HEAD
HEAD~1 - Último commit
HEAD~2 - Penultimo commit
e assim vai ...

Então usamos o comando `git revert HEAD~2`

Outra forma de nos achar é usando a hash de um commit
Digite `git log --oneline` e copie a hash do commit desejado

Ai use o comando `git revert [hash]`
