import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const useCategories = () => {
    const [user]=useAuthState(auth)
    const [categories, setCategories] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/categories`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
            }
        })
        .then((response) => response.json())
        .then((data) => setCategories(
        data, setIsLoad(false)));
    }, [categories, isLoad, user?.email])

    return {categories,setCategories, isLoad, setIsLoad}
};

export default useCategories;