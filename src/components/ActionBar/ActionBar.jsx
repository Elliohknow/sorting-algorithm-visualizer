import Button from '@material-ui/core/Button';
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
				<Button
					id="reset-array"
					color="primary"
					variant="contained"
					className="button"
					onClick={() => dispatch({type: 'reset'})}
				>reset array</Button>
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
