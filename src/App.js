import React from 'react';
import { mergeSort } from './algorithms/MergeSort';
import './App.css';
import ActionBar from './components/ActionBar/ActionBar';
import Visualizer from './components/Visualizer/Visualizer';

const initialState = {
	array: [],
	algorithm: '',
};

export default function App() {
	// const [array, setArray] = React.useState([]);
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

function resetArray() {
	const array = [];

	for (let i = 0; i < 100; i++) {
		array.push(randomNum(20, 1));
	}
	// setArray(array);
	return array;
}

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
			};
		case 'heap':
			return {
				...state,
				algorithm: 'heap',
			};
		case 'bubble':
			return {
				...state,
				algorithm: 'bubble',
			};
		default:
			return state;
	}
}