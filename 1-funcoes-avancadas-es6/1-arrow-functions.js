// retorno simples
var sum = (a, b)  => a + b;

console.log(sum(1, 3));

// outras operaçoes antes do retorno
var sub = (a, b) => {
  if (a<b) {
    return b - a;
  } else {
    return a - b;
  }
}

console.log(sub(3, 2));

// apenas um argumento pode ser passado direto
var quadrado = a => a * a;

console.log(quadrado(5));

