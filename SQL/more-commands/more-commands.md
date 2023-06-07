# Mais comandos SQL

Os comandos que vimos até agora são da categoria DQL (Data Query Language).
Que é responsável por recuperar e consultar dados de um banco de dados.

Em SQL temos muito mais comandos, vamos ver abaixo, comandos de manipulação de dados,
que pertencem a categoria DML (Data Manipulation Language) que  é responsável por 
manipular (inserir, atualizar, excluir) os dados dentro de uma tabela.

## INSERT INTO

```sql
  INSERT INTO aluno(nome, cpf, responsavel) VALUES ('Natan Foleto', 48092926816, 'Marlene Foleto')
```

## UPDATE

```sql
  UPDATE aluno SET nome = 'Natan de Souza Foleto' WHERE matricula = 4
```

## DELETE

```sql
  DELETE FROM aluno WHERE matricula = 3
```

**MUITO IMPORTANTE**
**O BANCO DE DADOS NÃO NOS IMPEDE DE EXECUTAR UM UPDATE OU DELETE SEM WHERE**
**MAS LEMBRE-SE QUE SE FIZERMOS ISSO VOCÊ ESTARÁ ALTERANDO OU EXCLUINDO TODOS OS REGISTROS**
**MUITO IMPORTANTE**