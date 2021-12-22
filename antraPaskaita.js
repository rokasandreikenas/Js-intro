// = in JavaScript is used for assigning values to a variable.
// == in JavaScript is used for comparing two variables values, but it ignores the datatype of variable.
// === is used for comparing two variables, but this operator also checks datatype and compares two values.
// comparing throws true or false (boolean)
let start = 0;
let end = 9;

// ++ (+1) arba --(-1)
start = start + 1;
start++;

end = end - 1;
end--;

// start = start +3 (+= prideda ir lygina)
start = start + 3;
start += 3;

// == lygina value, === value ir data type
// == lygu, != nelygu
// >, <, >=, <=
let firstNumber = 7;
let secondNumber = 7;

// if - jeigu
let pinigai = 50;
let present = 50;
// jeigu dovana kainuoja maziau arba lygu 50 tada perku
// if present costs 50 less or equal 50 then buy
if (true) {
  // eina i vidu cia
} else {
  // jeigu yra salyga nepatenkinama
}

if (present < pinigai) {
  alert("Perku ir dar lieka");
} else if (present == pinigai) {
  alert("Perku bet nelieka pinigu");
} else {
  alert("Truksta pinigu");
}

if (present < pinigai) {
  alert("Perku ir dar lieka");
}
if (present == pinigai) {
  alert("Perku bet nelieka pinigu");
}
if (present > pinigai) {
  alert("Truksta pinigu");
}
