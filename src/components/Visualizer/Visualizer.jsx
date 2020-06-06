import React from 'react';
import './Visualizer.css';

export default function Visualizer(props) {
  const {array} = props;

  // React.useEffect(() => {});

  return (
    <main className="container">
      {array.map((value, index) => (
        <div
          className="element"
          key={`element_${index}`}
          id={`${value.idx}`}
          title={value.value}
          style={{height: value.height}}
        />
      ))}
    </main>
  );
}
