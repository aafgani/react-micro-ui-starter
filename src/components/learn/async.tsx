// Async/Await
// Async = makes a function return a promise
// Await = makes a async function wait for a promise

// Allow you to write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walked the dog!");
      } else {
        reject("You did not walk the dog.");
      }
    }, 1000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("You cleaned the kitchen!");
      } else {
        reject("You did not clean the kitchen.");
      }
    }, 1000);
  });
}

export default async function DoChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    console.log("You finished all the chores!");
  } catch (error) {
    console.error("Error:", error);
  }
}
