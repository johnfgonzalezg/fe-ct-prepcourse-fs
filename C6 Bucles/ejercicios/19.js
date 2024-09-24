function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let i = 1;
  let sum = 0;
  while(i <= n){
    sum += i;
    i++;
  }
  return sum
}

module.exports = sumarHastaN;
