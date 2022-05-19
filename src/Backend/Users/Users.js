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
		<div class="flex flex-col">
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
							First
						</th>
						<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
							Last
						</th>
						<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
							Handle
						</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b">
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
						<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
							Mark
						</td>
						<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
							Otto
						</td>
						<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
							@mdo
						</td>
						</tr>
						<tr class="bg-white border-b">
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
						<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
							Jacob
						</td>
						<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
							Thornton
						</td>
						<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
							@fat
						</td>
						</tr>
						<tr class="bg-white border-b">
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
						<td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
							Larry the Bird
						</td>
						<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
							@twitter
						</td>
						</tr>
					</tbody>
					</table>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Users;