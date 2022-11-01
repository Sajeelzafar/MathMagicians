const buttons = () => (
  <section className="calculatorContainer flex">
    <div className="display">0</div>
    <div className="calculator">
      <ul className="buttons">
        <li className="simpleButtons flex">AC</li>
        <li className="simpleButtons flex">+/-</li>
        <li className="simpleButtons flex">%</li>
        <li className="colorButtons flex">/</li>
        <li className="simpleButtons flex">7</li>
        <li className="simpleButtons flex">8</li>
        <li className="simpleButtons flex">9</li>
        <li className="colorButtons flex">X</li>
        <li className="simpleButtons flex">4</li>
        <li className="simpleButtons flex">5</li>
        <li className="simpleButtons flex">6</li>
        <li className="colorButtons flex">-</li>
        <li className="simpleButtons flex">1</li>
        <li className="simpleButtons flex">2</li>
        <li className="simpleButtons flex">3</li>
        <li className="colorButtons flex">+</li>
        <li className="bigButton flex">0</li>
        <li className="simpleButtons flex">.</li>
        <li className="colorButtons flex">=</li>
      </ul>

    </div>
  </section>
);

export default buttons;
