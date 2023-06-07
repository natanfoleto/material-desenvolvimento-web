# SQL Relacional Operators

Como no javascript, no sql também existem os operadores

* =, Igual
```sql
  SELECT * FROM aluno WHERE cpf = "12345678912"
```

* Like
```sql
  SELECT * FROM aluno WHERE nome like "%n%"
```

* >, Maior que
```sql
  SELECT * FROM products WHERE price > 100 
```

* <, Menor que
```sql
  SELECT * FROM products WHERE price < 100
```

* >=, Maior ou igual
```sql
  SELECT * FROM products WHERE price >= 50 
```

* <=, Menor ou igual
```sql
  SELECT * FROM products WHERE price <= 500
```

* <> Não igual a
```sql
  SELECT * FROM users WHERE active <> false
```

* != Diferente de
```sql
  SELECT * FROM users WHERE active != true
```

