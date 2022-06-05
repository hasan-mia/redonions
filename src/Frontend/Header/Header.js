import logo from '../../Assets/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../../Hooks/useAdmin';
// import useEditor from '../../Hooks/useEditor';
import './Header.css';
import { useCart } from 'react-use-cart';

const Header = ({ fixed }) => {
    const [user]=useAuthState(auth)
    const {admin} = useAdmin(user);
    // const {editor} = useEditor(user);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const {totalUniqueItems} = useCart();
	return (
		<header id="navbar" className="styles.navbar w-full md:mb-0 mb-8">
            {
                admin.admin === true?
                <nav className="relative flex flex-wrap items-center justify-between p-2 lg:border-b bg-white">
                    <div className={`container ${ admin.admin===true ? 'px-0' : 'px-8'} mx-auto flex flex-wrap items-center justify-between`}>
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <button className="flex whitespace-nowrap px-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                <i className='fas fa-bars text-lg'></i>
                                <span className='ml-2 text-lg'>Dashboard</span>
                            </button>
                         
                            <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border-2 bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                            <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        <div className={"lg:flex flex-grow items-center" +(navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                        {/* Main Right Item */}
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                            {
                                admin.admin === true &&
                                <Link className = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 rounded-2xl bg-red-500 text-white"
                                to="/dashboard">Red Onion Dashboard</Link>
                            }
                            
                        
                        </ul>
                        
                        {/* Main Right Item */}
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {
                                !user? 
                                <Link className = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 rounded-2xl hover:bg-red-600 hover:text-white"
                                to="/signin">Signin</Link>
                                :
                                <span>
                                    <span>{user?.displayName}</span>
                                    <button className = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 rounded-2xl hover:bg-red-600 hover:text-white"
                                    onClick={() => signOut(auth)}>Sign out</button>
                                </span>
                            }
                            
                        
                        </ul>
                    </div>
                    </div>
                </nav> 

                :
                <nav className="relative flex flex-wrap items-center justify-between p-2 lg:border-b bg-white">
                    <div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                            <Link className="text-sm flex font-bold leading-relaxed items-center mr-4 py-2 whitespace-nowrap"
                            to="/">
                            <img src={logo} alt="" className='logo w-1/4'/>
                            </Link>
                            <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border-2 bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                            <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        <div className={"lg:flex flex-grow items-center" +(navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                      
                        
                        {/* Main Right Item */}
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                                to="/cart">
                                <i className="far fa-cart-plus fa-2x text-2xl leading-lg opacity-75"></i>
                                {/* {
                                    myorders.map(item=>
                                    <span className="top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform -translate-y-1/2 border-2 rounded-full">
                                    {item?.ordernumber}</span>
                                    )
                                } */}
                                <span className="top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform -translate-y-1/2 border-2 rounded-full">
                                    {totalUniqueItems}</span>
                                </Link>
                            </li>

                            {
                                !user? 
                                <Link className = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 rounded-2xl hover:bg-red-600 hover:text-white"
                                to="/signin">Signin</Link>
                                :
                                <button className = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 rounded-2xl hover:bg-red-600 hover:text-white"
                                onClick={() => signOut(auth)}>Sign out</button>
                            }
                        </ul>
                    </div>
                    </div>
                </nav> 

            }

        </header>
	);
};

export default Header;