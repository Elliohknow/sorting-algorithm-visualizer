import React from 'react';
import './Visualizer.css';

export default function Visualizer() {
	const [array, setArray] = React.useState([]);

	React.useEffect(() => resetArray(), []);

	const resetArray = () => {
		const array = [];
		for (let i = 0; i < 20; i++) {
			array.push(randomNum(20, 1));
		}
		setArray(array);
	} 

	return (
		<div className="container">
			{array.map((value, index) => (
				<div className="element" key={`element_${index}`} style={{ borderBottomWidth: value*20}}>
					{value}
				</div>
			))}
		</div>
	);
}

// get random int between max (inclusive) and min 
function randomNum(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}