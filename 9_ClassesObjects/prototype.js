// if you aware of oop you must also know inheretance
// you can do that using prototype

let car = {
  run: () => {
    console.log("run");
  },
};

let fourByFour = {
  offRoad: () => {
    console.log("going off road");
  },
};

let toyota = {
  Zx: () => {
    console.log("its a toyota v8");
  },
  // old way 1
  // inhereted functions from fourByFour
  // __proto__ : fourByFour
};

// old way 2
// inhereted functions from fourByFour
toyota.__proto__ = fourByFour

// toyota.Zx();
// toyota.offRoad();

// modern way

// Object.setPrototypeOf(fourByFour, car)
// fourByFour.run()
