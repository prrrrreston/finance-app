import React from 'react';
import './tailwind.css';

function App() {
  return (
    <div className="mainContainer flex flex-col items-center justify-around h-screen border border-red-500">
      <div className='month flex border border-green-500'>December</div>
      <div className="budgetContainer flex border border-yellow-500">
        <div>Weekly budget</div>
        <div>Monthly Budget</div>
      </div>
      <div className="logs border border-blue-500">Log</div>
    </div>
  );
}

export default App;
