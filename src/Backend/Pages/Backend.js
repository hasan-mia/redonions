import React from 'react';
import { Outlet } from 'react-router-dom';
import AddCategory from '../Categories/AddCategory';
import Sidebar from '../Sidebar/Sidebar';
const Backend = () => {
	return (
		<main className='h-screen'>
			<Sidebar></Sidebar>
			
			<Outlet></Outlet>
		</main>
	);
};

export default Backend;