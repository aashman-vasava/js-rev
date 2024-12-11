// callback hell = situation in js where callbacks are nested within other callbacks to the degree where the code is difficult to read.
// it starts forming pyramid
//          Old pattern to handle asynchrounous functions.
//          Use promises + ansync/await to avoit callback hell.

function task1(callback) {
  setTimeout(() => {
    console.log("task 1 completed");
    callback();
  }, 3000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("task 2 completed");
    callback();
  }, 1500);
}
function task3(callback) {
  setTimeout(() => {
    console.log("task 3 completed");
    callback();
  });
}
function task4(callback) {
  setTimeout(() => {
    console.log("task 4 completed");
    callback();
  }, 4000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => console.log("all tasks completed"));
    });
  });
});
