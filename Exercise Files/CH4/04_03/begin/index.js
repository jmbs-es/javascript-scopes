let warrior1 = "Ninja";
const warrior2 = "Viking";
console.log(warrior1, warrior2);

// this will return an error
warrior1 = "Samurai";
console.log(warrior1);

const screamWarrior = () => {
  let warrior4 = "Canon shooter";
  if (warrior2 === "Viking") {
    let warrior3 = "Infantry Soldier";
    console.log(
      `Our army consists of ${warrior1}, ${warrior2} and ${warrior3}!`
    );
  }
  console.log(warrior4);
};

screamWarrior();

//index.js:22 Uncaught ReferenceError: warrior4 is not defined
// console.log(warrior4);

/**
 *  So here's the new challenge,
 *
 *  first declare an immutable variable in the global scope listing a few warriors and their attributes.
 *
 *  Then in a function,
 * if the attribute of a warrior meets a certain requirement,
 * list that warrior into the console.
 *  Also, constantly log what variables is accessible where so you demonstrate to yourself you understand their scope.
 *
 * Feel free to leverage some of the examples with it today in this course and good luck.
 */

const inmutableWarriors = [
  {
    name: "Sha Lao",
    type: "Ninja",
    weapon: "stick",
    agility: 79,
  },
  {
    name: "Viggo Mortesen",
    type: "Viking",
    weapon: "Steel blade",
    agility: 60,
  },
  {
    name: "Ro Ro",
    type: "Samurai",
    weapon: "Iron fist",
    agility: 82,
  },
];

const warriorRequirement = () => {
  inmutableWarriors.map((warrior) => {
    if (warrior.name === "Ro Ro") {
      console.log(warrior);
    }
  });
};

warriorRequirement();
