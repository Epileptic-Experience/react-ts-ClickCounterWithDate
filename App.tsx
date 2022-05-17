import * as React from 'react';
import './style.css';

export default function App() {
  const [Count, setCount] = React.useState(0);
  const [date, setDate] = React.useState(new Date().toLocaleString());

  const addCount = () => {
    setCount(Count + 1);

    setDate(new Date().toLocaleString());
  };

  return (
    <div>
      <div>Clicks:{Count}</div>
      <p>last click was {date}</p>
      <button onClick={addCount}>+</button>
    </div>
  );
}
