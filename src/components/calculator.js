import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  Calculation = (e) => {
    const output = calculate(this.state, e.target.textContent);
    this.setState(output);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="calculatorContainer flex">
        <div className="display" type="button">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator">
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>AC</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>+/-</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>%</button>
          <button type="button" className="colorButtons flex" onClick={this.Calculation}>÷</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>7</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>8</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>9</button>
          <button type="button" className="colorButtons flex" onClick={this.Calculation}>x</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>4</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>5</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>6</button>
          <button type="button" className="colorButtons flex" onClick={this.Calculation}>-</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>1</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>2</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>3</button>
          <button type="button" className="colorButtons flex" onClick={this.Calculation}>+</button>
          <button type="button" className="bigButton flex" onClick={this.Calculation}>0</button>
          <button type="button" className="simpleButtons flex" onClick={this.Calculation}>.</button>
          <button type="button" className="colorButtons flex" onClick={this.Calculation}>=</button>

        </div>
      </section>
    );
  }
}
export default Calculator;
