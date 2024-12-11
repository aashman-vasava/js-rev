// Promise = An object that manages asynchrounous operations.
// wrap a Promise object around {asynchrounous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED

//  new Promise((resolve, reject) => { asynchrounous code})

// DO THIS CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// 10h:39M
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("you walk the dog");
      } else {
        reject("you didn't walk the dog");
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("you clean the kitchen");
      } else {
        reject("you didn't clean the kitchen");
      }
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashOut = false;

      if (trashOut) {
        resolve("you take out trash");
      } else {
        reject("you didn't take out trash");
      }
    }, 500);
  });
}

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => {
//       console.log("you finished chores");
//     });
//   });
// });

// using promises
// by me..
// walkDog().then((value) => {
//   console.log(value);
//   return cleanKitchen().then((value) => {
//     console.log(value);
//     return takeOutTrash().then((value) => {
//       console.log(value);
//     });
//   });
// });

// // video
// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => console.log(value))
//   .catch((err) => console.error(err));

// Async/Await = async - makes a function return a promise
// await - makes as async function wait for a promise
//
// Allows you write asynchrounous code in a synchrounous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("you finished all the chores");
  } catch (err) {
    console.error(err);
  }
}

doChores();
