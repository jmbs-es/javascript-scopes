const screamWarrior = () => {
  var warrior1 = "Ninja";
  let warrior2 = "Samurai";

  return `Our warriors are ${warrior1} and ${warrior2}`;
};

const screamWarrior2 = () => {
  var warrior1 = "Viking";
  let warrior2 = "Soldier";

  return `Our warriors are ${warrior1} and ${warrior2}`;
};

console.log(screamWarrior2(), screamWarrior());

// warrior1 & warrior2 aren't available globally
// console.log(warrior1, warrior2);

/**
 * challenge you to code an example of a local variable.
 *
 * So here's the challenge.
 *
 * Define a function that console logs both a local and a global variable.
 *
 * But instead of working with strings, this time multiply two numbers which a number of warriors in an army.
 *  And in your code, test that the local variables are indeed not
 * So good luck and I'll see you next.
 */

var myGlobalVar = 2;

const multiplyNumbers = () => {
  let myLocalVar = 12;
  console.log(`number of warriors in an army: ${myGlobalVar * myLocalVar}`);
};

multiplyNumbers();

// test that the local variables are not  available globally.

// index.js:41 Uncaught ReferenceError: myLocalVar is not defined
// console.log(myLocalVar);
