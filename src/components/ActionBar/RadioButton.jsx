import React from 'react';

const RadioButton = ({ value, name, className, dispatch }) => (
	<button 
		type="submit"
		className={className}
		value={value}
		name={name}
		onClick={()=>dispatch({type:value})}
	>{value} sort
	</button>
);
export default RadioButton;
// const [toggleState, setToggle] = useToggle('off');
	// const { 
		// state, 
	// 	dispatch 
	// } = React.useContext(CTX);
	//------------------------------------------------------
// function useToggle(initialState = 'off') {
//   const [toggleState, setToggleState] = React.useState(initialState);

//   function toggler() {
// 		setToggleState(toggleState === 'off' ? 'on' : 'off');
//   }

//   return [toggleState, toggler];
// }
//----------------------------------------------------------
// {/* <React.Fragment>
// 	{/* <label 
// 				htmlFor={value}
// 				className={`radio-label ${toggleState}`}
// 			>{value} sort</label> */}
// 	{/* <input
// 				type="radio"
// 				className="radio-input"
// 				id={value}
// 				name={name}
// 				value={value}
// 				onChange={(e) => {
// 					e.preventDefault();
// 					state.algorithm === value ? setToggle('on') : setToggle('off'); 
// 					dispatch({ type: value });
// 				}}
// 			/> */}
// 	<button type="submit" className={className} value={value} name={name} onClick={() => dispatch({ type: value })}>
// 		{value} sort
// 	</button>
// </React.Fragment>; */}