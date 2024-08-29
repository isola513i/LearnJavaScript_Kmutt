const x = [1, 3, 5, 7];
let [a, m, , o] = x; //[a,m] destructuring
console.log(typeof a); //number
console.log(typeof m); //number
console.log(a, m); //1,3
console.log(o);

const [...n] = x;
console.log(n); //[1,3,5,7]
console.log(n.length); //4

const d = [];
const [...c] = d;
console.log(d); //[]
