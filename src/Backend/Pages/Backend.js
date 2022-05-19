import React from 'react';
import { Outlet } from 'react-router-dom';
import AddCategory from '../Categories/AddCategory';
import Sidebar from '../Sidebar/Sidebar';
const Backend = () => {
	return (
		<main className='h-screen'>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className='sidebar w-20'>
					<Sidebar></Sidebar>
				</div>
			
				<div className="outlet w-full">
					<Outlet></Outlet>
				</div>
			</div>
		</main>
	);
};

export default Backend;