import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [initialstate, finalstate] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const clicked = (e) => {
    finalstate(calculate(initialstate, e.target.textContent));
  };

  return (
    <section className="calculatorContainer flex">
      <div className="display">
        {initialstate.total}
        {initialstate.operation}
        {initialstate.next}
      </div>
      <div className="calculator">
        <button type="button" className="simpleButtons flex" onClick={clicked}>AC</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>+/-</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>%</button>
        <button type="button" className="colorButtons flex" onClick={clicked}>÷</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>7</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>8</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>9</button>
        <button type="button" className="colorButtons flex" onClick={clicked}>x</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>4</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>5</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>6</button>
        <button type="button" className="colorButtons flex" onClick={clicked}>-</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>1</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>2</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>3</button>
        <button type="button" className="colorButtons flex" onClick={clicked}>+</button>
        <button type="button" className="bigButton flex" onClick={clicked}>0</button>
        <button type="button" className="simpleButtons flex" onClick={clicked}>.</button>
        <button type="button" className="colorButtons flex" onClick={clicked}>=</button>

      </div>
    </section>
  );
};
export default Calculator;
