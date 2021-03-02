/*FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// stampo i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
// se i numeri sono divisibili per 3 e 5 scrivo fizzbuzz
 if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  // se invece sono solo divisibili per 3 scrivo fizz
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  // se invece sono solo divisibili per 5 scrivo buzz
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  // altrimenti scrivo il numero
  else {
    console.log(i);
  }
}
