// type predicate function

// syntax
// function isX (param: any): param is X {

// }

type Cat = {
  meow: () => void;
};

type Dog = {
  bark: () => void;
};

type CutePet = Cat | Dog;

const animal: CutePet =
  Math.random() > 0.5
    ? { meow: () => console.log("meow") }
    : { bark: () => console.log("bark") };

function isCat(animal: CutePet): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

if (isCat(animal)) {
  animal.meow();
} else {
  animal.bark();
}
