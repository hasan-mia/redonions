import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useMyOrder from '../../Hooks/useMyOrder';
import { productContext } from '../../App';

const Cart = () => {
	const[user]=useAuthState(auth)
	const {cart, dispatch} = useContext(productContext);
	const {myorders, setOrders} = useMyOrder()
  
  
  	// Delete Product
	const handleOrderDelete = id =>{
        const confirm = window.confirm('Are you sure you want to delete?');

        if(confirm){
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    // const remaining = myorders.filter(myorder => myorder._id !== id);
                    // setOrders(remaining);
                }
				toast.success("Delete successfully");
            })
        }
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
						<table className="w-full text-sm lg:text-base" cellspacing="0">
							<thead>
								<tr className="h-12 uppercase">
									<th className="text-left md:table-cell">Image</th>
									<th className="text-left">Product</th>
									<th className="lg:text-right text-left pl-5 lg:pl-0"> <span className="lg:hidden" title="Quantity">Qtd</span> <span className="hidden lg:inline">Quantity</span> </th>
									<th className="text-right"> Price</th>
									<th className="text-right"> Total</th>
									<th className="text-right">Remove</th>
									<th className="text-right">Payment</th>
								</tr>
							</thead>
							<tbody>
								{
									myorders.map((myorder)=>
									<tr key={myorder._id}>
										<td className="hidden pb-4 md:table-cell">
											<img src={myorder.img} className="w-20 rounded-md border p-2" alt="Thumbnail" />
										</td>
										<td>
											<p className="mb-2 md:ml-4">{myorder.title}</p>
										</td>
										<td className="justify-center md:justify-end md:flex mt-6">
											<div className="w-20 h-10">
												<form className="relative flex flex-row w-full h-8">
													<input type="number" defaultValue={
														myorder.cart
													} className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" /> 
													<button className='text-white bg-green-400 px-1'><i className="far fa-check-circle text-lg"></i></button>
												</form>
											</div>
			
											{/* <div className="flex ml-2 rounded-full border-2 gap-2">
												<button onClick={()=>dispatch({type:'decrement'})} className=' text-gray-500 p-1'>-</button>
													<input type="text" value={myorder.cart} className='text-gray-600 text-2xl w-4'/>
												<button onClick={()=>dispatch({type:'increment'})} className=' text-red-500 p-1'>+</button>
											</div> */}
										</td>
										<td className="hidden text-right md:table-cell"> 
											<span className="text-sm lg:text-base font-medium">
												$ {myorder.price}
											</span> 
										</td>
										<td className="hidden text-right md:table-cell"> 
											<span className="text-sm lg:text-base font-medium">
												$ {myorder.total}
											</span> 
										</td>
										<td className="text-right"> 
											<button onClick={()=>handleOrderDelete(myorder._id)} className="text-sm lg:text-base font-medium bg-red-500 rounded-lg text-white p-1"><i className="fas fa-trash-alt text-lg"></i></button> 
										</td>
										<td className="text-right"> 
										{
											(myorder.total && !myorder.paid) &&
											<button className="text-sm lg:text-base font-medium bg-indigo-600 text-white p-1 rounded-md">
											<Link to={`/dashboard/checkout/${(myorder._id)}`}>Pay Now</Link>	
											</button> 
										}
										{
											(myorder.total && myorder.paid) &&
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

export default Cart;