import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import './Checkout.css';

const stripePromise = loadStripe(
  'pk_test_51L3NBcEbb3guYHF5enttHC8JWsbeVqYnk0NBkLXFbNo6SmkQjoSydWQMXPyW08Yz7PkMJnWvI7gmMXPvFMNKtbfz00NABkP8ru'
)

const Checkout = () => {
	const {id}=useParams();
    const url = `https://localhost:5000/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `token ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

	return (
		<section>
			<div className="px-3 md:w-5/12">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-3 items-center">
                        <div className="w-32"><span className="text-gray-600 font-semibold">Contact</span></div>
                        <div className="flex-grow pl-3"><span>Scott Windon</span></div>
                    </div>
                    <div className="w-full flex items-center">
                        <div className="w-32"><span className="text-gray-600 font-semibold">Billing Address</span></div>
                        <div className="flex-grow pl-3"><span>123 George Street, Sydney, NSW 2000 Australia</span></div>
                    </div>
                </div>

                {/* Card Option */}
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light p-4">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
		</section>
	);
};

export default Checkout;