import React from 'react';
import Loading from '../../Frontend/Loading/Loading';
import useUsers from '../../Hooks/useUsers';
import User from './User';

const Users = () => {
    const {users, isLoad, setIsLoad} = useUsers()

	if (isLoad) {
		return <Loading></Loading>
	}
	return (
		<div className="w-full">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
				<div className="overflow-hidden">
					<table className="min-w-full text-center">
					<thead className="border-b bg-gray-50">
						<tr>
						<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
							#
						</th>
						<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
							Name/Email
						</th>
						<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
							Role
						</th>
						<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
							Delete
						</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map((item, index)=>
								<User 
									key={item._id}
									item={item}
									index={index}
									setIsLoad={setIsLoad}
								/>
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