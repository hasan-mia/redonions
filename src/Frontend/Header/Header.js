import logo from '../../Assets/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<header id="navbar" className="w-full md:mb-0 mb-8">
            <nav className="relative flex flex-wrap items-center justify-between p-2 lg:border-b bg-white">
                <div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                        className="text-sm flex font-bold leading-relaxed items-center mr-4 py-2 whitespace-nowrap"
                        href="/"
                        >
                        <img src={logo} alt="" className='logo w-1/4'/>
                        </a>
                        <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border-2 bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        <i className="fas fa-bars"></i>
                        </button>
                    </div>
                <div className={"lg:flex flex-grow items-center" +(navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                    {/* Main Left Item */}
                    {/* <ul className="flex flex-col lg:flex-row list-none lg:ms-auto">
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/">
                            <i className="fas fa-home text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/category">
                            <i className="fab fa-empire text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Category</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/order">
                            <i className="fab fa-firstdraft text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Order</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/products">
                            <i className="fab fa-firstdraft text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Products</span>
                            </Link>
                        </li>
                    </ul> */}

                

                    {/* Main Right Item */}
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                            to="/cart">
                            <i className="far fa-cart-plus fa-2x text-2xl leading-lg opacity-75"></i>
                            <span className="top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform -translate-y-1/2 border-2 rounded-full">99</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            < Link className = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 rounded-2xl hover:bg-red-600 hover:text-white"
                            to="/signin">
								Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            < Link className = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 rounded-2xl hover:bg-red-600 hover:text-white"
                            to="/signup">
								Sign up
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                            to="/user">
                            <i className="fas fa-user text-2xl leading-lg opacity-75"></i><span className="ml-2"></span>
                            </Link>
                        </li> */}
                       
                    </ul>
                </div>
                </div>
            </nav>

        </header>
	);
};

export default Header;