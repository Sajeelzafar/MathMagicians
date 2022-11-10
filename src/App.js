// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator'; // Import Calculator component
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.PureComponent {
  render() {
    // reference as a js object
    return (
      <>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/" element={<Calculator />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
