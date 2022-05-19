import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const useProducts = (url) => {
	const [user]=useAuthState(auth)
    const [products, setProducts] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        fetch(`${url}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
            }
        })
        .then((response) => response.json())
        .then((data) => setProducts(
        data, setIsLoad(false)));
    }, [isLoad])

    return [products, isLoad]
};

export default useProducts;