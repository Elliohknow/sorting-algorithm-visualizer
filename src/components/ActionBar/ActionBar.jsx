import React from 'react';
import './ActionBar.css';

export default function ActionBar(props) {
	const { dispatch } = props;
	return (
		<div className="action-bar">
			<button className="button" onClick={() => dispatch({type:'reset'})}>reset array</button>
			<button className="button" onClick={() => dispatch({type:'merge'})}>merge sort</button>
			<button className="button" onClick={() => dispatch({type:'quick'})}>quick sort</button>
			<button className="button" onClick={() => dispatch({type:'heap'})}>heap sort</button>
			<button className="button" onClick={() => dispatch({type:'insertion'})}>insertion sort</button>
			<button className="button" onClick={() => dispatch({type:'bubble'})}>bubble sort</button>
		</div>
	);
}
// export default ActionBar;