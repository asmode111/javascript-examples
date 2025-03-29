const compose = (f, g) => (x) => f(g(x));

const g = (num) => num + 1;
const f = (num) => num * 2;

const h = compose(f, g);
console.log(h(20));