import footlogo from '../../Assets/logo-footer.png'
import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer pt-10'>
			<div className="container px-8">
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
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
							<li>About online food</li>
							<li>Read our blog</li>
							<li>Sign up to deliver</li>
							<li>Add your resturent</li>
						</nav>
					</div>
				</div>

			</div>
			<p className='bg-black text-white text-center'>&copy; 2022 all right reserveb by redonions.com</p>
		</footer>
	);
};

export default Footer;