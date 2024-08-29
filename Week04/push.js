const x = [];
x[0] = 1;
x[x.length] = 10;
console.log(x);
delete x[0];
console.log(x);
console.log(x.length);
//append items in array
x.push(100);
x.push(200);
x.pop();
console.log(x);
console.log(x.length);
//insert item before the first item in array
x.unshift("A");
x.unshift("B");
x.shift();
console.log(x);
