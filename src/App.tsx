import './tailwind.css';
import Log from './components/Log';
import MonthlyBudget from './components/MonthlyBudget';
import WeeklyBudget from './components/WeeklyBudget';
import Month from './components/Month';

function App() {
  return (
    <div className='mainContainer flex flex-col items-center justify-around h-screen border border-red-500'>
      <Month />
      <div className='budgetContainer flex gap-10 justify-center w-screen border border-yellow-500'>
        <WeeklyBudget />
        <MonthlyBudget />
      </div>
      <Log/>
    </div>
  );
}

export default App;
