function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo") {
      found(arr.indexOf(element));   // execute callback
    }
  })
}

function actionWhenFound(arg) {
  console.log("Found Waldo at index " + arg + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);