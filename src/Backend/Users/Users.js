import React from 'react';
import Loading from '../../Frontend/Loading/Loading';

const Users = () => {
	 const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://secret-dusk-46242.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
	return (
		<div>
			
		</div>
	);
};

export default Users;