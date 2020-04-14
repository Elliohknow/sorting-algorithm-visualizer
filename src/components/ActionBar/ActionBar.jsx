import React from 'react';
import { CTX } from '../../Store';
import './ActionBar.css';
import RadioButton from './RadioButton';

export default function ActionBar() {
	const { state, dispatch } = React.useContext(CTX);

	return (
		<div className="">
			<form
				className="action-bar"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<button
					id="reset-array"
					className="button"
					onClick={() => dispatch({type: 'reset'})}
				>reset array</button>
				{state.options.map((option, index) => (
					<RadioButton
						dispatch={dispatch}
						key={`radio_button_${index+1}`}
						name={option.name}
						value={option.value}
						className={`button ${state.algorithm !== option.value ? 'off': 'on'}`}
					/>
				))}
			</form>
		</div>
	);
}
