import React from 'react';
import Remaining from './components/Remaining/Remaining';
import Budget from './components/Budget/Budget';
import ExpenseTotal from './components/ExpenseTotal/ExpenseTotal';
import ExpenseList from './components/ExpenseList/ExpenseList';

function App() {
	return (
		<div className='container'>
			<h1 className='mt-3'>Budget Planner</h1>
			<div className='row mt-3'>
				<div className='col-sm'>
					<Budget />
				</div>
				<div className='col-sm'>
					<Remaining />
				</div>
				<div className='col-sm'>
					<ExpenseTotal />
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
