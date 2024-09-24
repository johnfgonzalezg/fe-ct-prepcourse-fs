function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let potencia = numero
  while(potencia % 2 == 0){
    potencia = potencia / 2
    if(potencia == 1)
      return true
  }
  return false
}

module.exports = esPotenciaDeDos;
