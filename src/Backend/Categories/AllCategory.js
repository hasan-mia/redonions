import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Frontend/Loading/Loading';
import useCategories from '../../Hooks/useCategories';

const AllCategory = () => {
	const [user]=useAuthState(auth)
	const {categories, setCategories, isLoad, setIsLoad} = useCategories();
	// Delete User
	// Delete Product
	const handleCategorytDelete = id => {
        const confirm = window.confirm('Are you sure you want to delete?');

        if(confirm){
            const url = `http://localhost:5000/category/${id}`;
            fetch(url, {
                method: 'DELETE',
				headers: {
					'content-type': 'application/json',
					authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
				}
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remaining = categories.filter(category => category._id !== id);
                    setCategories(remaining);
					setIsLoad(true);
                }
				toast.success("Deleted Successfully");
            })
        }
    }
	if (isLoad) {
		return <Loading></Loading>
	}
	return (
		<div class="w-full">
			<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
				<div class="overflow-hidden">
					<table class="min-w-full text-center">
					<thead class="border-b bg-gray-50">
						<tr>
						<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
							#
						</th>
						<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
							Name
						</th>
						<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
							Image
						</th>
						<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
							Delete
						</th>
						</tr>
					</thead>
					<tbody>
						{
							categories.map((item, index) =>
								<tr className="bg-white border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										{item.title}
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<img src={item.img} alt="cat-image" className='w-1/4 h-1/4'/>
									</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										<button onClick={()=>handleCategorytDelete(item._id)}> <span className="fas fa-trash-alt"></span></button> 
									<span>{typeof item._id}</span>
									</td>
								</tr>
							)
						}
						
						
					</tbody>
					</table>
				</div>
				</div>
			</div>
		</div>
	);
};

export default AllCategory;