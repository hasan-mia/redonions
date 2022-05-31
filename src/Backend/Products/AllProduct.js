import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Frontend/Loading/Loading';
import useCategories from '../../Hooks/useCategories';

const AllProduct = () => {
	const [user]=useAuthState(auth)
	const updateCat = useNavigate();
	const {categories, setCategories, isLoad, setIsLoad} = useCategories();
	// Delete Category
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

	const createMarkup = (theExactHtmlWithTag) => { 
		return { __html: theExactHtmlWithTag }
	}

	return (
		<div className="w-full">
			<div className="overflow-x-auto mx-2 lg:-mx-8">
				<div className="py-4 inline-block min-w-full px-0 lg:px-8">
				<div className="overflow-hidden">
					<table className="min-w-full text-center">
					<thead className="border-b bg-gray-50">
						<tr>
						<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
							#
						</th>
						<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
							Name
						</th>
						<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
							Image
						</th>
						<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
							<button>Edit/</button>
							<button>Delete</button>
						</th>
						</tr>
					</thead>
					<tbody>
						{
							categories.map((item, index) =>
								<tr key={item._id} className="bg-white border-b">
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
									<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
										
									<div dangerouslySetInnerHTML={createMarkup(`${item.description}` )} />

									</td>
									<td className="text-sm text-gray-900 flex justify-center font-light px-6 py-4 whitespace-nowrap">
										<img src={item.img} alt="cat-image" className='h-1/12 w-1/6'/>
									</td>
									<td className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
										<button onClick={()=>updateCat(`/dashboard/updateCategory/${item._id}`)} className='px-2'> <span className="far fa-edit text-lg text-green-700 p-1 rounded-md"></span></button> 
										<button onClick={()=>handleCategorytDelete(item._id)} className='px-2'> <span className="fas fa-trash-alt text-lg text-red-500 p-1 rounded-md"></span></button> 
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

export default AllProduct;