

function* chieldGenerator(i) {
  yield i+1;
  yield i+2;
  yield i+3;
}

function* generator(i) {
   yield i;
   yield* chieldGenerator(i);
   yield i+10;
}

let gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


