import React from 'react';
import './tailwind.css';
import './App.scss';

function App() {
  return (
    <div className="mainContainer">
      <div className='month'>
        <h1>December</h1>
      </div>
      <div className="budgetContainer"></div>
      <div className="logs"></div>
    </div>
  );
}

export default App;
