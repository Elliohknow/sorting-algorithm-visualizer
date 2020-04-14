import React from 'react';
import { bubbleSort } from './algorithms/BubbleSort';
import { heapSort } from './algorithms/HeapSort';
import { insertionSort } from './algorithms/InsertionSort';
import { mergeSort } from './algorithms/MergeSort';
import { quickSort } from './algorithms/QuickSort';

export const CTX = React.createContext();

const initialState = {
	array: [],
	algorithm: '',
	options: [
		{ value: 'merge', name: 'algorithms' },
		{ value: 'quick', name: 'algorithms' },
		{ value: 'heap', name: 'algorithms' },
		{ value: 'insertion', name: 'algorithms' },
		{ value: 'bubble', name: 'algorithms' },
	],
};
export default function Store(props) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<CTX.Provider value={{ state, dispatch }}>
			{props.children}
		</CTX.Provider>
	);
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
				array: quickSort(state.array),
			};
		case 'heap':
			return {
				...state,
				algorithm: 'heap',
				array: heapSort(state.array),
			};
		case 'insertion':
			return {
				...state,
				algorithm: 'insertion',
				array: insertionSort(state.array),
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