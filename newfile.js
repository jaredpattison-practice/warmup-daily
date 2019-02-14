'use strict';

let numbers = [1,2,3,4,5,6,7,8,9,10];

// ---------------------------------------------------- //

function forLoop(arr) {
  for(let i = 0; i <  arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) { 
  let array = [...arr];
  while(array.length) {
    console.log(array.shift());
  }
}

function map(arr,cb) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

function filter(arr, cb) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(cb(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function reduce(arr, cb, newThing) {
  for(let i = 0; i < arr.length; i++) {
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

// ---------------------------------------------------- //

console.log('forLoop()');
forLoop(numbers);
console.log('------------------\n\n');

console.log('whileLoop()');
whileLoop(numbers);
console.log('------------------\n\n');

console.log('map()');
let squares = map(numbers, (val=>val * val));
console.log({squares});
console.log('------------------\n\n');

console.log('filter()');
let odds = filter(numbers, (val => !!(val % 2)));
console.log({odds});
console.log('------------------\n\n');

console.log('reduce()');
let sum = reduce(numbers, (acc,num) => {
  acc += num;
  return acc;
},0);
console.log({sum});

const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

// ---------------------------------------------------- //

const state = {people, stuff};
let newPeople = ['Loly', ...people, 'Lilly'];
const newStuff = {...stuff, cars:[...stuff.cars, 'trucky']};
const newState = {...state, people: ['Lolly', ...people, 'Lilly'], stuff:{...stuff, cars:['trucky']}};

// ---------------------------------------------------- //

console.log('------------------\n\n');

console.log({people});
console.log('------------------\n\n');

console.log({newPeople});
console.log('------------------\n\n');

console.log({stuff});
console.log('------------------\n\n');

console.log({newStuff});
console.log('------------------\n\n');

console.log({state});
console.log('------------------\n\n');

console.log({newState});
console.log('------------------\n\n');