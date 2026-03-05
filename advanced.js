function firstPromise() {

const myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        resolve(randomNumber);
    } else {
        reject(new Error('Random number is greater than or equal to 0.5: '));
    }
});

myPromise
  .then((number) => {
    console.log('Resolved with number: ' + number);
  })
  .catch((error) => {
    console.error('Rejected with error: ' + error.message);
  });
  //this is a simple promise that resolves if the random number is less than 0.5 and rejects otherwise. The .then() method handles the resolved value, while the .catch() method handles any errors that occur during the promise execution.
}

firstPromise();

function pausePromise(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Paused for ' + duration + ' seconds');
    }, duration * 1000);
  });
}

const myError = new Error('It ain\'t work.');

pausePromise(10)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error('Error occurred: ' + error.message);
  });
    //This function creates a promise that resolves after a specified duration (in seconds). The setTimeout function is used to delay the resolution of the promise, and the .then() method is used to handle the resolved message once the pause is complete. If any errors occur during the execution, they will be caught and logged using the .catch() method.

pausePromise(5)
  .then((message) => {
    console.log(message);
    })
    .catch((myError) => {
    console.error(myError);
  });

const myNewPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        resolve('Promise succeeded!');
    } else {
        reject(new Error('Promise failed!'));
    }
});

myNewPromise
    .then((message) => {
        console.log('Success: ' + message);
    })
    .then(() => {
      return new Promise((resolve) => {
        const result = 5 + 3;
        console.log('Addition result: ' + result);
        resolve(result);
      });
    })
    .then((previousResult) => {
      const fibonacci = [0, 1];
      for (let i = 2; i < 5; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
      }
      console.log('First 5 Fibonacci numbers: ' + fibonacci.join(', '));
    })
    .then(() => {
      console.log('My favorite movie is Tarzan!');
    })
    .catch((error) => {
      console.error('Error in chain: ' + error.message);
    });
    
async function asyncFunction() {
  try {
    const result = await pausePromise(3);
    console.log(result);
    console.log("I love the movie tarzan!");
  } catch (error) {
    console.error('Error in async function: ' + error.message);
  }
}

function moviePromise(movie) {
  return new Promise((resolve, reject) => {
    if (movie.toLowerCase() === 'tarzan') {
      resolve('I love the movie ' + movie + '!');
    } else {
      reject(new Error('I don\'t like the movie ' + movie + '.'));
    }
  });
}

async function asyncronous() {
  try {
    const message = "I am asyncronous!";
    console.log(message);
  }
  catch (error) {
    console.error('Error in asyncronous function: ' + error.message);
  }
}

asyncFunction();
console.log(moviePromise('Tarzan'));
//async is sequential and has a dependency on the previous promise to be resolved for the next condition to be executed, the promise just resolves and then prints the result. 

asyncronous()
  .then(() => {
    console.log("succesfully executed async function");
  })
  .catch((error) => {
    console.error('Error in async function: ' + error.message);
  });

const movie = new moviePromise('Tarzan')

function getRandomArbitrary(min, max) {
  const num = Math.random() * (max - min) + min;
  return parseFloat(num.toFixed(0));
}

// Example: Get a random decimal number between 5 and 10
console.log(getRandomArbitrary(5, 10));


const newArray = []; {
  for (let i = 0; i < 9; i++) {
    newArray.push(getRandomArbitrary(1, 77));
  }
}

async function checkArray() {
  try {
    const arrayMessage = "Here is the array of random numbers: " + newArray.join(', ');
    console.log(arrayMessage);
  } catch (error) {
    console.error('Error in checkArray function: ' + error.message);
  }
  try {
    const numsGreaterThan70 = newArray.filter(num => num > 70);
    console.log('Numbers greater than 70: ' + numsGreaterThan70.join(', '));
  }
  catch (error) {
    console.error('Error in filtering numbers: ' + error.message);
  }
}

checkArray();