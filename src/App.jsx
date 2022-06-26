import React from 'react';
import './App.css';
import HomePage from './BMICalculator/HomePage'

function App() {
  const handleClick = () => {
    console.log('hello')
  }
  return (
    <main>
       <HomePage /> 
    </main>
  );
}

export default App;