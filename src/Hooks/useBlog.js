import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";

const useBlog = (url) => {
	const [user]=useAuthState(auth)
    const [blogs, setBlogs] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        fetch(`${url}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
            }
        })
        .then((response) => response.json())
        .then((data) => setBlogs(
        data, setIsLoad(false)));
    }, [isLoad])

    return [blogs, isLoad]
};

export default useBlog;