const readline = require('readline');

console.log('Hello, World!');

function isDivisible(div1, div2) {
  const number = BigInt(Math.floor(Math.random() * 100000000000000000));

  if (number % div1 === 0n && number % div2 === 0n) {
    console.log('The number is divisible by both ' + div1 + ' and ' + div2 + '.');
  } else if (number % div1 === 0n) {
    console.log('The number is divisible by ' + div1 + ' but not by ' + div2 + '.');
  } else if (number % div2 === 0n) {
    console.log('The number is divisible by ' + div2 + ' but not by ' + div1 + '.');
  } else {
    console.log('The number is not divisible by both ' + div1 + ' or ' + div2 + '.');
  }

  console.log('Random number: ' + number);
}

function readConsoleInput(rl, message) {
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      if (answer.trim() !== '' && !isNaN(answer)) {
        const number = BigInt(answer);
        console.log('You entered: ' + number);
        resolve(number);
      } else {
        console.log('Invalid input.');
        resolve(null);
      }
    });
  });
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const first = await readConsoleInput(rl, 'Enter first number: ');
    if (first === null) return;

    const second = await readConsoleInput(rl, 'Enter second number: ');
    if (second === null) return;

    isDivisible(first, second);
  } finally {
    rl.close();
  }
}

const temp = Math.floor(Math.random() * 100);
console.log(temp>=90 ? 'It is hot! ' + temp : temp<=60 ? 'It is not hot. ' + temp : 'It is perfect. ' + temp);

function gravity(mass1, mass2, distance) {
  const g = 6.67430e-11; // gravitational constant in m^3 kg^-1 s^-2
  const force = (g * mass1 * mass2) / (distance ** 2);
  scientificNotation(force);
}

function scientificNotation(number) {
  const exponent = Math.floor(Math.log10(number));
  const mantissa = number / (10 ** exponent);
  console.log('Scientific notation: ' + mantissa.toFixed(2) + ' x 10^' + exponent);
}

const randomGravity = (a, b, c) => {
  gravity(a, b, c);
}

function ranNum(min, max) {
  return Math.random() * (max - min) + min;
}

function arrayReader(arr) {
  console.log("Size of array: " + arr.length);
  console.log("First element: " + arr[0]);
  console.log("Last element: " + arr[arr.length - 1]);
  console.log("Random element: " + arr[ranNum(0, arr.length - 1)]);
  arr.sort();
  console.log("Sorted array: " + arr);
  arr.push("New Element");
  console.log("Array after adding new element: " + arr);
  arr.push("1");
  console.log("Array after adding another element: " + arr);
}

function arrayMaker(type, size, firstElement) {
  if(type == "String") {
    let myArray = Array.from({ length: size }, (_, i) => firstElement + ' ' + (i + 1));
    arrayReader(myArray);
  } else if(type == "Number") {
    let myArray = Array.from({ length: size }, (_, i) => firstElement);
    arrayReader(myArray);
  } else {
    let myArray = Array.from({ length: size }, (_, i) => (type) + ' ' + (firstElement + i));
    arrayReader(myArray);
  }
}

function something(){
const randomArray = Array.from({ length: 10 }, () => Math.round(ranNum(29, 87)));
maxDistance = 0;
for (let i = 0; i < randomArray.length; i++) {
  for (let j = i + 1; j < randomArray.length; j++) {
    const distance = Math.abs(randomArray[i] - randomArray[j]);
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }
}
console.log(randomArray);
console.log("Maximum distance: " + maxDistance);
for (let i = randomArray.length - 1; i >= 0; i--) {
  randomArray[i] = randomArray[i] ** 2;
}
console.log(randomArray);

a = randomArray[1]; 
for (let i = randomArray.length - 1; i >= 0; i--) {
  if(randomArray[i] > a) {
    a = randomArray[i];
  }
}
console.log("Largest number: " + a);

randomArray.filter(num => num > a / 2).forEach(num => console.log("Bigger than half of " + a + ": " + num));

console.log("Sum of all numbers: " + randomArray.reduce((sum, num) => sum + num, 0));

randomArray.forEach(element => {
  console.log("Element: " + element);
});
}

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
    introduce() {
    console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old and I work as a " + this.occupation + ".");
  }
  getOccupation() {
    return this.occupation;
  }
  getAge() {
    return this.age;
  }
  getName() {
    return this.name;
  }
}

const personArray = [
  new Person("Frank", 27, "Analyst"),
  new Person("Alice", 30, "Engineer"),
  new Person("Bob", 25, "Designer"),
  new Person("Charlie", 35, "Teacher"),
  new Person("Judy", 33, "Doctor"),
  new Person("David", 28, "Developer"),
  new Person("Grace", 29, "Consultant"),
  new Person("Heidi", 31, "Architect"),
  new Person("Ivan", 26, "Scientist"),
  new Person("Eve", 32, "Manager"),
];



// something();
// gravity (5.972e24, 7.348e22, 384400000); // Earth and Moon
// randomGravity(ranNum(1e20, 1e28), ranNum(1e20, 1e30), ranNum(1e8, 1e9)); // Random masses and distance
// arrayMaker("String", 10, "Cheeseburger");
//main();

