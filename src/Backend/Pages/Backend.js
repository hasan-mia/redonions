import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Pages.css'
const Backend = () => {
	return (
		<main className='backend h-screen'>
			<div className='sidebar'>
				<Sidebar></Sidebar>
			</div>
			
			<div className="outlet">
				<Outlet></Outlet>
			</div>
		</main>
	);
};

export default Backend;