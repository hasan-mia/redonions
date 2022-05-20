import React from 'react';
// import { useQuery } from 'react-query';
import Loading from '../../Frontend/Loading/Loading';
import useUsers from '../../Hooks/useUsers';

const Users = () => {
    const [users, isLoad] = useUsers(`http://localhost:5000/users`)
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
							Name/Email
						</th>
						<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
							Role
						</th>
						<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
							Delete
						</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map((item, index)=>
								<tr key={item._id} class="bg-white border-b">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									{item.name? item.name : item.email}
								</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									{item.role == 'admin'? item.role : <button className='btn'>Make Admin</button>}
								</td>
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									<button className=""> <span className="fas fa-trash-alt"></span></button> 
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

export default Users;