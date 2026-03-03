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
    .catch((error) => {
        console.error('Failure: ' + error.message);
    });