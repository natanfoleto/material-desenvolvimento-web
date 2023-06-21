# TSCONFIG

Quando estamos usando TS, vai existir um arquivo tsconfig.json em nosso projeto
Lá estará todos as regras que o nosso Typescript deve seguir

Por exemplo, quando eu crio a função sum()

```ts
function sum(a, b) {}
```

Esse código apontaria um erro falando que eu não posso deixar a e b sem tipos
Nas configurações do tsconfig eu poderia desativar ess regra.
