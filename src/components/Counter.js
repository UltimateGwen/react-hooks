import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <input
        value={counter}
        type="number"
        onChange={e => setCounter(parseInt(e.target.value))}
      />
      <p>The counter is at : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>> +1</button>
      <button onClick={() => setCounter(counter - 1)}>> -1</button>
    </div>
  );
}

export default Counter;
