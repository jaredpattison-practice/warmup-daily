'use strict';

let arr = [];

for(let i = 0; i < 10; i++) {
  arr.push(i);
}

function forLoop(arr) {
  
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let i = 0;
  
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

function map (arr, cb) {
  let newArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    newArr.push( cb(arr[i], i) );
  }
  return newArr;
}

function filter(arr, cb) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if( cb(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function reduce(start, arr, cb) {
  let accumulator = start;
 
  for(let i = 0; i < arr.length; i++) {
    accumulator += cb(start, arr[i], i, arr);
  }
  return accumulator;
}const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = { people: [...people], ...stuff};

let newPeople = [ 'Odie', ...people, 'Garfield'];
const newStuff = { ...stuff, cars: [ ...stuff.cars, 'Porche']};
let newState = { ...state, people: ['Odie', ...state.people, 'Garfield'], stuff: [ ...stuff.cars, 'Porche']};

console.log('people', people);
console.log('stuff', stuff);
console.log('state', state);
console.log('newPeople', newPeople);
console.log('newStuff', newStuff);
console.log('newState', newState);