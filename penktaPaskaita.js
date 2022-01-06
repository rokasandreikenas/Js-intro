const employee = {
  name: "Rokas",
  surname: "Andreikenas",
  age: 15,
  walk: function name() {},
};

employee.walk;

// funkcija = veiksmas

function funkcija() {}

function multiplyNumbers(a, b) {
  const multiplied = a * b;
  return multiplied;
}

function sayHello() {
  alert("Hello " + "!");
}

const names = ["Rokas", "Tomas", "Romas"];
const numbers = [1, 2, 3, 5];

function showFirstArrayItem(array) {
  return array[0];
}

function listAllArrayItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

listAllArrayItems(names);
sayHello();
