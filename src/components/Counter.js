import React from 'react'

function Counter({number, diff, onIncrease, onDecrease, onSetDiff}) {
  const onChange = (e) => {
    //e.target.value는 문자열입니다
    onSetDiff(parseInt(e.target.value));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type='number' value={diff} min='1' onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter