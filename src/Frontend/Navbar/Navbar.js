import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex justify-center py-8'>
			<li className="nav-item">
                <Link className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-lg capitalize font-semibold" to='/' > Breakfast </Link>
        	</li>
			<li className="nav-item">
                <Link className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-lg capitalize font-semibold" to='/' > Lunch </Link>
        	</li>
			<li className="nav-item">
                <Link className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-lg capitalize font-semibold" to='/' > Dinner </Link>
        	</li>
		</nav>
	);
};

export default Navbar;