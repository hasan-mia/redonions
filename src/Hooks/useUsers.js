import { useEffect, useState } from "react"

const useUsers = () => {
	const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `${email} ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdminLoading(false);
            })
        }
    }, [user])

    return [admin, adminLoading]
};

export default useUsers;