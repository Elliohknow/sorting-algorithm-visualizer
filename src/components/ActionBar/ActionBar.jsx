import Button from '@material-ui/core/Button';
import React from 'react';
import {CTX} from '../../Store';
import './ActionBar.css';

export default function ActionBar() {
  const {state, dispatch} = React.useContext(CTX);

<<<<<<< HEAD
  return (
    <div className="action-bar">
      <Button
        id="reset-array"
        color="primary"
        variant="contained"
        className="button"
        onClick={() => dispatch({type: 'reset'})}>
        reset array
      </Button>
      {state.options.map((option, index) => (
        <Button
          variant="contained"
          className="button"
          onClick={() => dispatch({type: option.value})}
          key={`radio_button_${index + 1}`}
          name={option.name}
          value={option.value}
          color={`${state.algorithm !== option.value ? 'primary' : 'secondary'}`}>
          {option.value} sort
        </Button>
      ))}
    </div>
  );
=======
	return (
		<div className="action-bar">
			<Button
				id="reset-array"
				color="primary"
				variant="contained"
				className="button"
				onClick={() => dispatch({type:'reset'})}
			>reset array</Button>
			{state.options.map((option, index) => (
				<Button
					variant="contained"
					className="button"
					onClick={() => dispatch({type:option.value})}
					key={`radio_button_${index+1}`}
					name={option.name}
					value={option.value}
					color={`${state.algorithm !== option.value ? 'primary' : 'secondary'}`}
				>{option.value} sort</Button>
			))}
		</div>
	);
>>>>>>> 41d82bffeb9416ec03936a67206360ff76709eee
}
