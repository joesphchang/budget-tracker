import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className='bg bg-primary bg-pill mr-3 text-light'>
					${props.cost}
				</span>
				<TiDelete size='1.5em' />
			</div>
		</li>
	);
};

export default ExpenseItem;
