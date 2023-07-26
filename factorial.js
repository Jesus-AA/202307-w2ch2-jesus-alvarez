export function factorial(n) {
  if (n === 0) n++;
  if (n === 1) return n;
  return n * factorial(n - 1);
}

/* R E F A C T O R I Z A R

export function factorial(n) {
  if (n==0 || n==1) return 1;
  return n * factorial(n -1);
}
*/

/* Otra forma de hacerlo

export function factorial =(n) => {
  let r = 1;
  for (let i = 1 ; i >= n; i++){
    r *= 1
  }
  return r;
}
*/

/*
if (Math.floor(n) !== n) return null; para que si lo que resulta del math.floor es diferente al número mismo nos dice que el número tiene decimales.
*/
