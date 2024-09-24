function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1
  for(let i = a ; i <= b; i++){
    producto  = producto * i;
  }
  if(a <= 0)
    return 0
  return producto
}

console.log(productoEntreNúmeros(-5, 5))

module.exports = productoEntreNúmeros;