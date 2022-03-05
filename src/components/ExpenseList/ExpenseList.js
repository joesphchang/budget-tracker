import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

function ExpenseList() {
	const expenses = [
		{
			id: 12,
			name: 'Shopping',
			cost: 50,
		},
		{
			id: 15,
			name: 'Holiday',
			cost: 300,
		},
		{
			id: 13,
			name: 'Transportation',
			cost: 70,
		},
		{
			id: 14,
			name: 'Fuel',
			cost: 40,
		},
		{
			id: 16,
			name: 'Child Care',
			cost: 500,
		},
	];
	return (
		<ul className='list-group mt-3 mb-3'>
			{expenses.map((expense) => (
				<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
	);
}

export default ExpenseList;
