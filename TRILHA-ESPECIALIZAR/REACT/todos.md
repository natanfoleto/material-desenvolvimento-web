# Sequência do que passar

1. criando-projeto
2. entendendo-a-estrutura
3. regras
4. CSS Global
5. Seperando o CSS
6. Tipos de export
   6.1 export default Home;
   6.2 export function Home() {...};
7. Estilizando a Home
   7.1 class => className
8. Importando Fonte
9. Componentes
10. Propriedades
    10.1 Desestruturando as Props
11. Estados
    11.1 Diferença de váriavel e estado
    11.2 Exemplo onChange com let studentName
    11.3 Criando estado
12. Imutabilidade
    12.1 Explicar
    12.2 Exemplo criando o students
    12.3 students.map()
    12.4 setStudents[newStudent] => setStudents[...students, newStudent]
13. Key prop
    13.1 Colocar nome, e adicionar 2 nomes iguais => Trocar por time que sempre vai ser único
    13.2 Explicar: React usa a chave pra mais performance
    13.3 Na hora de procurar um item para excluir ou atualizar
14. Hooks
    14.1 useState, useEffect => São hooks que já vem com react
    14.2 São func, que permitem ligar, conectar os recursos de estado e ciclo de vida do React. A partir de componentes funcionais.
    14.3 Por que os hooks foram criados? Para tirar a estrutura de classes e trocar por funcionais
15. Header => Professor que está realizando a chamada
16. useEffect
    16.1 Explicar Hook => Corpo => Array de dependências
    16.2 Exemplo com a dep students
17. Consumindo API
18. useEffect Async
    18.1 Não pode ser async igual uma func
    18.2 Mas podemos criar func async dentro dele => única forma que da pra lidar com async/await no useEffect
    18.3 Criar fetchData()
19. Encerramento
