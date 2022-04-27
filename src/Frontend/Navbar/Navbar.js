import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex justify-center py-8'>
			<li className="nav-item">
                <Link to='/breakfasts' className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-xl capitalize font-semibold"> Breakfast </Link>
        	</li>
			<li className="nav-item">
                <Link to="/dinners" className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-xl capitalize font-semibold"> Lunch </Link>
        	</li>
			<li className="nav-item">
                <Link to='/lunches' className="px-2 py-2 flex items-center hover:border-b-2 border-red-600 hover:text-red-600 text-xl capitalize font-semibold"> Dinner </Link>
        	</li>
		</nav>
	);
};

export default Navbar;