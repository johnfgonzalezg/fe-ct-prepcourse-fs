function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let sum = 0;
   let i = 1;
   while(i <= n){
      if(sum > 100){
         break;
      }
      sum += i;
      i++;
   }
   return sum
}


module.exports = sumarHastaNConBreak;
