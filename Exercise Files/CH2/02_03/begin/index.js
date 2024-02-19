// this array is globally scoped
const warriors = [
  {
    name: "Jujin Take",
    type: "Ninja",
    weapon: "Shuriken",
    agility: 79,
  },
  {
    name: "Viggo Rusen",
    type: "Viking",
    weapon: "Swing blade",
    agility: 60,
  },
  {
    name: "Ro Rake",
    type: "Samurai",
    weapon: "Boken",
    agility: 82,
  },
];

// this functions is globally scoped
const screamWarriors = () => {
  return console.log(warriors);
};

// no issues running this function!
screamWarriors();

/**
 * here's the challenge.
 *
 * I want you to declare an array of warriors that is globally scoped
 *  and then a global function that will log in the const of this list of warriors.
 *
 * If you're familiar with the const and let variables,
 * feel free to use them to declare your variables, and if not, you can use var too.
 *
 * It's not really that important for this exercise, as long as you have all your declarations globally scoped.
 * Good luck!
 */

// Array of warriors gobally scoped defined with const
const myWarriorsArray = [
  {
    name: "Chi chon",
    type: "Ninja",
    weapon: "Shuriken",
    agility: 69,
  },
  {
    name: "Barba Roja",
    type: "Viking",
    weapon: "Swing blade",
    agility: 59,
  },
  {
    name: "Yo Toko Fondo",
    type: "Samurai",
    weapon: "Boken",
    agility: 88,
  },
  {
    name: "Riu",
    type: "Karateka",
    weapon: "Body",
    agility: 95,
  },
];

const logWarriors = () => {
  console.log(myWarriorsArray);
};

logWarriors();

let mySecondWarriorsArray = [
  {
    name: "Chi lu",
    type: "Ninja",
    weapon: "Shuriken",
    agility: 69,
  },
  {
    name: "Cortes",
    type: "Conquistador",
    weapon: "Spanish trabuco",
    agility: 89,
  },
  {
    name: "Chin agua",
    type: "Samurai",
    weapon: "Boken",
    agility: 88,
  },
  {
    name: "Chin na",
    type: "Karateka",
    weapon: "Body",
    agility: 95,
  },
];

const logWarriorsInConsole = (warriorsArray) => {
  console.log(warriorsArray);
};

logWarriorsInConsole(mySecondWarriorsArray);

var myThirdWarriorsArray = [
  {
    name: "One",
    type: "Ninja",
    weapon: "Shuriken",
    agility: 69,
  },
  {
    name: "Two",
    type: "Conquistador",
    weapon: "Spanish trabuco",
    agility: 89,
  },
  {
    name: "Three",
    type: "Samurai",
    weapon: "Boken",
    agility: 88,
  },
  {
    name: "Four",
    type: "Karateka",
    weapon: "Body",
    agility: 95,
  },
];

logWarriorsInConsole(myThirdWarriorsArray);
