import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Frontend/Loading/Loading';
import useUsers from '../../Hooks/useUsers';

const User = ({item, index, setIsLoad}) => {
	const {users, setUsers, isLoad} = useUsers();
	const {name, email, role} = item;
	
    //======= Make Admin =========
	const makeAdmin = () => {
        fetch(`https://redonions.herokuapp.com/user/admin/${email}`, {
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
                }
                toast.success(`Successfully made an admin`);
            })
    }

    //======= Make Editor =========
	const makeEditor = () => {
        fetch(`https://redonions.herokuapp.com/user/editor/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `${email} ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to create editor');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
					setIsLoad(true);
                }
                toast.success(`Successfully create editor`);
            })
    }

	// Delete User
	const handleDelete = () => {
        const confirm = window.confirm('Are you sure you want to delete?');

        if(confirm){
            const url = `https://redonions.herokuapp.com/delete-user/${email}`;
            fetch(url, {
                method: 'DELETE',
				headers: {
                    authorization: `${email} ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
					// const remaining = users.filter(item => item.email !== email);
                    // setUsers(remaining);
					setIsLoad(true);
                }
                toast.success("Successfully Removed");
            })
        }
    }

	if (isLoad) {
		return <Loading></Loading>
	}

	return (
		<tr className="bg-white border-b">
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
			<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
				{name? name : email}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
				{
                role === 'admin' ? 
				<p className='text-lg font-semibold'>Admin</p>
				:
				role === 'editor' ? 
				<p className='text-lg font-semibold'>Editor</p>
				:
                <div className='p-1'>
                    <button onClick={makeAdmin} className="btn btn-xs bg-green-500 text-white mx-1 p-1 rounded-md">Make Admin</button>
                    <button onClick={makeEditor} className="btn btn-xs bg-green-500 text-white mx-1 p-1 rounded-md">Make Editor</button>
                </div>
			    }
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
				<button onClick={() => handleDelete() } > <span className="fas fa-trash-alt"></span></button> 
			</td>
		</tr>
	);
};

export default User;