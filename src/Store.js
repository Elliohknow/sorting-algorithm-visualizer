import React from 'react';
import {bubbleSort} from './algorithms/BubbleSort';
import {heapSort} from './algorithms/HeapSort';
import {insertionSort} from './algorithms/InsertionSort';
import {mergeSort} from './algorithms/MergeSort';
import {quickSort} from './algorithms/QuickSort';
import ArrayElement from './ArrayElement';

export const CTX = React.createContext();

const initialState = {
  array: [],
  algorithm: '',
  options: [
    {value: 'merge', name: 'algorithms'},
    {value: 'quick', name: 'algorithms'},
    {value: 'heap', name: 'algorithms'},
    {value: 'insertion', name: 'algorithms'},
    {value: 'bubble', name: 'algorithms'},
  ],
};
export default function Store(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <CTX.Provider value={{state, dispatch}}>{props.children}</CTX.Provider>;
}
// get random int between max (inclusive) and min
function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// create a new, random array
function resetArray() {
  const array = [];
  for (let i = 0; i < 160; i++) {
    let element = new ArrayElement(randomNum(160, 1), i);
    array.push(element);
  }
  return array;
}

// sort array with chosen algorithm
function algoSort(array, sortingAlgorithm) {
  const sortedWithJSBuiltin = array.slice().sort((a, b) => a.value - b.value);
  const sortedWithChosenAlgorithm = sortingAlgorithm(array);
  if (!checkArrays(sortedWithJSBuiltin, sortedWithChosenAlgorithm)) {
    console.log('Failed! Used builtin JS Array.prototype.sort() method instead. Try again, you viper!');
    return sortedWithJSBuiltin;
  } else {
    console.log('Success! The chosen algorithm worked!');
    return sortedWithChosenAlgorithm;
  }
}
// check to see if arrays are equal
function checkArrays(first, second) {
  if (first?.length !== second?.length) {
    return false;
  }
  for (let i = 0; i < second.length; i++) {
    if (first[i].value !== second[i].value) {
      return false;
    }
  }
  return true;
}
// state reducer
function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {
        ...state,
        array: resetArray(),
      };
    case 'merge':
      return {
        ...state,
        algorithm: 'merge',
        array: algoSort(state.array, mergeSort),
      };
    case 'quick':
      return {
        ...state,
        algorithm: 'quick',
        array: algoSort(state.array, quickSort),
      };
    case 'heap':
      return {
        ...state,
        algorithm: 'heap',
        array: algoSort(state.array, heapSort),
      };
    case 'insertion':
      return {
        ...state,
        algorithm: 'insertion',
        array: algoSort(state.array, insertionSort),
      };
    case 'bubble':
      return {
        ...state,
        algorithm: 'bubble',
        array: algoSort(state.array, bubbleSort),
      };
    default:
      return state;
  }
}
