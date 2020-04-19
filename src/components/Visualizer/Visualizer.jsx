import React from 'react';
import './Visualizer.css';

export default function Visualizer(props) {
  const {array} = props;

  return (
    <main className="container">
      {array.map((value, index) => (
        <div
          className="element"
          key={`element_${index}`}
          title={value}
          style={{height: value * 3}}
        />
      ))}
    </main>
  );
}
