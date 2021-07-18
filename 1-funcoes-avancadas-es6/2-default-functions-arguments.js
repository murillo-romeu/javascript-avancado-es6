// define o valor padrão para cada variavel
function mult(a = 1, b = a) {
  return a * b;
}

console.log(mult(5));

// lazy evaluation
function rand() {
  return Math.random() * 10;
}

function mult2(a, b=rand()) {
  return a * b;
} 

console.log((mult2(2)));
console.log((mult2(2)));