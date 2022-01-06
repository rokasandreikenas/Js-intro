if (present < pinigai) {
  console.log("Perku ir dar lieka");
} else if (present == pinigai) {
  console.log("Perku bet nelieka pinigu");
} else {
  console.log("Truksta pinigu");
}

switch (pinigai) {
  case 50:
    console.log("Penkiasdesimt");
    break;
  case 60:
    console.log("Sesiasdesimt");
    break;
  case 70:
    console.log("Septynesdesimt");
    break;
  case 80:
    console.log("Astuoniasdesimt");
    break;
  default:
    console.log("Nezinau kiek pinigu");
    break;
}

const present = 50;
const pinigai = 50;

// Ternary operatorius - if atstoja ? else :

const atsakymas =
  present < pinigai
    ? "Perku ir dar lieka"
    : present == pinigai
    ? "Perku, bet nelieka"
    : "Truksta pinigu";

// i, j, k, l

for (let i = 0; i < 5; i++) {
  console.log(i);
}
