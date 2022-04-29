import footlogo from '../../Assets/logo-footer.png'
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='pt-10'>
			<div className="footer">
				<div className="container px-8">
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:justify-items-center justify-items-start">
						<div className="grid-item">
							<img src={footlogo} alt="" />
						</div>
						<div className="grid-item">
							<nav className='footer-link text-white float-right'>
								<li>About online food</li>
								<li>Read our blog</li>
								<li>Sign up to deliver</li>
								<li>Add your resturent</li>
							</nav>
						</div>

						<div className="grid-item">
							<nav className='footer-link text-white float-right'>
								<li>Get Help</li>
								<li>Read FAQs</li>
								<li>View All Cities</li>
								<li>Restaurent Near Me</li>
							</nav>
						</div>
					</div>

				</div>
			</div>
			<div className="md:flex md:justify-between w-full bg-black text-white md:px-16 px-8 py-2">
				<div className="copyright">
					<p className='md:text-center'>&copy; 2022 all right reserveb by redonions.com</p>
				</div>
				<div className="link">
					<nav className='flex gap-3'>
						<li><Link to='/privacy'>Privacy Policy</Link></li>
						<li><Link to='/terms'>Terms of use</Link></li>
						<li>Price</li>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;