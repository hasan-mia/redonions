import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Pages.css'
const Backend = () => {
	return (
		<main className='h-screen flex flex-nowrap ml-0 lg:ml-8'>
			<div className='sidebar w-12/12 md:w-6/12 lg:w-2/12'>
				<Sidebar></Sidebar>
			</div>
			
			<div className="outlet mx-2 lg:mx-10 w-12/12 md:w-6/12 lg:w-10/12">
				<Outlet></Outlet>
			</div>
		</main>
	);
};

export default Backend;