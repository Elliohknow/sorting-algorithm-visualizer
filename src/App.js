import React from 'react';
import { bubbleSort } from './algorithms/BubbleSort';
import { heapSort } from './algorithms/HeapSort';
import { insertionSort } from './algorithms/InsertionSort';
import { mergeSort } from './algorithms/MergeSort';
import { quickSort } from './algorithms/QuickSort';
import './App.css';
import ActionBar from './components/ActionBar/ActionBar';
import Visualizer from './components/Visualizer/Visualizer';

const initialState = {
	array: [],
	algorithm: '',
};

export default function App() {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const { array, algorithm } = state;

	React.useEffect(() => dispatch({type: 'reset'}), []);
	
  return (
    <div className="App">
      <Visualizer array={array} algorithm={algorithm} />
			<ActionBar dispatch={dispatch} />
    </div>
  );
}

// get random int between max (inclusive) and min
function randomNum(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
// make a new array 
function resetArray() {
	const array = [];

	for (let i = 0; i < 160; i++) {
		array.push(randomNum(160, 1));
	}
	
	return array;
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
				array: mergeSort(state.array),
			};
		case 'quick':
			return {
				...state,
				algorithm: 'quick',
				array: quickSort(state.array)
			};
		case 'heap':
			return {
				...state,
				algorithm: 'heap',
				array: heapSort(state.array)
			};
		case 'insertion':
			return {
				...state,
				algorithm: 'insertion',
				array: insertionSort(state.array)
			};
		case 'bubble':
			return {
				...state,
				algorithm: 'bubble',
				array: bubbleSort(state.array),
			};
		default:
			return state;
	}
}