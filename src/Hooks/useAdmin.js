import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const useAdmin = () => {
    const [user]=useAuthState(auth)
    const [admin, setAdmin] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `${email} ${localStorage.getItem('accessToken')}`
                }
            })
        .then((response) => response.json())
        .then((data) => setAdmin(
        data, setIsLoad(false)));
    }
    }, [user, isLoad])

    return {admin, isLoad, setIsLoad}
};

export default useAdmin;