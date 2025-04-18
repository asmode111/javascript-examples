const multiples = (number) => {
  for (i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
      continue;
    }

    if (i % 3 === 0) {
      console.log("fizz");
      continue;
    }

    if (i % 5 === 0) {
      console.log("buzz");
      continue;
    }

    console.log(i);
  }
}

multiples(15);