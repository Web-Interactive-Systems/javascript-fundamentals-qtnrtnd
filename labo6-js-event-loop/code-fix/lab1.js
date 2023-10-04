// TODO: Fix the errors in the functions below!

const functions = {
  checkEventLoop() {
    console.log('this is the start');

    setTimeout(() => {
      console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0

    setTimeout(() => {
      console.log('Callback 2: this is a msg from call back');
    }, 0);

    console.log('this is the end');
  },

  executeAfterDelay(callback, delay) {
    // use setTimeout
  },

  executeInOrder(callback1, callback2) {},

  stopInterval(intervalId, callback) {},

  executePromise(callback) {
    const promise = new Promise((resolve) => {
      const result = {};
      resolve(result);
    });

    setImmediate(() => {
      promise.then();
    });
  },

  executePromises(callback) {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve('second'), 1000)),
      new Promise((resolve) => setTimeout(() => resolve('third'), 500)),
      new Promise((resolve) => setTimeout(() => resolve('first'), 250)),
    ];

    Promise.all(promises).then(callback);
  },
};

module.exports = functions;
