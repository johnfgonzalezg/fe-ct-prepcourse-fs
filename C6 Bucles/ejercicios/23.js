function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let cantDivisores = 1;
  let i = 1;
  
  do{
    if(numero % i == 0){
      cantDivisores = cantDivisores + 1;
    }

    i++
  }
  while( i <= numero / 2)
  

  return cantDivisores == 2  ? true : false
}




module.exports = esNumeroPrimo;
