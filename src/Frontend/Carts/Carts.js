import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../Firebase/Firebase.init';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Carts = () => {
	// const[user]=useAuthState(auth)
  	const {isEmpty, items, updateItemQuantity, removeItem} = useCart();
	// console.log(title);
	// ========Handle Product Order=======
	// const handleOrder = (e) => {
	// 	e.preventDefault();
	// 	const order = {
	// 		title : title,
	// 		cart : cart,
	// 		price: price,
	// 		total: total,
	// 		img : img,
	// 		email: user?.email
	// 	}
	// 	const url = `https://redonion.onrender.com/order`;
	// 	fetch(url, {
	// 	method: 'POST',
	// 	body: JSON.stringify(order),
	// 	headers: {
	// 		'Content-type': 'application/json; charset=UTF-8',
	// 	},
	// 	})
	// 	.then((response) => response.json())
	// 	.then(data => {
	// 		console.log(data);
	// 		toast.success("Add to cart successfully")
	// 		e.target.reset()
	// 	});

	// };
	

  if (isEmpty){ 
	  return <div className='text-center pt-52 min-h-screen'>
	   	<h1 className='text-5xl uppercase mb-8 text-red-500 font-semibold'>Your cart is empty</h1>
		<Link to='/' className='text-3xl font-semibold bg-green-400 rounded-lg py-1 px-2 text-white'>Go to Home</Link>
	  </div>
	}
	return (
		<section className='min-w-screen min-h-screen bg-gray-50 py-2'>
			<div className="grid grid-cols-1 justify-items-center px-5">
				<div className="mb-4">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-600 mt-0">My Cart</h1>
				</div>
				{/* <div className="mb-5 text-gray-400">
					<Link to="/" className="focus:outline-none hover:underline text-gray-500">
					Home</Link> / <Link to="/dashboard/myorders" className="focus:outline-none hover:underline text-gray-500">My Order</Link>
				</div> */}
			</div>
			{/* end breadcum */}
			<div className="flex justify-center mb-6">
				<div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
					<div className="flex-1">
						<table className="w-full text-sm lg:text-base" cellSpacing="0">
							<thead>
								<tr className="h-12 uppercase">
									<th className="text-left md:table-cell">Image</th>
									<th className="text-left">Product Name</th>
									<th className="lg:text-right text-left pl-5 lg:pl-0"> <span className="lg:hidden" title="Quantity">Qtd</span> <span className="hidden lg:inline">Quantity</span> </th>
									<th className="text-right"> Price</th>
									<th className="text-right"> Total</th>
									<th className="text-right">Remove</th>
									<th className="text-right">Payment</th>
								</tr>
							</thead>
							<tbody>
								{
									items.map((item)=>
									<tr key={item._id}>
										<td className="hidden pb-4 md:table-cell">
											<img src={item.img} className="w-20 rounded-md border p-2" alt="Thumbnail" />
										</td>
										<td>
											<p className="mb-2 ml-4 lg:ml-0 text-xl text-left font-semibold">{item.title}</p>
										</td>
										<td className="justify-center md:justify-end md:flex mt-6">
											{/* <div className="w-20 h-10">
												<form className="relative flex flex-row w-full h-8">
													<input type="number" defaultValue={
														totalItems
													} className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" /> 
													<button className='text-white bg-green-400 px-1'><i className="far fa-check-circle text-lg"></i></button>
												</form>
											</div> */}
			
											<div className="flex ml-2 rounded-full border-2 gap-2">
												<button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className=' text-gray-500 p-1'>-</button>
													<input type="text" value={item.quantity} className='text-gray-600 text-2xl w-8'/>
												<button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className=' text-red-500 p-1'>+</button>
											</div>
										</td>
										<td className="hidden text-right md:table-cell"> 
											<span className="text-sm lg:text-base font-medium">
												$ {item.price}
											</span> 
										</td>
										<td className="hidden text-right md:table-cell"> 
											<span className="text-sm lg:text-base font-medium">
												$ {item.quantity*parseInt(item.price)}
											</span> 
										</td>
										<td className="text-right"> 
											<button onClick={()=>removeItem(item.id)} className="text-sm lg:text-base font-medium bg-red-500 rounded-lg text-white p-1"><i className="fas fa-trash-alt text-lg"></i></button> 
										</td>
										<td className="text-right"> 
										<button className="text-sm lg:text-base font-medium bg-indigo-600 text-white p-1 rounded-md">
											<Link to={`/checkout/${(item._id)}`}>Pay Now</Link>	
											</button>
										{
											(item.total && !item.paid) &&
											<button className="text-sm lg:text-base font-medium bg-indigo-600 text-white p-1 rounded-md">
											<Link to={`/checkout/${(item._id)}`}>Pay Now</Link>	
											</button> 
										}
										{
											(item.total && item.paid) &&
											<span className="text-sm lg:text-base font-medium bg-green-600 text-white p-2 rounded-md">Paid
											</span> 
										}
										</td>
									</tr>
									)
								}
								

							</tbody>
							{/* <tfoot>
								<th className="text-left md:table-cell">Total</th>
								<th className="text-right md:table-cell">Total</th>
								<th className="text-right md:table-cell">Total</th>
							</tfoot> */}
						</table>
						<hr className="pb-6 mt-6" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Carts;