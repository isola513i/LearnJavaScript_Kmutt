const values = new Array(1);
console.log(values);
console.log(values.length);

const x = new Array(1, 3, 5, 7);
console.log(x);
console.log(x.length);

const y = new Array();
console.log(y.length);
console.log(typeof y);

const z = Array.of(1);
console.log(z.length);
console.log(z);

const a = Array.of(true, { id: 1 }, "hello");
console.log(a);

const b = [2, 4, 6];
const c = Array.from(b); // [...b]
console.log(c); // [2,4,6]
console.log(c.length); // 3
