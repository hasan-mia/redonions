import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';

const useMyOrder = () => {
	const[user]=useAuthState(auth)
	const [myorders, setOrders] = useState([]);
	const [isLoad, setIsLoad] = useState(true)
		useEffect(() => {
			const url = `http://localhost:5000/myorders`;
			fetch(url, {
			headers: {
				'authorization': `${user?.email} ${localStorage.getItem("accessToken")}`,
			},
			})
			.then(res => res.json())
			.then(data => setOrders(data,setIsLoad(false)))
	},[user?.email, isLoad])
	return {myorders, setOrders}
};

export default useMyOrder;