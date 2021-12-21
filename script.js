/*
    Multiline comments
*/

// Single line comments

// Kintamieji var, let, const
var a; // nebenaudojama
let uzdarbis = 1000;
const z = 1;

uzdarbis = 1500;
//z = 5;  negalima, error

// Skaiciai
const first = 10.5;
const second = 5.7;
const third = 2;
let sum = first + second + third; // Sudetis
let minus = first - second - third - first; // Atimtis
let multiply = first * second * third; // Daugyba
let divide = first / second / third; // Dalyba

// String - stringai
// string + string = string;
const text = "Rokas yra geras zmogus - ";
let title = "Siandien yra grazi diena";
let du = "2";
let trys = "3";
let space = " ";

// Boolean(bool) - true arba false;
const tiesa = true;
const melas = false;

// Masyvai - array
let masyvas = [];
let skaiciuMasyvas = [1, 2, 3];
let stringuMasyvas = ["Rokas", "Tomas", "Romas"];
let booleanuMasyvas = [true, false, false];
let randomMasyvas = [1, "rokas", false];

// Funkcijos

function example() {}

// a = 3, b = 5;
function multiplyNumbers(a, b) {
  // 3 * 5
  return a * b; // 15
}

// name = "Rokas"
function sayHello(name) {
  // "Hello " + "Rokas" + "!";
  alert("Hello " + name + "!"); // Hello Rokas!
}

const multipliedNumbers = multiplyNumbers(3, 5); // 15

sayHello("Rokas");
