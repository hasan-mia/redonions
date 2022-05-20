import React from 'react';
import { toast } from 'react-toastify';

const User = ({item, index, setIsLoad}) => {
	
	const {name, email, role} = item;

	const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `${email} ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
					setIsLoad(true);
                    toast.success(`Successfully made an admin`);
                }

            })
    }
	return (
		<tr className="bg-white border-b">
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
			<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
				{name? name : email}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
				{/* {role === 'admin'? role : <button className='btn'>Make Admin</button>} */}
				{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
				<button className=""> <span className="fas fa-trash-alt"></span></button> 
			</td>
		</tr>
	);
};

export default User;