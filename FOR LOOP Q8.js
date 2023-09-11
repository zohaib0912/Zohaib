const a = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter the item that is in array: ");
let found = false;
let index = -1;
for (let i = 0; i < a.length; i++) {
  if (userInput === a[i]) {
    found = true;
    index = i;
  }
}
if(found) {
  console.log(userInput + " is available at index " + index + " in our bakery.");
}else {
  console.log("We are sorry. " + userInput + " is not available in our bakery.");
}