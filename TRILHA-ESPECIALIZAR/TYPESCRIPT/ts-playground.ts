const userName = "João Inácio";

userName();

// ----------------------------------

const user = {
  name: "Natan Foleto",
  email: "natanfoleto2015@hotmail.com",
};

console.log(user.age);
console.log(user.name);

// ----------------------------------

function sum(a, b) {
  return a + b;
}

sum("1", 5);

// ----------------------------------

// Compilação
// Tipagem explícita

function showTicket(user: string, ticket: number) {
  console.log(
    `Olá ${user ?? "Usuário Padrão"}. Seu número de bilhete é: ${ticket}`
  );
}

showTicket("Natan Foleto", 123);

// ----------------------------------
// Any
// Por padrão, quando não tipamos uma var, o tipo dela é any = qualquer
// Para não ficar acusando erro que nós não tipamos a var
// Colocamos que ela é do tipo any

let info: any;

info = [123];
info = "João";
info = true;
info = 10.5;

// OU

function div(a: any, b: any) {
  return a / b;
}

sum("1", 5);

// ----------------------------------
// Inferência de tipos
// O TypeScript reconhece automaticamente o tipo da variável ao passar algum valor para ela.

let username = "joao";

username = 10;
username = "natan";

// ----------------------------------
// Tipos primitivos
// Esses são os tipos primitivos que podemos utilizar no TypeScript:

let loading: boolean;
loading = false;

let email: string;
email = "joao@email.com";

let price: number;
price = 10.5;
price = 10;

// ----------------------------------
// Matrizes

let numbers: number[];
numbers = [1, 2, 3, 4, 5, 6];

let users: Array<string>;
users = ["Rodrigo", "João"];

// ----------------------------------
// Funções
// Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void
// Dessa maneira, tipamos dessa forma no TypeScript:

function showMessages(message: string): void {
  console.log(message);
}

// Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

function showMessages(message: string) {
  return message;
}

console.log(showMessages("Oi, João"));

// ----------------------------------
// Union
// O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:

function printUserId(id: number | string) {
  console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");

// Dessa forma, podemos passar tanto number quanto string

// ----------------------------------
// Generics

/* 
  O generic no TypeScript nos permite reutilizar uma determinada implementação de código, 
  de forma tipada. Para representar um generic, nós declaramos ele dessa forma 
  <T> (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir: 
*/

/*
 * <S> → Representando State
 * <T> → Representando Type
 * <K> → Representando Key
 * <V> → Representando Value
 * <E> → Representando Element
 */

function useState<T>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState1 = useState();
let newState2 = useState<string>();
newState1.get();
newState1.set("João");
newState1.set(123);

newState2.set(123);

// ----------------------------------
// Type
// Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas.

type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

userId = 1;
userId = "1";
userId = undefined;

adminId = 1;
adminId = "2";
adminId = undefined;

// ----------------------------------
// Type Assertions
// Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.
// Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.

type UserResponse = {
  id: number;
  name: string;
  avatar: string;
};

let userResponse = {} as UserResponse;

userResponse.name;
userResponse.age;

// ----------------------------------
// Objetos

type Point = {
  x: number;
  y: number;
};

function printCoord(points: Point) {
  console.log(`O eixo x é: ${points.x}`);
  console.log(`O eixo y é: ${points.y}`);
}

printCoord({ x: 101, y: 50 });

// ----------------------------------
// Opcional

type User = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
};

let newUser: User = {
  name: "João",
  email: "joao@email.com",
  age: 18,
};

// ----------------------------------
// Intersecção de tipos
// A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

type User = {
  id: number;
  name: string;
};

type Char = {
  nickname: string;
  level: number;
};

type PlayerInfo = User & Char;

let info: PlayerInfo = {
  id: 1,
  name: "João Inácio",
  nickname: "birobirobiro",
  level: 50,
};

// ----------------------------------
// Interface
// Outra maneira de criar tipagens no TypeScript é utilizando a interface.

interface User {
  id: number;
  name: string;
}

let newUser: User = {
  id: 1,
  name: "João",
};

function registerNewUser(newUser: User) {
  newUser.id;
  newUser.name;
}

// ----------------------------------
// Type e Interface

/*
  O objetivo de ambos serve para definir tipagens no TypeScript. O type é mais recomendado por ser mais simples, 
  fácil de lidar com tipos primitivos, por ser mais flexível. Já as interfaces são utilizadas normalmente em 
  criação de libs, para aqueles que gostam da programação orientada a objetos.
*/

type TUser = {
  id: number;
  name: string;
};

type TPayment = {
  method: string;
};

// Fazendo união com Type
type TAccount = TUser & TPayment;

interface IUser {
  id: number;
  name: string;
}

interface IPayment {
  method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}
