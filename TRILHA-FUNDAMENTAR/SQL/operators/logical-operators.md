# SQL Logical Operators

Como no javascript, no sql também existem os operadores lógicos, são
bem parecidos, mas mudam a sintaxe

* AND
```sql
  SELECT * FROM aluno WHERE nome like "J%" AND matricula < 2
```

* OR
```sql
  SELECT * FROM aluno WHERE matricula > 2 OR nome like "G%"
```

* BETWEEN
```sql
  SELECT * FROM funcionarios 
  WHERE id_funcionario BETWEEN 4 AND 7

  SELECT * FROM funcionarios 
  WHERE id_funcionario NOT BETWEEN 4 AND 7
```

* IN e NOT IN
```sql
  SELECT * FROM funcionarios 
  WHERE id_departamento IN (1, 2, 5)

  SELECT * FROM funcionarios 
  WHERE id_departamento NOT IN (1, 2, 5)
```

* IS NULL e IS NOT NULL
```sql
  SELECT * FROM funcionarios
  WHERE id_departamento IS NULL

  SELECT * FROM funcionarios
  WHERE id_departamento IS NOT NULL
```

