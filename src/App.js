// import logo from './logo.svg';
import React from 'react';
import Calculator from './components/calculator'; // Import Calculator component
import './App.css';

class App extends React.PureComponent {
  render() {
    // reference as a js object
    return (
      <Calculator />
    );
  }
}

export default App;
