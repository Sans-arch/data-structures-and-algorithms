// Inserindo um elemento na primeira posição
// Movendo todos os elementos 1 casa para a direita
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
};

const numbers = [1, 2, 3];

numbers.insertFirstPosition(-1);
console.log(numbers);

// O tipo Array do JavaScript já possui por padrão um método que faz o mesmo,
// chamado de .unshift(), ele insere 1 elemento no ínicio.
numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);
