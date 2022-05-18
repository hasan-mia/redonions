import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">

			<div className="pt-4 pb-2 px-6">
				<a href="#!">
					<div className="flex items-center">
						<div className="shrink-0">
						<img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar"/>
						</div>
						<div className="grow ml-3">
						<p className="text-sm font-semibold text-blue-600">Jason McCoel</p>
						</div>
					</div>
				</a>
			</div>
			{/* Admin Name */}

			{/* All Sidebar Link */}
			<ul className="relative px-1">
				<li className="relative">
				<Link to="/dashboard" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
					<span className='pr-2'><i className="fas fa-tachometer-alt"></i></span>
					<p>Dashboard</p>
				</Link>
				</li>
				
				<li className="relative" id="sidenavSecEx2">
					<a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
						<span className='pr-2'><i className="fal fa-sitemap"></i></span>
						<h2>Category</h2>
						<span className="w-3 h-3 ml-auto"><i className="far fa-chevron-double-down"></i></span>
					</a>
					<ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
						<li className="relative">
							<a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">All Category</a>
						</li>
						<li className="relative">
							<a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Add Category</a>
						</li>
					</ul>
				</li>

				<li className="relative" id="sidenavSecEx3">
					<a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx3" aria-expanded="false" aria-controls="collapseSidenavSecEx3">
						<span className='pr-2'><i className="fal fa-sitemap"></i></span>
							<h2>Products</h2>
						<span className="w-3 h-3 ml-auto"><i className="far fa-chevron-double-down"></i></span>
					</a>
					<ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
						<li className="relative">
							<a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 3</a>
						</li>
						<li className="relative">
							<a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 4</a>
						</li>
					</ul>
				</li>

				<li className="relative" id="sidenavSecEx4">
					<a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx4" aria-expanded="false" aria-controls="collapseSidenavSecEx4">
						<span className='pr-2'><i className="fal fa-sitemap"></i></span>
							<h2>Blogs</h2>
						<span className="w-3 h-3 ml-auto"><i className="far fa-chevron-double-down"></i></span>
					</a>
					<ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx4" aria-labelledby="sidenavSecEx4" data-bs-parent="#sidenavSecExample">
						<li className="relative">
							<a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 3</a>
						</li>
						<li className="relative">
							<a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 4</a>
						</li>
					</ul>
				</li>

			</ul>
			<div className="text-center bottom-0 absolute w-full">
				<hr className="m-0"/>
				<p className="py-2 text-sm text-gray-700">Hasan Mia</p>
			</div>
		</div>
	);
};

export default Sidebar;